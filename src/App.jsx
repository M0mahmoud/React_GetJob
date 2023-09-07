import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
