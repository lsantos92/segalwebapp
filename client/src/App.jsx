import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Pages
import HomeGRC from './pages/Grc'
import Links from './pages/Links'
import FileBrowser from './pages/FileBrowser'
import Holdings from './pages/Holdings'
import Welcome from './pages/Welcome'
import RinexSearch from './pages/RinexSearch';

// Components
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import MaybeShowNavBar from './components/MaybeShowNavBar'
import NotFound from './components/404'

function App() {

  return (
    <>
      <BrowserRouter>
        <MaybeShowNavBar>
          <NavigationBar />
        </MaybeShowNavBar>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/grc" element={<HomeGRC />} />
          {/* Archive Acess */}
          <Route path="/filebrowser" element={<FileBrowser />} />
          <Route path="/rinex" element={<RinexSearch />} />
          {/*Station List */}
          {/*Stream List */}
          <Route path="/holdings" element={<Holdings />} />
          {/* teste data */}
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </>
  );
}

export default App;