import { CartItemContainer, ItemDetails, Name } from './cart-item..component';

const CartItem = ({ product }) => {
  const { name, imageUrl, price, quantity } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
