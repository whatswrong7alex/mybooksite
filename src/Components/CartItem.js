import './CartItem.css'

const CartItem = (props) => {
    const {id, title, price, author, img, onMinus} = props

    function onClickMinus() {
        onMinus({id})
    }
   
    return (
        <div key={id} className="cartItem_container">
            <div className="cartItem_block">
                <img className="cartItem_image" src={img} alt="img"></img>
                <div className="cartItem_text">
                    <div className="cartItem_title">{title}</div>
                    <div className="cartItem_author">{author}</div>
                    <div className="cartItem_price">{price} грн</div>
                </div>
            </div>
            
            <div onClick={onClickMinus} className="cartItem_button">X</div>
            
        </div>
    )
}

export default CartItem;
