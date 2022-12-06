import './Footer.css'
import send from '../images/send.png'
import {useRef} from 'react'

const Footer = () => {
    const inptRef = useRef()

    function onClickButton(e) {
        inptRef.current.value = ''
        e.preventDefault();
    }
    
    return (
        <div className="footer_container">
            
            <div className="footer_block">
                <div className="footer_title">Books.</div>
                <div className="footer_subtitle">Найбільший магазин книжок у Києві!</div>
                <div className="footer_subtitle">+380123456789</div>
                <div className="footer_subtitle">www.books.com.ua</div>
            </div>
            <div className="footer_block">
                <div className="footer_title">Наші контакти</div>
                <div className="footer_subtitle">Instagram</div>
                <div className="footer_subtitle">Facebook</div>
                <div className="footer_subtitle">Twitter</div>
            </div>
            <div className="footer_block">
                <div className="footer_title">Пишіть нам</div>
                    <div>
                        <form onSubmit={onClickButton} className="footer_email">
                            <input className="footer_input" ref={inptRef} placeholder='Відгук'></input>
                            <button type="submit" className="footer_button">
                                <img src={send} alt="send"></img>
                            </button>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Footer;

