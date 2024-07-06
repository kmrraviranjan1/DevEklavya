import "./App.css";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";

function App() {

  return (
    <>
      <p className="text-4xl text-center uppercase">Dev Eklavya</p>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
