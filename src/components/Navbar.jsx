import { useSelector } from 'react-redux';
import { CartIcon } from './assets';

const Navbar = () => {
	const { itemCount } = useSelector((state) => state.cart);

	return (
		<nav>
			<div className='nav-center'>
				<h3>Store Toolkit</h3>
				<div className='nav-container'>
					<CartIcon />
					<div className='amount-container'>
						<div className='total-amount'>{itemCount}</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
