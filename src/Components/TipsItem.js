import './TipsItem.css'

const TipsItem = (props) => {
    const {id, text, img} = props

    return (
        <div className="tip_container">
            <img className="tip_img" src={img} alt="tip"></img>
            <div className="tip_text">{id}. {text}</div>
        </div>
    )
}

export default TipsItem
