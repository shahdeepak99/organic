import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import Order from '../../../models/Order';

export const dynamic = 'force-dynamic';

// GET - Fetch all orders
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const orders = await Order.find({}).sort({ createdAt: -1 });
        
        return NextResponse.json({ 
            success: true, 
            data: orders 
        }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ 
            success: false, 
            error: error.message || 'Error fetching orders' 
        }, { status: 500 });
    }
}

// POST - Create new order
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const data = await request.json();
        
        const newOrder = new Order(data);
        await newOrder.save();
        
        return NextResponse.json({ 
            success: true, 
            data: newOrder,
            message: 'Order created successfully'
        }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ 
            success: false, 
            error: error.message || 'Error creating order' 
        }, { status: 500 });
    }
}