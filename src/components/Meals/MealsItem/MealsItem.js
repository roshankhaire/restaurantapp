import React from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
const MealsItem=(props)=>{
    return<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
        <div>
            {console.log(props)}
            <MealsItemForm id={props.id} item={props}/>
        </div>

    </li>
}
export default MealsItem;