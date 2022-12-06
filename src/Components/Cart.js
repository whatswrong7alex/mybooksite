import './Cart.css'
import CartItem from './CartItem'
import {useEffect, useState} from 'react'
import CartIsEmpty from './CartIsEmpty'

const Cart = (props) => {

    const {active, setActive, cartItems, onRemove, onModal} = props
    const [countSum, setCountSum] = useState()


    useEffect(() => {
        setCountSum(cartItems.reduce((sum, obj) => obj.price + sum, 0))
    }, [cartItems])


    function onCloseClick() {
        setActive(false)
    }

    

    if(active) {
        return (
            <div className='cart_container' onClick={() => setActive(false)}>
                <div className='cart_sideblock' onClick={e => e.stopPropagation()}>
                    {cartItems.length > 0 ?
                        <div className="cart_notempty">
                            <div className='cart_block'>
                                <h2 className="cart_title">Кошик</h2>
                                <div onClick={() => setActive(false)} className="cart_button">X</div> 
                            </div>
                            <div className="cart_items">
                                {cartItems.map((item) => 
                                    <CartItem onMinus={() => onRemove(item.id)} id={item.id} key={item.id} title={item.title} author={item.author} price={item.price} img={item.img}></CartItem>
                                )}
                            </div>
                            <div className="cart_lowerBlock">
                                <div className="cart_sumBlock">
                                    <div className="cart_sumText">Сума:</div>
                                    <div className="cart_sumNum">{countSum} грн</div>
                                </div>
                                <div className="cart_sumBlock">
                                    <div className="cart_sumText">Знижка:</div>
                                    <div className="cart_sumNum + redAction">-10%</div>
                                </div>
                               {countSum >= 500 && <div className="cart_sumBlock">
                                    <div className="cart_sumText">Доставка:</div>
                                    <div className="cart_sumNum + redAction">Безкоштовно</div>
                                </div>}
                                <div className="cart_sumBlock">
                                    <div className="cart_sumText">Усього:</div>
                                    <div className="cart_sumNum">{countSum >= 500 ? countSum - countSum / 10 : countSum - countSum / 10} грн</div>
                                </div>
                                
                                <div onClick={() => onModal(countSum >= 500 ? countSum - countSum / 10 : countSum - countSum / 10)} className="cart_sumButton">Купити</div>
                            </div>
                        </div>
                    : <CartIsEmpty onClose={onCloseClick}></CartIsEmpty>}
                </div>
            </div>
        )
        
    }

    else {
        return(null);
    }
    
            
       
    
  
    
}

export default Cart;