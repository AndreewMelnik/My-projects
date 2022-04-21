import "./header.css";
import revoLogo from "../../img/svg/revo_logo.svg";


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
          <div className="header__item">
              <a href="#!" className="header__link">{props.name}</a>
          </div> 
 )
}


export default Header;