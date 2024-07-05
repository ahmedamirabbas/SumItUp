import Hero from "./components/Hero";
import Demo from "./components/Demo";

import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from '@vercel/analytics/react';

import "./App.css";

const App = () => {
  return (
    <main>
      <Analytics />
      <SpeedInsights/>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />

      </div>
    </main>
  );
};

export default App;