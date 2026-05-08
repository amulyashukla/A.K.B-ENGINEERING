# AKB Engineering Admin Panel

## Access the Admin Panel

1. Visit your website at `http://localhost:5174/`
2. Scroll to the bottom of any page
3. Click the small "Admin" link in the footer
4. Use password: `akbadmin2024`

## Features

### Analytics Dashboard
- **Total Visitors**: Tracks all page visits
- **Total Orders**: Shows inquiry submissions
- **Pending Orders**: Orders awaiting action
- **Recent Visitors**: Last 10 page visits with timestamps

### Order Management
- View all customer inquiries from the contact form
- Update order status (Pending → Confirmed → Completed)
- Delete orders
- See customer details, service requests, and messages

## How It Works

### Visitor Tracking
- Automatically tracks every page visit
- Stores page URL, timestamp, and user agent
- Data persists in browser localStorage

### Order Collection
- Contact form submissions are saved as orders
- Includes customer name, email, phone, service type, and message
- Orders start with "pending" status

## Security Notes

- Simple password authentication (change in production)
- Data stored in browser localStorage (not secure for production)
- For production use, implement proper authentication and database storage

## Admin Password
Default password: `akbadmin2024`

To change password, edit the `ADMIN_PASSWORD` constant in `src/pages/AdminDashboard.jsx`