export const CartIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-6 w-6 '
			fill='none'
			viewBox='0 0 24 24'
			stroke='currentColor'
			strokeWidth={2}
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
			/>
		</svg>
	);
};

export const Minus = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			class='w-6 h-6'
		>
			<path stroke-linecap='round' stroke-linejoin='round' d='M5 12h14' />
		</svg>
	);
};

export const Plus = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke='currentColor'
			class='w-6 h-6'
		>
			<path
				stroke-linecap='round'
				stroke-linejoin='round'
				d='M12 4.5v15m7.5-7.5h-15'
			/>
		</svg>
	);
};
