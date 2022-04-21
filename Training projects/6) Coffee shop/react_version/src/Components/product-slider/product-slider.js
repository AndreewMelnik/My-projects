import "./product-slider.css";

import morning from "../../img/svg/morning";
import origin from "../../img/svg/origin";
import everyday from "../../img/svg/everyday";
import rich from "../../img/svg/rich";
import honey from "../../img/png/honey";
import natural from "../../img/png/natural";


const ProductSlider = () => {

    return (
        <div className="product">
            <ProductText/>
            <HeaderMenu/>
        </div>
    )
}

const HeaderWrapper = () => {
    return(
            <div className="header__logo">
                <a href="!#" className="header__logo-link">
                    <img src={revoLogo}  alt="Your Personalized Coffee" className="header__logo-pic"/>
                </a>
            </div>
    )
}

const HeaderMenu = () => {
    return(
        <nav className="header__menu">
        <ul className="header__list">
            <HeaderItem name="COFFEE" />
            <HeaderItem name="GIFTSETS" />
            <HeaderItem name="HOUSE BLENDS" />
            <HeaderItem name="COMBO SETS" />
            <HeaderItem name="CONTACT US" />
        </ul>
    </nav>
    )
}

const HeaderItem = (props) => {
    return(
          <div className="header__item">
              <a href="#!" className="header__link">{props.name}</a>
          </div> 
 )
}
const ProductText = (props) => {
    return(
        <div class="product__text">
        <h2 class="product__subtitle subtitle">Choose Your Favorite</h2>
        <h1 class="product__title title">COFFEE BLENDS</h1>
     </div>
 )
}

const ProductImg = (props) => {
    return(
        <div class="product__img">
          <img src="./img/svg/morning.svg" alt="morning" class="product__image">
        </div>
 )
}





<div class="slider__item">
       <div class="product__img">
          <img src="./img/svg/morning.svg" alt="morning" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price price product__price">$ 19.00</div>
          <h1 class="product__name product__name">REVO Morning</h1>
          <h2 class="product__description product__description">Bitter, sweet aftertaste, floral aroma</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div>






export default ProductSlider;

<section class="product">

<div class="slider">
  <div class="product__slider__top">
    <div class="slider__item">
       <div class="product__img">
          <img src="./img/svg/morning.svg" alt="morning" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price price product__price">$ 19.00</div>
          <h1 class="product__name product__name">REVO Morning</h1>
          <h2 class="product__description product__description">Bitter, sweet aftertaste, floral aroma</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div>
    <div class="slider__item">
       <div class="product__img">
          <img src="./img/svg/origin.svg" alt="origin" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price product__price">$ 22.00</div>
            <h1 class="product__name product__name">REVO Origin</h1>
            <h2 class="product__description product__description">Sweet, less bitter, sour strawberry flavour</h2>
             <div class="product__btn">
               <button class="product____btn buy">BUY NOW</button>
               <button class="product____btn desc">MORE</button>
             </div>
          </div>
       </div>
    <div class="slider__item">
       <div class="product__img">
          <img src="./img/svg/everyday.svg" alt="everyday" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price product__price">$ 17.00</div>
          <h1 class="product__name product__name">REVO Everyday</h1>
          <h2 class="product__description product__description">Balanced, bitter taste of chocolate</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div>
 </div>

    <div class="product__slider_btm">
     <div class="slider__item">
       <div class="product__img">
          <img src="./img/svg/rich.svg" alt="" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price product__price">$ 16.00</div>
          <h1 class="product__name product__name">REVO Rich</h1>
          <h2 class="product__description product__description">Rich, bitter, traditional flavour</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div>
     <div class="slider__item">
       <div class="product__img">
          <img src="./img/png/honey.png" alt="honey" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price product__price">$ 19.00</div>
          <h1 class="product__name product__name">REVO Honey</h1>
          <h2 class="product__description product__description">Sweet , with a slight apple sourness</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div>
    <div class="slider__item">
       <div class="product__img">
          <img src="./img/png/natural.png" alt="natural" class="product__image">
       </div>
       <div class="product__content">
          <div class="product__price product__price">$ 19.00</div>
          <h1 class="prouct__name product__name">REVO Natural</h1>
          <h2 class="product__description product__description">Sweet aftertaste, floral scent, strawberry sour taste</h2>
          <div class="product__btn">
            <button class="product____btn buy">BUY NOW</button>
            <button class="product____btn desc">MORE</button>
          </div>
       </div>
    </div> 
 </div>
</section>