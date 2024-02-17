import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const Navbar = () => {
	const data = useSelector((state)=>state.cart);


	const navLinkStyles = ({isActive})=>{
		return {
			textDecoration: isActive? "underline": "none"
		}
	}

  return (
    <div className="navbar">
			<h3>REDUX STORE</h3>
			
			<div className="navbar-block">
				<NavLink to="/" style={navLinkStyles}>Home</NavLink>
				<NavLink to="/cart" style={navLinkStyles}>Cart</NavLink>
				<h3>CART ITEMS: {data.length}</h3>
			</div>

    </div>

  )
}

export default Navbar