export default function SearchResult({ meals }) {
  if (meals.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-center">
        <h1 className="text-lg text-gray-600">
          No meals found, please try typing ingredients in English.
        </h1>
      </div>
    );
  }


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        {/* <h1 className="text-center" >
          {meals.length == 0 &&
            "No meals found, please try type ingredients in english"}
        </h1> */}
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{meal.strMeal}</h2>
            <p className="text-sm mb-1">
              <strong>Categoría:</strong> {meal.strCategory}
            </p>
            <p className="text-sm mb-1">
              <strong>Área:</strong> {meal.strArea}
            </p>
            <p className="text-sm">
              <strong>Tags:</strong>{" "}
              {meal.strTags ? meal.strTags : "No tags found"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
