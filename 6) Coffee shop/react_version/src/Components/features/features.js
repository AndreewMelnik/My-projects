import "./features.css";
import coffeeShop from "../../img/png/coffeeshop.png";
import beans from "../../img/png/beans.png";
import cups from "../../img/png/cups.png";
import coffeeMachine from "../../img/png/coffeemachine.png";


const Features = () => {
    return(

<div class="coffee__wrap">
        <div class="coffee__text">
            <h1 class="coffee__subtitle subtitle">Your Personalized Coffee
            </h1>
            <h2 class="coffee__title title">COFFEE BUILD YOUR BASE
            </h2>
        </div>
        <div class="coffee__cards">
            <div class="coffee__card">
              <div class="coffee__card-pic">
                <img src={coffeeShop} alt="coffeeshop" class="coffeeshop"/>
              </div>
              <h3 class="coffee__card-title">
                Origin
              </h3>
              <p class="coffee__card-desc">
                Arabica coffee beans, robusta quality meets international standards.
              </p>
          </div>
          <div class="coffee__card">
              <div class="coffee__card-pic">
                <img src={beans} alt="beans" class="beans"/>
              </div>
              <h3 class="coffee__card-title">
                Quality
              </h3>
              <p class="coffee__card-desc">
                Each coffee bean is a highly concentrated process of coffee artisans.
              </p>
          </div>
          <div class="coffee__card">
              <div class="coffee__card-pic">
                <img src={cups} alt="cups" class="cups"/>
              </div>
              <h3 class="coffee__card-title">
                Flavour
              </h3>
              <p class="coffee__card-desc">
                70% of the coffee cup flavour comes from the origin and quality of the coffee.
              </p>
          </div>
          <div class="coffee__card">
              <div class="coffee__card-pic">
                <img src={coffeeMachine} alt="coffeemachine" class="coffeemachine"/>
              </div>
              <h3 class="coffee__card-title">
                Preparation
              </h3>
              <p class="coffee__card-desc">
              The coffee beans are molted through a thorough and accurate roasting process.
              </p>
          </div>
           
        </div>
      </div>
      )
    }

    
export default Features;