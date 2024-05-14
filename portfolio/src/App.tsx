import "./App.css";
import Banner from "./components/Banner/Banner";
import Introduction from "./components/Introduction/Introduction";
import { Technology } from "./components/Technology/Technoloy";
import TechnologyData from "./data/Technology.json";

function App() {
  return (
    <>
      <Banner />
      <main className="max-w-screen-lg m-auto p-4 *:mb-8">
        <Introduction />
        <Technology technologies={TechnologyData} />
      </main>
    </>
  );
}

export default App;
