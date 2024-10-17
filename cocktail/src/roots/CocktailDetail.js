import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CocktailDetail() {
    const [id] = useParams();
    const [cocktail, setCocktail] = useState;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => response.json())
    .then(data => {
        setCocktail(data.drinks[0]);
      console.log(data);
    })
    .catch(error => console.log(error));

    return (
        <div>
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
            <p>ingredients :</p>
            <ul>
                {Object.keys(cocktail).map(key =>
                    <li key={key}>
                        {cocktail[key]}
                        <img src={`https://www.thecocktaildb.com/images/ingredients/${cocktail[key]}-Small.png`} alt={cocktail[key]}></img>
                    </li>
                )};
            </ul>
        </div>
    );
}