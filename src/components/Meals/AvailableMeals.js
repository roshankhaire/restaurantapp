import classes from './AvailableMeals.module.css';
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
        id:'m1',
        name:"sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
    {
        id:'m1',
        name:"sushi",
        description:"Finest fish and veggies",
        price:22.99
    },
]
const AvailableMeals=()=>{
        const mealsList=DUMMY_MEALS.map(meal=><li>{meal.name}</li>)
        return<section className={classes.meals}>
            <ul>{mealsList}</ul>

        </section>
}
export default AvailableMeals;