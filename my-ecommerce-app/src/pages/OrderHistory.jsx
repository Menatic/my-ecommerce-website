import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Order History</h2>
      {orders.map(order => (
        <div key={order.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Order #{order.id}</h5>
            <p className="card-text">Total: ${order.total}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;