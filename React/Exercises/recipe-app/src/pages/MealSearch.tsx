
import { response } from "express";
import { useState } from "react";

const MealSearch = () => {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState<any[]>([]);

    const searchMeals = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(response => response.json())
        .then(data => setMeals(data.meals))
    }
}







