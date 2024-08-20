import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import BackgroundWrapper from "./components/BackgroundWrapper";

function App() {
  return (
    <>
      <BackgroundWrapper>
        <Header />
      </BackgroundWrapper>
    </>
  );
}

export default App;
