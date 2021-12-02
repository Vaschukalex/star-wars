
import './App.css';
import Header from './containers/Header/Header';
import CharacterList from './containers/CharactersList/CharacterList';
import CharacterDetails from './containers/CharacterDetails/CharacterDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './sass/background_anim.sass';
import Page404 from './Pages/Page404/Page404';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Favorites from './Pages/Favorites/Favorites';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/characters/list/:pageNumber" element={<CharacterList />} />
          <Route path="/characters/:characterId" element={<CharacterDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
