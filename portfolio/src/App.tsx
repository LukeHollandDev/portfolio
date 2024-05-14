import "./App.css";
import Banner from "./components/Banner/Banner";
import Introduction from "./components/Introduction/Introduction";
import { Projects } from "./components/Projects/Projects";
import { Technology } from "./components/Technology/Technology";
import TechnologyData from "./data/Technology.json";

function App() {
  return (
    <>
      <Banner />
      <main className="max-w-screen-lg m-auto p-4 *:mb-8">
        <Introduction />
        <Technology technologies={TechnologyData} />
        <Projects />
      </main>
    </>
  );
}

export default App;
