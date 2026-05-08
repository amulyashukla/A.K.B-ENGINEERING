import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('analytics');
  const [visitorData, setVisitorData] = useState([]);
  const [orders, setOrders] = useState([]);

  // Simple authentication (in production, use proper auth)
  const ADMIN_PASSWORD = 'akbadmin2024';

  useEffect(() => {
    // Check if already authenticated
    const authStatus = localStorage.getItem('akb_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    // Load visitor data
    const visitors = JSON.parse(localStorage.getItem('akb_visitors') || '[]');
    setVisitorData(visitors);

    // Load orders
    const orderData = JSON.parse(localStorage.getItem('akb_orders') || '[]');
    setOrders(orderData);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('akb_admin_auth', 'true');
      loadData();
    } else {
      alert('Invalid password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('akb_admin_auth');
    setPassword('');
  };

  const updateOrderStatus = (orderId, status) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('akb_orders', JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem('akb_orders', JSON.stringify(updatedOrders));
  };

  if (!isAuthenticated) {
    return (
      <main className="mx-auto max-w-md px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-10 shadow-glow"
        >
          <h1 className="text-3xl font-semibold text-white text-center mb-8">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-4 text-slate-100 outline-none transition focus:border-brand-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
            >
              Login
            </button>
          </form>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-white">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 border border-red-500/20 hover:bg-red-500/20 transition"
        >
          Logout
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-4 mb-8 border-b border-slate-800">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === 'analytics'
              ? 'text-brand-400 border-b-2 border-brand-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Analytics
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === 'orders'
              ? 'text-brand-400 border-b-2 border-brand-400'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Orders ({orders.length})
        </button>
      </div>

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6 shadow-glow">
            <h3 className="text-lg font-semibold text-white">Total Visitors</h3>
            <p className="text-3xl font-bold text-brand-400 mt-2">{visitorData.length}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6 shadow-glow">
            <h3 className="text-lg font-semibold text-white">Total Orders</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">{orders.length}</p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6 shadow-glow">
            <h3 className="text-lg font-semibold text-white">Pending Orders</h3>
            <p className="text-3xl font-bold text-yellow-400 mt-2">
              {orders.filter(order => order.status === 'pending').length}
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6 shadow-glow lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Visitors</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {visitorData.slice(-10).reverse().map((visitor, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-slate-800/50">
                  <div>
                    <p className="text-sm text-slate-300">{visitor.page}</p>
                    <p className="text-xs text-slate-500">{visitor.timestamp}</p>
                  </div>
                  <span className="text-xs text-brand-400">{visitor.ip || 'Local'}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-[2rem] border border-slate-800/90 bg-slate-900/70 p-6 shadow-glow">
            <h3 className="text-lg font-semibold text-white mb-4">Order Management</h3>
            <div className="space-y-4">
              {orders.length === 0 ? (
                <p className="text-slate-400 text-center py-8">No orders yet</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="border border-slate-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-white font-medium">{order.name}</h4>
                        <p className="text-sm text-slate-400">{order.email}</p>
                        <p className="text-sm text-slate-400">{order.phone}</p>
                      </div>
                      <div className="flex gap-2">
                        <select
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                          className="text-xs bg-slate-800 border border-slate-600 rounded px-2 py-1 text-slate-300"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                          onClick={() => deleteOrder(order.id)}
                          className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 rounded px-2 py-1 hover:bg-red-500/30"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div className="text-sm text-slate-300">
                      <p><strong>Service:</strong> {order.service}</p>
                      <p><strong>Message:</strong> {order.message}</p>
                      <p className="text-xs text-slate-500 mt-2">{order.timestamp}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      )}
    </main>
  );
}

export default AdminDashboard;