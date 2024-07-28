import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import ScoreProvider from "./contexts/ScoreProvider";

function App() {
  return (
    <>
      <ScoreProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </ScoreProvider>
    </>  
  );
}

export default App;


