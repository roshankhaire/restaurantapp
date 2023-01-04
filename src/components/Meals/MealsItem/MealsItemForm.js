import React ,{useContext}from "react";
import classes from "./MealsItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/CartContext";
const MealsItemForm=(props)=>{
  const cartCtxt=useContext(CartContext)
  const addItemToCart=(event)=>{
    event.preventDefault();
    cartCtxt.items.push(props.item)
   

  }
    return<form className={classes.form}>
      
          <Input label="Amount" 
          input={{
            id: 'amount_' + props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
          }}/>
          <button onClick={addItemToCart}>+Add</button>
    </form>
}
export default MealsItemForm;