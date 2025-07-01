import { Outlet } from 'react-router-dom';
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import Footer from './footer';
import Header from './header';

const App = () => (
  <div>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </div>
);

export default App;
