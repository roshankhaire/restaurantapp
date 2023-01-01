import React,{Fragment} from 'react';
import classes from './Header.module.css';
import meals from '../../assets/meals.jpeg'
import HeaderCartButton from './HeaderCartButton';
const Header=props=>{
    return<Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
        <div className={classes['main-image']}>
            <img src={meals} alt="the image of delicious food"/>
        </div>
      
    </Fragment>

}
export default Header;