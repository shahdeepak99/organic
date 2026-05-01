import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOrderConfirmationEmail(order: {
  _id: string;
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  razorpayPaymentId?: string;
}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.warn('Email credentials not configured — skipping email');
    return;
  }

  const shortId = order._id.toString().slice(-8).toUpperCase();

  const itemsHtml = order.items
    .map(
      (item) => `
      <tr>
        <td style="padding:12px 16px;border-bottom:1px solid #f0e8d0;color:#374151;">${item.name}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #f0e8d0;text-align:center;color:#374151;">${item.quantity}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #f0e8d0;text-align:right;color:#374151;">₹${item.price}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #f0e8d0;text-align:right;font-weight:600;color:#1f2937;">₹${item.price * item.quantity}</td>
      </tr>`
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:20px;background:#fdf8f0;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#7d9374 0%,#5a7050 100%);padding:40px 32px;text-align:center;">
      <div style="font-size:32px;margin-bottom:4px;">🌿</div>
      <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:1px;">Pavanam</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.80);font-size:13px;">Pure Organic Foods</p>
    </div>

    <!-- Success Banner -->
    <div style="background:#f0fdf4;border-left:4px solid #22c55e;padding:16px 32px;">
      <p style="margin:0;color:#16a34a;font-weight:700;font-size:15px;">✅ Order Confirmed!</p>
      <p style="margin:4px 0 0;color:#4b5563;font-size:13px;">Your ghee will be dispatched within 24 hours.</p>
    </div>

    <!-- Body -->
    <div style="padding:32px;">
      <p style="margin:0 0 6px;color:#374151;font-size:15px;">Hi <strong>${order.user.name}</strong>,</p>
      <p style="margin:0 0 24px;color:#6b7280;font-size:14px;line-height:1.7;">
        Thank you for shopping with Pavanam! We've received your payment and are preparing your order with care.
      </p>

      <!-- Order ID -->
      <div style="background:#fdf8f0;border:1px solid #f0e8d0;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
        <p style="margin:0;color:#92400e;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Order ID</p>
        <p style="margin:4px 0 0;color:#1f2937;font-size:20px;font-weight:700;font-family:monospace;">#${shortId}</p>
        ${order.razorpayPaymentId ? `<p style="margin:6px 0 0;color:#6b7280;font-size:12px;">Payment ID: ${order.razorpayPaymentId}</p>` : ''}
      </div>

      <!-- Items Table -->
      <h3 style="margin:0 0 12px;color:#374151;font-size:15px;font-weight:700;">Order Summary</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:0;">
        <thead>
          <tr style="background:#f9fafb;">
            <th style="padding:12px 16px;text-align:left;color:#6b7280;font-weight:600;border-bottom:2px solid #e5e7eb;font-size:12px;text-transform:uppercase;">Product</th>
            <th style="padding:12px 16px;text-align:center;color:#6b7280;font-weight:600;border-bottom:2px solid #e5e7eb;font-size:12px;text-transform:uppercase;">Qty</th>
            <th style="padding:12px 16px;text-align:right;color:#6b7280;font-weight:600;border-bottom:2px solid #e5e7eb;font-size:12px;text-transform:uppercase;">Rate</th>
            <th style="padding:12px 16px;text-align:right;color:#6b7280;font-weight:600;border-bottom:2px solid #e5e7eb;font-size:12px;text-transform:uppercase;">Amount</th>
          </tr>
        </thead>
        <tbody>${itemsHtml}</tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="padding:12px 16px;text-align:right;color:#6b7280;font-size:13px;">Shipping</td>
            <td style="padding:12px 16px;text-align:right;color:#374151;font-size:13px;">FREE</td>
          </tr>
          <tr style="background:#f9fafb;">
            <td colspan="3" style="padding:14px 16px;text-align:right;font-weight:700;color:#1f2937;font-size:16px;">Total Paid</td>
            <td style="padding:14px 16px;text-align:right;font-weight:700;color:#7d9374;font-size:18px;">₹${order.totalAmount}</td>
          </tr>
        </tfoot>
      </table>

      <!-- Delivery Address -->
      <div style="margin-top:24px;background:#f9fafb;border-radius:10px;padding:18px 20px;">
        <p style="margin:0 0 8px;color:#374151;font-size:13px;font-weight:700;">📦 Delivery Address</p>
        <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.7;">
          ${order.user.address}<br>
          ${order.user.city}, ${order.user.state} — ${order.user.pincode}<br>
          📞 ${order.user.phone}
        </p>
      </div>

      <!-- Payment Confirmed -->
      <div style="margin-top:16px;background:#f0fdf4;border-radius:10px;padding:14px 20px;">
        <p style="margin:0;color:#374151;font-size:14px;">💳 <strong>Payment:</strong> Online (Razorpay) &nbsp;—&nbsp; <span style="color:#16a34a;font-weight:700;">Paid ✓</span></p>
      </div>

      <p style="margin-top:28px;color:#9ca3af;font-size:13px;line-height:1.6;">
        Questions? Email us at <a href="mailto:hello@pavanam.in" style="color:#7d9374;text-decoration:none;font-weight:600;">hello@pavanam.in</a>
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:24px 32px;text-align:center;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">Pavanam &nbsp;|&nbsp; Dwarka, New Delhi &nbsp;|&nbsp; hello@pavanam.in</p>
      <p style="margin:8px 0 0;color:#d4a574;font-size:12px;font-style:italic;">Made the Old Way. Loved Every Day.</p>
    </div>

  </div>
</body>
</html>`;

  const subject = `Order Confirmed #${shortId} — Pavanam`;

  // Email to customer
  await transporter.sendMail({
    from: `"Pavanam" <${process.env.EMAIL_USER}>`,
    to: order.user.email,
    subject,
    html,
  });

  // Notify store owner
  const notifyEmail = process.env.EMAIL_NOTIFY;
  if (notifyEmail) {
    await transporter.sendMail({
      from: `"Pavanam Orders" <${process.env.EMAIL_USER}>`,
      to: notifyEmail,
      subject: `🛒 New Order #${shortId} — ₹${order.totalAmount} | ${order.user.name}`,
      html,
    });
  }
}
