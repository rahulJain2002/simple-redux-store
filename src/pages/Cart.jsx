import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/reducers/cartSlice';
import { toast } from 'react-toastify';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
	const data = useSelector((state) => state.cart);
	const [bill, setBill] = useState(0);
	const [isEmpty, setIsEmpty] = useState(true);

	const dispatch = useDispatch();

	function handleRemove(element, idx) {
		dispatch(cartActions.remove(idx))
		toast.info("Item removed from cart", { position: "top-center", autoClose: 2000 })
	}

	useEffect(() => {
		setBill(() => {
			let newBill = 0;
			for (let item of data) {
				newBill += item.price;
			}
			return newBill;
		})
	}, [data])

	return (
		<>
			<div className="cart-container">
				<h3>Cart Items</h3>

				{
					data.length === 0 ? <EmptyCart/> :

						<>
							{
								data.map((element, idx) => {
									return (
										<div className='cart-box' key={idx}>
											<img src={element.image} width={80} />
											<h3>{element.title}</h3>
											<h3>{element.price} &#8377; </h3>
											<button onClick={() => handleRemove(element, idx)} className='btn remove-btn'>Remove</button>
										</div>
									)
								})
							}

							<div className='bill'>
								Total Bil is: {bill.toFixed(2)} &#8377;
							</div>

						</>

				}

			</div>

		</>
	)
}

export default Cart