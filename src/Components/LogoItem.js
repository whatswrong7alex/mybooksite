import './LogoItem.css'


const LogoItem = (props) => {
    const {title, description, logo} = props
    return (
        <div className="logoItem_wrapper">
            <img className="logoItem_img" src={logo}></img>
            <div className="logoItem_text">
                <div className="logoItem_title">{title}</div>
                <div className="logoItem_description">{description}</div>
            </div>
            
        </div>
    )
}

export default LogoItem;
