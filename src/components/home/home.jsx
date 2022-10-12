import logo from '../../images/logo.svg';
import './home.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
          href="http://google.com"
        >
          Satisfactory Architect (built in react v18.2)
        </a>
      </header>
    </div>
  );
}

export default Home;
