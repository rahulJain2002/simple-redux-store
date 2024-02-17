import React, { useEffect, useState } from 'react'
import { cartActions } from '../redux/reducers/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const Home = () => {
	const dispatch = useDispatch();


	const [products, setProducts] = useState([]);
	const [loader,setLoader] = useState(false);

	useEffect(()=>{
		async function getData(){
			setLoader(true);
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			setProducts(data);
			setLoader(false);

		}
		getData();
	}, [])

	function handleAdd(element){
		dispatch(cartActions.add(element));
		toast.success("Added to cart 🎉", {position: "top-center",autoClose: 2000})
	}

	return (
		<div className='home-div'>
			<h1>Welcome to the redux toolkit store</h1>
			<h3>products</h3>

			{
				loader? <div className='loader'><RotatingLines strokeColor='#2A6332'/></div>: 
					<div className="product-container">
					{
						products.map((element)=>{
							return(
								<div className="product-box" key={element.id}>
									<img src={element.image} width={80} />
									<h3>{element.title}</h3>
									<h3>{element.price} &#8377; </h3>
									<button onClick={()=> handleAdd(element)} className='btn add-btn'>Add to cart</button>
								</div>
							)
						})
					}
				</div>
			}




		</div>

	)
}

export default Home