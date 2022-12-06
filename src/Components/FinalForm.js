import './FinalForm.css'
import {useState} from 'react'
import np from '../images/novaposhta.png'
import up from '../images/ukrposhta.png'
import dp from '../images/delivery.png'

const FinalForm = (props) => {
    const {sum, active, setActive, setCartItems, setPurchIsActive} = props
    const [checkedCity, setCheckedCity] = useState("Нова Пошта")
    const [checkedImg, setCheckedImg] = useState(np)
    const [isVisible, setIsVisible] = useState(false)
    const [delivPrice, setDelivPrice] = useState(50)

    const arrOptions = [
        {
            id: 1,
            city: "Нова Пошта",
            img: np,
            price: 50
        },
        {
            id: 2,
            city: "Укрпошта",
            img: up,
            price: 70
        },
        {
            id: 3,
            city: "Самовивіз",
            img: dp,
            price: 10
        }
    ]

    function onClickOption(item) {
        setCheckedCity(item.city)
        setCheckedImg(item.img)
        setDelivPrice(item.price)
    }

    function hideForm() {
        setActive(false)
    }

    function finishForm(event) {
        event.preventDefault()
        setActive(false)
        setCartItems([])
        setPurchIsActive(true)
    }

    if(active) {
        return (
            <div onClick={hideForm} className="form_wrapper">
                <div onClick={() => setActive(false)} className="form_closeButton">X</div>
                <div onClick={e => e.stopPropagation()} className="form_container"> 
                    <div className="form_title">Оформлення замовлення</div>
                    <form onSubmit={finishForm}>
                        <div className="form_contacts">
                            <div className="form_contactsTitle">Контактні дані</div>
                            <div className="form_allInputs">
                                <div className="form_inputBlock">
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Ім'я *
                                            <input required className="form_input"></input>
                                        </label>
                                    </div>
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Прізвище *
                                            <input required className="form_input"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="form_inputBlock">
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Номер телефону *
                                            <input required className="form_input"></input>
                                        </label>
                                    </div>
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Електронна пошта *
                                            <input required className="form_input"></input>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form_delivery">
                            <div className="form_deliveryTitle">Доставка</div>
                            <div className="form_allInputs">
                                <div className="form_inputBlock">
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Країна *
                                            <input required className={`form_input empty`}></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="form_inputBlock">
                                    <div className="form_contactsInput">
                                        <label className="form_label">
                                            Місто *
                                            <input required className="form_input"></input>
                                        </label>
                                    </div>
                                </div>
                                <div className="form_inputBlock">
                                    <label className="form_label">
                                        Спосіб доставки *
                                        <div onClick={() => setIsVisible(!isVisible)} className="form_select">
                                            <div className="form_selected">
                                                <img className="form_listImg" src={checkedImg} alt="img"></img> 
                                                {checkedCity}
                                            </div>
                                            {isVisible && <div className="form_list">
                                                {arrOptions.map(item =>
                                                    <div onClick={() => onClickOption(item)} className="form_optionBlock" key={item.id}>
                                                        <img className="form_listImg" src={item.img} alt="img"></img> 
                                                        <div className={`form_option + ${item.city === checkedCity ? "checked" : ""}`}>{item.city}</div>
                                                    </div>
                                                )}
                                            </div>}
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="form_pay">
                            <div className="form_payTitle">Оплата</div>
                            <div className="form_payData">
                                <div className="form_sum">Сума: {sum} грн</div>
                                <div className="form_delivSum">Доставка: {sum >= 500 ? "Безкоштовно" : delivPrice}</div>
                                <div className="form_delivSum">Усього: {sum + (sum >= 500 ? 0 : delivPrice)} грн</div>
                            </div>
                            <button type="submit" className="pay_sumButton">Замовити</button>
                        </div>
                    </form>
                </div>
            
            </div>
        )
    }

    else {
        return null
    }
    
}

export default FinalForm;
