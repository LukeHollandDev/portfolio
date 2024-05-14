import "./App.css";
import Banner from "./components/Banner/Banner";
import Introduction from "./components/Introduction/Introduction";
import { Projects } from "./components/Projects/Projects";
import { Technology } from "./components/Technology/Technology";
import socialData from "./data/Social.json";
import technologyData from "./data/Technology.json";
import projectsData from "./data/Projects.json";

function App() {
  return (
    <>
      <Banner socialData={socialData} />
      <main className="max-w-screen-lg m-auto p-4 *:mb-8">
        <Introduction />
        <Technology technologies={technologyData} />
        <Projects projects={projectsData} />
      </main>
    </>
  );
}

export default App;
