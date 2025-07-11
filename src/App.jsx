import { useEffect, useState } from "react";
import "./style.css";
import SearchResult from "./components/SearchResult";

function App() {

    const [searchTerm, setSearchTerm] = useState("");
    const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      if (searchTerm.trim() === "") {
        setMeals([]);
        return;
      }
      try {
        // try()catch()
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
        // this happens because the json has a key of meals in the json return , if theres no response i return an empty array that what the || are for
      } catch (error) {
        console.log(err), setMeals([]);
      }
    };

    if (searchTerm.length === 0) {
      setMeals([]);
    }
    fetchMeals();
  }, [searchTerm]);

  return (
     <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-6">
        Food searcher by ingredients 🍔🍰🍜{" "}
      </h1>
      <h3 className="mb-4  text-center">
        In the input write in english, for example: cake, soup, meat
      </h3>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-400 rounded-md"
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     handleSearch();
          //   }
          // }}
        />
        {/* 
        <button
          onClick={(handleSearch = true)}
          className="bg-green-600 text-white px-4 rounded-r-md hover:bg-green-700"
        >
          Search
        </button> */}
      </div>

      <SearchResult meals={meals} />
    </div>
  );
}


export default App
