import "./App.css";
import Banner from "./components/Banner/Banner";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <>
      <Banner />
      <main className="max-w-screen-lg m-auto p-4">
        <Introduction />
      </main>
    </>
  );
}

export default App;
