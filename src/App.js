import Header from './Components/Header.js'
import Cart from './Components/Cart.js'
import BookItem from './Components/BookItem.js'
import LogoBlock from './Components/LogoBlock.js'
import uuid from 'react-uuid';
import PurchasedWindow from './Components/PurchasedWindow.js'
import NewBookBlock from './Components/NewBookBlock.js'
import FinalForm from './Components/FinalForm.js'
import Footer from './Components/Footer.js'
import './App.css';
import {useState, useEffect} from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'
import img11 from './images/img11.jpg'
import img12 from './images/img12.jpg'
import img13 from './images/img13.jpg'
import img14 from './images/img14.jpg'
import img15 from './images/img15.jpg'
import img16 from './images/img16.jpg'
import img17 from './images/img17.jpg'
import img18 from './images/img18.jpg'


function App() {
  
  const [isActive, setIsActive] = useState(false)
  const[modalIsActive, setModalIsActive] = useState(false)  
  const[purchIsActive, setPurchIsActive] = useState(false)  
  const [cartItems, setCartItems] = useState([])
  const [sum, setSum] = useState()
  const [searchValue, setSearchValue] = useState('')
  const [searchFilter, setSearchFilter] = useState('title')


  const arrBooks = [
    {
      id: 1,
      title: "Місто",
      author: "Валер'ян Підмогильний",
      lang: "Українська",
      year: 2020,
      page: 320,
      price: 149,
      img: img1,
    },
    {
      id: 2,
      title: "Скарб",
      author: "Олекса Стороженко",
      lang: "Українська",
      year: 2022,
      page: 112,
      price: 65,
      img: img2,
    },
    {
      id: 3,
      title: "Пройдисвіти",
      author: "Сергій Ухачевський",
      lang: "Українська",
      year: 2021,
      page: 592,
      price: 249,
      img: img3,
    },
    {
      id: 4,
      title: "Пророчиця",
      author: "Андрій Кокотюха",
      lang: "Українська",
      year: 2020,
      page: 272,
      price: 199,
      img: img4,
    },
    {
      id: 5,
      title: "Цеглина",
      author: "Тарас Федюк",
      lang: "Українська",
      year: 2019,
      page: 528,
      price: 299,
      img: img5,
    },
    {
      id: 6,
      title: "Енеїда",
      author: "Іван Котляревський",
      lang: "Українська",
      year: 2022,
      page: 128,
      price: 507,
      img: img6,
    },
    {
      id: 7,
      title: "Ріка життя",
      author: "Ніна Фіалко",
      lang: "Українська",
      year: 2019,
      page: 344,
      price: 209,
      img: img7,
    },
    {
      id: 8,
      title: "Камінний хрест",
      author: "Василь Стефаник",
      lang: "Українська",
      year: 2020,
      page: 128,
      price: 99,
      img: img8,
    },
    {
      id: 9,
      title: "Чорна рада. Хроніка 1663 року",
      author: "Пантелеймон Куліш",
      lang: "Українська",
      year: 2020,
      page: 256,
      price: 129,
      img: img9,
    },
    {
      id: 10,
      title: "Аґент Лилик",
      author: "Юрій Винничук",
      lang: "Українська",
      year: 2021,
      page: 288,
      price: 145,
      img: img10,
    }
  ]


  const arrBestsellers = [
    {
      id: 15,
      title: "Артерія сонця",
      author: "Євгенія Юрченко",
      lang: "Українська",
      year: 2022,
      page: 144,
      price: 173,
      img: img15,
    },
    {
      id: 12,
      title: "Професія: душа для Еви",
      author: "Ірина Гузійчук",
      lang: "Українська",
      year: 2022,
      page: 164,
      fakePrice: 375,
      price: 315,
      img: img12,
    },
    {
      id: 13,
      title: "Хроніки незвіданих земель",
      author: "Світлана Тараторіна, Дарія Піскозуб, Наталія Довгопол, Ірина Грабовська, Наталія Матолінець",
      lang: "Українська",
      year: 2022,
      page: 368,
      price: 390,
      img: img13,
    },
    {
      id: 14,
      title: "Захар Беркут",
      author: "Іван Франко",
      lang: "Українська",
      year: 2022,
      page: 240,
      price: 430,
      img: img14,
    },
  ]

  const arrNew = [
    {
      id: 11,
      title: "Кобзар. Найповніша збірка. Унікальне, колекційне видання преміум-класу",
      author: "Тарас Шевченко",
      lang: "Українська",
      year: 2022,
      page: 576,
      price: 1500,
      img: img11,
    },
    {
      id: 16,
      title: "Мені байдуже, що люди скажуть. Сестри",
      author: "Тетяна Цой",
      lang: "Українська",
      year: 2021,
      page: 224,
      price: 251,
      img: img16,
    },
    {
      id: 17,
      title: "Я іду шукати",
      author: "Анастасія Нікуліна, Олег Бакулін",
      lang: "Українська",
      year: 2022,
      page: 448,
      price: 270,
      img: img17,
    },
    {
      id: 18,
      title: "Леся Українка. Вибрані твори",
      author: "Анастасія Нікуліна, Олег Бакулін",
      lang: "Українська",
      year: 2022,
      page: 424,
      price: 90,
      img: img18,
    },

  ]

  
  function addToCart(item) {
    setCartItems([...cartItems, item]);
  }

  function onRemoveItem(id) {
    setCartItems((prev) => prev.filter(item => item.id !== id));
  }

  function onOpenModal(price) {
    setModalIsActive(true)
    setIsActive(false)
    setSum(price)
  }

  function onChangeSearchInput(event) {
    setSearchValue(event.target.value)
  }

  function onClickFilterButton() {
    if(searchFilter === 'author')
      setSearchFilter('title')
    else
    setSearchFilter('author')
  }
  

  return (
    <div>
      <Cart onModal={onOpenModal} onRemove={onRemoveItem} active={isActive} setActive={setIsActive} setCartItems={setCartItems} cartItems={cartItems}></Cart>
      <div className="App">
        <Header cartItems={cartItems} onClickCart={() => setIsActive(true)}></Header>
        <LogoBlock></LogoBlock>
        <div className="app_booksBlock">
          <div className="app_titleBooks">Каталог</div>
          <div className="app_search">
            <input placeholder="Пошук" className="app_input" onChange={onChangeSearchInput} value={searchValue}></input>
            <div onClick={onClickFilterButton} className="app_button">{searchFilter == 'author' ? "Автор" : "Назва"}</div>
          </div>

          {searchFilter === 'title' ? 
            <div className="app_books">
              {arrBooks.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).length > 0 ?
                  arrBooks.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => 
                  <BookItem id={uuid()} key={obj.id} title={obj.title} author={obj.author} price={obj.price} lang={obj.lang} year={obj.year} page={obj.page} img={obj.img} onPlus={(itemCart) => addToCart(itemCart)}></BookItem>
              ) : <div className="app_nothing">Нічого не знайдено!</div>}
            </div>
            : 
            <div className="app_books">
              {arrBooks.filter(item => item.author.toLowerCase().includes(searchValue.toLowerCase())).length > 0 ?
                  arrBooks.filter(item => item.author.toLowerCase().includes(searchValue.toLowerCase())).map((obj) => 
                  <BookItem id={uuid()} key={obj.id} title={obj.title} author={obj.author} price={obj.price} lang={obj.lang} year={obj.year} page={obj.page} img={obj.img} onPlus={(itemCart) => addToCart(itemCart)}></BookItem>
              ) : <div className="app_nothing">Нічого не знайдено!</div>}
            </div>}
        </div>
        <NewBookBlock addToCart={addToCart} arrNew={arrNew}></NewBookBlock>
        
        <div className="app_tips">
          <div className="app_tipsText">Наші бестселери</div>
          <div className="app_tipsItems">
            {arrBestsellers.map(item => 
              <BookItem id={uuid()}key={item.id} fakePrice={item.fakePrice} title={item.title} lang={item.lang} year={item.year} img={item.img} author={item.author} page={item.page} price={item.price} onPlus={(itemCart) => addToCart(itemCart)}></BookItem>
            )}
          </div>
        </div>
        <FinalForm setPurchIsActive={setPurchIsActive} setCartItems={setCartItems} active={modalIsActive} setActive={setModalIsActive} sum={sum}></FinalForm>
        <PurchasedWindow active={purchIsActive} setActive={setPurchIsActive}></PurchasedWindow>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
