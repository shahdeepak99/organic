import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import dbConnect from '@/lib/mongodb';
import Order from '@/models/Order';
import { sendOrderConfirmationEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderData,
    } = body;

    // 1. Verify Razorpay signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest('hex');

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json(
        { success: false, error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // 2. Save verified order to database
    await dbConnect();
    const order = await Order.create({
      user: orderData.user,
      items: orderData.items,
      totalAmount: orderData.totalAmount,
      paymentMethod: 'card',
      paymentStatus: 'paid',
      orderStatus: 'confirmed',
      notes: orderData.notes || '',
    });

    // 3. Send confirmation email (non-blocking)
    sendOrderConfirmationEmail({
      _id: order._id.toString(),
      user: order.user,
      items: order.items,
      totalAmount: order.totalAmount,
      razorpayPaymentId: razorpay_payment_id,
    }).catch((err) => console.error('Email send error:', err));

    return NextResponse.json({
      success: true,
      orderId: order._id.toString(),
    });
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { success: false, error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
