import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealsItem from '../Meals/MealsItem/MealsItem'
const DUMMY_MEALS=[
    {
        id:'m1',
        name:"sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
    {
        id:'m2',
        name:"roshan",
        description:"Finest fish and veggies",
        price:22.99
    },
    {
        id:'m3',
        name:"sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
    {
        id:'m4',
        name:"sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
]
const AvailableMeals=(props)=>{
        const mealsList=DUMMY_MEALS.map(meal=><MealsItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}/>)
        return<section className={classes.meals}>
            <Card>
            <ul>{mealsList}
            </ul>
            </Card>
            

        </section>
}
export default AvailableMeals;