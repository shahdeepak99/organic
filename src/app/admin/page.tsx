'use client';

import React, { useEffect, useState } from 'react';
import AdminNav from '@/components/AdminNav';
import { Package, ShoppingBag, IndianRupee, TrendingUp } from 'lucide-react';

const AdminPage = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    lowStockItems: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Fetch products
      const productsRes = await fetch('/api/products');
      const productsData = await productsRes.json();
      
      // Fetch orders
      const ordersRes = await fetch('/api/orders');
      const ordersData = await ordersRes.json();

      if (productsData.success && ordersData.success) {
        const products = productsData.data;
        const orders = ordersData.data;

        const revenue = orders.reduce(
          (sum: number, order: any) => sum + order.totalAmount,
          0
        );

        const lowStock = products.filter((p: any) => p.stock < 10).length;

        setStats({
          totalProducts: products.length,
          totalOrders: orders.length,
          totalRevenue: revenue,
          lowStockItems: lowStock,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: ShoppingBag,
      color: 'bg-green-500',
    },
    {
      title: 'Total Revenue',
      value: `₹${stats.totalRevenue.toFixed(2)}`,
      icon: IndianRupee,
      color: 'bg-purple-500',
    },
    {
      title: 'Low Stock Items',
      value: stats.lowStockItems,
      icon: TrendingUp,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-primary-50">
      <AdminNav />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage your organic products store</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/admin/products"
              className="flex items-center gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition group"
            >
              <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition">
                <Package className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Manage Products
                </h3>
                <p className="text-sm text-gray-600">
                  Add, edit, or remove products from inventory
                </p>
              </div>
            </a>

            <a
              href="/admin/orders"
              className="flex items-center gap-4 p-6 border-2 border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition group"
            >
              <div className="bg-primary-100 p-3 rounded-lg group-hover:bg-primary-200 transition">
                <ShoppingBag className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Manage Orders
                </h3>
                <p className="text-sm text-gray-600">
                  View and update order status and details
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;