import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './css/style.css';
import { Horoskop } from './components/horoskop/Horoskop';
import { NikadNijeKasno } from './components/nikad-nije-kasno/NikadNijeKasno';
import { PrakticnaZena } from './components/prakticna-zena/PrakticnaZena';
import { Recepti } from './components/recepti/Recepti';
import { Showbizz } from './components/showbizz/Showbizz';
import { ZvezdeGranda } from './components/zvezde-granda/ZvezdeGranda';
import { Grandoskop } from './components/horoskop/Grandoskop';
import { Emisije } from './components/grand/Emisije';
import { ProgramskaSema } from './components/grand/ProgramskaSema';
import { NewsTest } from './components/news-test-page/NewsTest';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Showbizz} exact path="/showbizz"></Route>
          <Route component={ZvezdeGranda} exact path="/zvezde-granda"></Route>
          <Route component={NikadNijeKasno} exact path="/nikad-nije-kasno"></Route>
          <Route component={PrakticnaZena} exact path="/prakticna-zena"></Route>
          <Route component={Grandoskop} exact path="/grandoskop"></Route>
          <Route component={Horoskop} exact path="/horoskop"></Route>
          <Route component={Recepti} exact path="/recepti"></Route>
          <Route component={Emisije} exact path="/emisije"></Route> 
          <Route component={ProgramskaSema} exact path="/programska-sema"></Route>
          <Route component={NewsTest} exact path="/NewsTest"></Route>
          <Redirect from="/" to="showbizz" />  
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
