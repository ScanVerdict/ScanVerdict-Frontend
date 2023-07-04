import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AnalysePage from "./pages/AnalysisPage.tsx";
import Root from "./root.tsx";
import Home from "./pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404</div>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <div>404</div>,
      },
      {
        path: "analysepage/:placeId",
        element: <AnalysePage />,
        errorElement: <div>404</div>,
        loader: async ({ params }) => {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ place_id: params.placeId }),
          };

          const response = await fetch("/get_place_details", options);

          const responseJson = await JSON.parse(await response.text());
          console.log(responseJson);

          // for loop on this :
          // if the plot is a pie, parse it else return it
          const plots = responseJson.map((plot: any) => {
            return JSON.parse(plot);
          });
          console.log(plots);

          return plots;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
