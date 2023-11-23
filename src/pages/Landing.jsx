import { useLoaderData } from "react-router-dom";
import axios from "axios";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  // const searchTerm = "margarita";
  const searchTerm = "";
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  return { drinks: response.data.drinks, searchTerm };
};

const Loading = () => {
  const { drinks, searchTerm } = useLoaderData();
  console.log(drinks);

  return <div>Landing Page</div>;
};
export default Loading;
