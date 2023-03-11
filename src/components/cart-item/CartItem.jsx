import './cart-item.scss';

const CartItem = ({ product }) => {
  const { name } = product;
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};
export default CartItem;
