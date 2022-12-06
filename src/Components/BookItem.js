import './BookItem.css'
import {useState} from 'react'

const BookItem = (props) => {
    const {id, title, author, fakePrice, price, color, img, lang, page, year, onPlus} = props
    const [isShow, setIsShow] = useState(false)

    function onClickPlus() {
        onPlus({id, title, price, lang, author, year, img})
    }
   
    return (
        <div onMouseEnter={() => setIsShow(true)}  onMouseLeave={() => setIsShow(false)} className="bookItem_container">
            <img className="bookItem_img" src={img} alt="картинка"></img> 
                <div className={`bookItem_info + ${color}`}>  
                    <div className="bookItem_funcBlock">
                        <div className="bookItem_textBlock">
                            <div className="bookItem_title">{title}</div>
                            <div className="bookItem_author">{author}</div>
                            {fakePrice && <div className="bookItem_fakePrice">{fakePrice} грн</div>}
                            <div className={`bookItem_price + ${fakePrice ? "newPrice" : ""}`}>{price} грн</div>
                        </div>
                        <div onClick={onClickPlus} className="bookItem_button">+</div>
                    </div>
                    <div className="bookItem_addInfo">
                        {isShow && (
                            <div>
                                <div className="bookItem_smallInfo">
                                    <div>Мова:</div>
                                    <div>{lang}</div>
                                </div>
                                <div className="bookItem_smallInfo">
                                    <div>Рік видання:</div>
                                    <div>{year}</div>
                                </div>
                                <div className="bookItem_smallInfo">
                                    <div>Кількість сторінок:</div>
                                    <div>{page}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    
                </div> 
        </div>
    )
}

export default BookItem;