
import { Switch } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import CoinPage from './pages/coin-page';
import HomePage from './pages/home-page';
import { BrowserRouter as Router } from 'react-router-dom';
import Alert from './components/alert';
import PortfolioPage from './pages/portfolio-page';


function App() {

  const classes = {
    App: {
      backgroundColor: '#14161a',
      color: "white",
      minHeight: "100vh"
    }
  }
    

  return (
    <Router>
      <div style={classes.App}>
        <Header />
        <Route path="/" component={HomePage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/portfolio" component={PortfolioPage} exact />
      </div>
      <Alert />
    </Router>
  );
}

export default App;