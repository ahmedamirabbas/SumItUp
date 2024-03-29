import Hero from "./components/Hero";
import Demo from "./components/Demo";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
      </div>
    </main>
  );
};

export default App;