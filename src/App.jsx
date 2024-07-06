import "./App.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";

function App() {

  return (
    <>
      <p className="text-2xl">Hello Dev Eklavya</p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
