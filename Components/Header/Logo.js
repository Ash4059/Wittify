import icon from '../../Static/Images/logo-icon.jpg';
import Style from '../../Style/header.module.css';

export const Logo = () => {
    return (
        <div className={Style.logoContainer + ' dF cP'} >
            <img src={icon} alt='logo-icon' className={Style.logoIcon} />
            <h2 style = {{ margin : 10 }} >Wittify</h2>
        </ div>
    );
}