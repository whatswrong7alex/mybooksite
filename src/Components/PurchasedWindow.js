import './PurchasedWindow.css'
import purchased from '../images/purchased.png'

const PurchasedWindow = (props) => {
    const {active, setActive} = props
    
    function closeModal() {
        setActive(false)
    }

    if(active) {
        return (
            <div onClick={closeModal} className="window_wrapper" >
                <div onClick={e => e.stopPropagation()} className="window_container">
                    <div>
                        <img src={purchased} alt="purchased"></img>
                    </div>
                    <div className="window_text">Дякуємо за довіру!</div>
                    <div onClick={closeModal} className="window_button">Повернутись на головну сторінку!</div>
                </div>
            </div>
        )
    }
    else {
        return null
    }
    
}


export default PurchasedWindow;
