import uuid from 'react-uuid'
import './LogoBlock.css'
import LogoItem from './LogoItem.js'
import logo1 from '../images/logo1.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'

const LogoBlock = () => {
    const arrLogos = [
        {
            id: uuid(),
            title: "Висока якість",
            description: "зроблено з найкращих матеріалів",
            logo: logo1,
        },
        {
            id: uuid(),
            title: "Безкоштовна доставка",
            description: "замовлення від 500 гривень",
            logo: logo3,
        },
        {
            id: uuid(),
            title: "24 / 7 підтримка",
            description: "завжди на зв'язку",
            logo: logo4,
        },
    ]
    return (
        <div className="logoBlock_wrapper">
            {arrLogos.map(item => 
                <LogoItem key={item.id} title={item.title} description={item.description} logo={item.logo}></LogoItem>
            )}
        </div>
    )
}

export default LogoBlock;
