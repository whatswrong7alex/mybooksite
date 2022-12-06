import './CartIsEmpty.css'
import emptycart from '../images/emptycart.png'
import arrow from '../images/arrow.png'

const CartIsEmpty = (props) => {
    const {onClose} = props
    
    return (
        <div className="cartisempty_container">
            <img className="cartisempty_img" src={emptycart} alt="emptycart"></img>
            <div className="cartisempty_title">Тут поки що пусто</div>
            <div className="cartisempty_description">Додайте хоча б один товар</div>
            <div onClick={onClose} className="cartisempty_button">
                <img className="cartisempty_arrow" src={arrow} alt="arrow"></img>
                <div className="cartisempty_subtext">Повернутись на головну сторінку!</div>
            </div>
        </div>
    )
}

export default CartIsEmpty;
