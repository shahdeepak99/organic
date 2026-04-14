import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../lib/mongodb';
import Order from '../../../models/Order';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    if (req.method === 'POST') {
        try {
            const order = new Order(req.body);
            await order.save();
            return res.status(201).json(order);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating order', error });
        }
    } else if (req.method === 'GET') {
        try {
            const orders = await Order.find({});
            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching orders', error });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}