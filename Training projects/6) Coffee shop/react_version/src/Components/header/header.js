import "./header";


const Header = () => {

    return (
        <div className="header">
            <HeaderWrapper/>
            <HeaderMenu/>
        </div>
    )
}

const HeaderWrapper = () => {
    return(
            <div class="header_logo">
                <a href="!#" class="header_logo-link">
                    <img src="./img/svg/revo_logo.svg" alt="Your Personalized Coffee" class="header__logo-pic"/>
                </a>
            </div>
    )
}

const HeaderMenu = () => {
    return(
        <nav class="header__menu">
        <ul class="header__list">
            <HeaderItem name="Coffee" />
            <HeaderItem name="Giftsets" />
            <HeaderItem name="House Blends" />
            <HeaderItem name="Combo Sets" />
            <HeaderItem name="Contact us" />
        </ul>
    </nav>
    )
}

const HeaderItem = (props) => {
    return(
          <li class="header__item">
              <a href="#!" class="header__link">{props.name}</a>
          </li> 
 )
}


export default Header;