import './NewBookBlock.css'
import BookItem from './BookItem';
import uuid from 'react-uuid';

const NewBookBlock = (props) => {
    const {arrNew, addToCart} = props

   

    return (
        <div className="newblock_wrapper">
        <div className="newblock_container">
          <div className="newblock_text">
              <div className="newblock_title">Новинки</div>
              <div className="newblock_subtitle">Будь першим, хто прочитає!</div>
          </div>
          <div className="newblock_books">
            {arrNew.map(item => 
                <BookItem color={"lightRed"} id={uuid()}key={item.id} fakePrice={item.fakePrice} title={item.title} lang={item.lang} year={item.year} img={item.img} author={item.author} page={item.page} price={item.price} onPlus={(itemCart) => addToCart(itemCart)}></BookItem>    
            )}
          </div>
        </div>
      </div>
    )
}

export default NewBookBlock
