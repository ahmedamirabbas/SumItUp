import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./App.css";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />

        <SpeedInsights/>
      </div>
    </main>
  );
};

export default App;