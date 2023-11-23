import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLatter,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <NewsLatter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// [{}] for making route.
