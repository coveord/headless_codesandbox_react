import React, { useEffect } from "react";
import SearchPage from "./Components/SearchPage";
import Hero from "./Components/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import { initializeHeadlessEngine } from "./common/Engine";
import { SearchEngine } from "@coveo/headless";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

const Home = () => {
  const [engine, setEngine] = React.useState<SearchEngine | null>(null);

  useEffect(() => {
    initializeHeadlessEngine().then((engine) => {
      setEngine(engine);
    });
  }, []);

  if (engine) {
    return (
      <div className="App">
        <Hero welcome="Welcome to Your Coveo React.js Search Page" />
        {engine && <SearchPage engine={engine} />}
      </div>
    );
  } else {
    return <div>Waiting for engine</div>;
  }
};
