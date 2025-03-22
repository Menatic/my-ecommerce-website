import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { state, totalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <div className="row">
        <div className="col-md-8">
          <h4>Order Summary</h4>
          {state.cart.map(item => (
            <div key={item.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">${item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-success">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;