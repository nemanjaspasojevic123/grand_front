import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Emisije } from './components/emisije/Emisije';
import { Grandoskop } from './components/grandoskop/Grandoskop';
import { Horoskop } from './components/horoskop/Horoskop';
import { NikadNijeKasno } from './components/nikad-nije-kasno/NikadNijeKasno';
import { PrakticnaZena } from './components/prakticna-zena/PrakticnaZena';
import { ProgramskaSema } from './components/programska-sema/ProgramskaSema';
import { Recepti } from './components/recepti/Recepti';
import { Showbiz } from './components/showbiz/Showbiz';
import { ZvezdeGranda } from './components/zvezde-granda/ZvezdeGranda';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Showbiz} exact path="/showbiz"></Route>
          <Route component={ZvezdeGranda} exact path="/zvezde-granda"></Route>
          <Route component={NikadNijeKasno} exact path="/nikad-nije-kasno"></Route>
          <Route component={PrakticnaZena} exact path="/prakticna-zena"></Route>
          <Route component={Grandoskop} exact path="/grandoskop"></Route>
          <Route component={Horoskop} exact path="/horoskop"></Route>
          <Route component={Recepti} exact path="/recepti"></Route>
          <Route component={Emisije} exact path="/emisije"></Route>
          <Route component={ProgramskaSema} exact path="/programska-sema"></Route>
          <Redirect from="/" to="showbiz" />  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
