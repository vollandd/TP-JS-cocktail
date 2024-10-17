import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CocktailList from "./roots/CocktailList";
import CocktailDetail from "./roots/CocktailDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CocktailList />}/>
        <Route path="/CocktailDetail/:id" element={<CocktailDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
