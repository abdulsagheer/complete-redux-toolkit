import CocktailList from "../components/CocktailList";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <h2>Cocktail Shop</h2>
      {/* Search Component */}
      <Search />
      {/* Cocktail Component */}
      <CocktailList />
    </div>
  );
};

export default Home;
