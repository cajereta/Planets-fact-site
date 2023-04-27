import Body from './components/Body';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlanetsData from '../db/planets-array';

import "./App.css";

function App() {

  return (
    <Router basename="/Planets-fact-site/">
      <div className="App">
        <div id="stars"></div>
        <div id="stars2"></div>
        <Header />
        <Routes >
          {PlanetsData.map(planet => {
            return (

              <Route key={planet.id} path={`/${planet.id}`} element={<Body data={planet} />} />

            );
          })}

        </Routes>
        {/* <Header setPlanet={setPlanet} planet={planet()} />



      <Body plan={planet()} />

      {planet()}
      <Cards /> */}
      </div>
    </Router>
  );
}

export default App;
