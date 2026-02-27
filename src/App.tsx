import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./app/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
