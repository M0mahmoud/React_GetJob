import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Outlet />
      </main>
    </>
  );
}

export default App;
