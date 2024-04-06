import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { openModal } from '../redux/toolkit/slice/modalSlice';
const CartContainer = () => {
	const dispatch = useDispatch();
	const { cartItems, totalPrice, itemCount, error } = useSelector(
		(state) => state.cart
	);

	if (error) {
		return (
			<section className='cart' style={{ textAlign: 'center' }}>
				<h2>your bag</h2>
				<header>
					<h2 style={{ color: 'red' }}>Something went Wrong</h2>
					<span style={{ fontSize: '2rem' }}>
						Your request has been {error}
					</span>
				</header>
			</section>
		);
	}

	if (itemCount < 1) {
		return (
			<section className='cart'>
				<header>
					<h2>your bag</h2>
					<h4 className='empty-cart'>is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className='cart'>
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</div>
			<footer>
				<hr />
				<div className='cart-total'>
					<h4>
						total <span>${totalPrice}</span>
					</h4>
				</div>
				<button
					className='btn clear-btn'
					onClick={() => {
						dispatch(openModal());
					}}
				>
					clear cart
				</button>
			</footer>
		</section>
	);
};
export default CartContainer;
