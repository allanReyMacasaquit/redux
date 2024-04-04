import { useDispatch } from 'react-redux';
import { Minus, Plus } from './assets';
import { removeItem } from '../redux/toolkit/slice/cartSlice';

const CartItem = ({ id, img, title, price, amount }) => {
	const dispatch = useDispatch();
	return (
		<article className='cart-item'>
			<img src={img} alt={title} />
			<div>
				<h4>{title}</h4>
				<h4 className='item-price'>${price}</h4>
				<button
					className='remove-btn'
					onClick={() => {
						dispatch(removeItem(id));
					}}
				>
					remove
				</button>
			</div>
			<div style={{ display: 'flex' }}>
				<button className='amount-btn'>
					<Minus />
				</button>
				<p className='amount'>{amount}</p>
				<button className='amount-btn'>
					<Plus />
				</button>
			</div>
		</article>
	);
};
export default CartItem;
