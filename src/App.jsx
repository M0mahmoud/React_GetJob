import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default App;
