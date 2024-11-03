import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CocktailList, SearchForm } from "../components";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

// useQuery with parameter returner.
const searchCocktailsquery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      console.log(response);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailsquery(searchTerm));
    return { searchTerm };
  };

// drinks: response.data.drinks,
const Loading = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsquery(searchTerm));
  // drinks,
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Loading;
