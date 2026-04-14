import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Stock from '@/models/Product'; // Assuming stock is managed within the Product model

export const dynamic = 'force-dynamic';

export async function GET() {
    await dbConnect();
    const stock = await Stock.find({}, 'name stock'); // Fetching product names and stock levels
    return NextResponse.json(stock);
}

export async function POST(request: NextRequest) {
    await dbConnect();
    const { id, quantity } = await request.json();

    const product = await Stock.findById(id);
    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    product.stock += quantity; // Update stock level
    await product.save();

    return NextResponse.json({ message: 'Stock updated successfully' });
}

export async function PUT(request: NextRequest) {
    await dbConnect();
    const { id, quantity } = await request.json();

    const product = await Stock.findById(id);
    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    product.stock = quantity; // Set stock level
    await product.save();

    return NextResponse.json({ message: 'Stock level set successfully' });
}

export async function DELETE(request: NextRequest) {
    await dbConnect();
    const { id } = await request.json();

    const product = await Stock.findById(id);
    if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    await product.deleteOne(); // Remove product from stock
    return NextResponse.json({ message: 'Product removed from stock' });
}