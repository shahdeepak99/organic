import { NextRequest, NextResponse } from 'next/server';

// Note: In production, install razorpay package: npm install razorpay
// import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json();

    // Initialize Razorpay
    // const razorpay = new Razorpay({
    //   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
    //   key_secret: process.env.RAZORPAY_KEY_SECRET!,
    // });

    // Create an order
    // const order = await razorpay.orders.create({
    //   amount: amount, // Amount in paise
    //   currency: 'INR',
    //   receipt: `receipt_${Date.now()}`,
    //   notes: {
    //     description: 'Organic Products Purchase',
    //   },
    // });

    // For demo purposes, return a mock order
    const mockOrder = {
      id: `order_${Date.now()}`,
      entity: 'order',
      amount: amount,
      amount_paid: 0,
      amount_due: amount,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      status: 'created',
      attempts: 0,
      notes: {},
      created_at: Math.floor(Date.now() / 1000),
    };

    return NextResponse.json({
      success: true,
      order: mockOrder,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
