import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CocktailList() {
    const [cocktailAlc, setCocktailAlc] = useState([]);
    const [cocktailNoAlc, setCocktailNoAlc] = useState([]);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
    .then(response => response.json())
    .then(data => {
    setCocktailAlc(data.drinks);
      console.log(data);
    })
    .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
    .then(response => response.json())
    .then(data => {
    setCocktailNoAlc(data.drinks);
      console.log(data);
    })
    .catch(error => console.log(error));
    }, []);
    
    return (
        <div>
            <p>Cocktail Avec Alcool</p>
            {cocktailAlc.map(item => (
                <ul>
                    <li key={item.idDrink}>
                        <p>{item.strDrink}</p>
                        <img src={item.strDrinkThumb} alt={item.strDrink} ></img>
                        <Link to={`/CocktailDetail/${item.idDrink}`} >voir la recette</Link>
                    </li>
                </ul>
            ))}
            <p>Cocktail Sans Alcool</p>
                {cocktailNoAlc.map(item => (
                    <ul>
                        <li key={item.idDrink}>
                            <p>{item.strDrink}</p>
                            <img src={item.strDrinkThumb} alt={item.strDrink} ></img>
                            <Link to={`/CocktailDetail/:${item.idDrink}`} >voir la recette</Link>
                        </li>
                    </ul>
                ))}
        </div>
    );
}