
import { response } from "express";
import { useState, useEffect } from "react";


const RandomMeal = () => {
    const [meal, setMeal] = useState<any>(null);

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => setMeal(data.meals[0]))
    }, []);

    return meal ? (
        <div>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p>
        </div>
    ) : (
        <p>Loading...</p>
    )
}








