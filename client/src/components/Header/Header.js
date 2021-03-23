import style from './Header.module.css';
import NavigationItem from './NavigationItem';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={style.navigation}>
      <ul>
        <NavigationItem><img src="/white-origami-bird.png" width="50px"alt="white origami" /></NavigationItem>
        <Link to="/"><NavigationItem>Home</NavigationItem></Link>
        <Link to="/about"><NavigationItem>About</NavigationItem></Link>
        <Link to="/contacts"><NavigationItem>Contact Us</NavigationItem></Link>
        <Link to="/about/pesho1"><NavigationItem>Pesho 1</NavigationItem></Link>
        <Link to="/about/pesho2"><NavigationItem>Pesho 2</NavigationItem></Link>
        <Link to="/about/pesho3"><NavigationItem>Pesho 3</NavigationItem></Link>
        <NavLink activeStyle={{backgroundColor: 'greenyellow'}} exact={true} to="/about/pesho4"><NavigationItem>Pesho 4</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'greenyellow'}} exact={true} to="/about/pesho5"><NavigationItem>Pesho 5</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'greenyellow'}} exact={true} to="/about/pesho6"><NavigationItem>Pesho 6</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'greenyellow'}} exact={true} to="/about/pesho7"><NavigationItem>Pesho 7</NavigationItem></NavLink>
        <NavLink activeStyle={{backgroundColor: 'greenyellow'}} exact={true} to="/about/pesho8"><NavigationItem>Pesho 8</NavigationItem></NavLink>
      </ul>

    
    </nav>
  )
};

export default Header;
