import './Header.css'
import Cart from '../images/Cart.png'
import cover from '../images/cover.jpg'

const Header = (props) => {
    const {cartItems, onClickCart} = props
    return (
        <div className="header_wrapper">
            <div className="header_navbar">
                <div className="header_logo">Books.</div>
                <div className="header_cart" onClick={onClickCart}>
                    {cartItems.length > 0 && <div className="header_cartNum">{cartItems.length}</div>}
                    <img src={Cart} alt="Cart"></img>
                </div>
            </div>
            <div className="header_cover">
                <img className="header_image" src={cover} alt="cover"></img>
            </div>
        
            
        </div>
    )
}

export default Header;