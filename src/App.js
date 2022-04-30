
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './common/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
       <Header/>
       <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
    </div>
  );
}

export default App;
