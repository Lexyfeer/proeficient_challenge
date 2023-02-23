import logo from './assets/logo.svg';
import twitterIcon from './assets/twitterIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import whatsIcon from './assets/whatsIcon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-evenly items-center py-2">
        <img src={logo} className="App-logo h-12 md:h8" alt="logo" />
        <ul className="App-menu flex flex-col min-w-9/12 justify-evenly md:flex-row md:w-6/12 md:justify-between">
          <a href="#">
            <li>How We Work</li>
          </a>
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Free Quote</li>
          </a>
          <a href="#">
            <li>Contact</li>
          </a>
        </ul>
      </header>
      <h1>Hola Mundo Challenge</h1>
      <footer className="App-footer flex flex-col px-8 justify-evenly items-center py-10 md:flex-row md:items-stretch">
        <div className="flex flex-col items-start justify-between w-9/12 md:w-1/6 mb-3 md:mb-0">
          <img src={logo} className="Footer-logo h-12 md:h8" alt="logo" />
          <p className="text-left mt-3 mb-5">It is a long established fact that a reader will be distracted by the readable content of a page whenters.</p>
          <div className="flex">
            <img src={twitterIcon} className="Footer-icon inline-flex mr-2" alt="logo" />
            <img src={facebookIcon} className="Footer-icon inline-flex mr-2" alt="logo" />
            <img src={instagramIcon} className="Footer-icon inline-flex mr-2" alt="logo" />
          </div>
        </div>

        <div className="flex flex-col w-9/12 text-left mb-3 md:w-1/6 md:mb-0">
          <h2 className="mb-3">About Us</h2>
          <div className="flex flex-col h-4/6 justify-evenly">
            <p>About</p>
            <p>Privacy & Policy</p>
            <p>Terms & Conditions</p>
            <p>Fac</p>
          </div>
        </div>

        <div className="flex flex-col w-9/12 text-left mb-3 md:w-1/6 md:mb-0">
          <h2 className="mb-3">Navigate</h2>
          <div className="flex flex-col h-4/6 justify-evenly">
            <p>How We Work</p>
            <p>Services</p>
            <p>Fac</p>
            <p>Contact</p>
            <p>Free Quote</p>
          </div>
        </div>

        <div className="flex flex-col w-9/12 text-left mb-3 md:w-1/6 md:mb-0">
          <h2 className="mb-3">Contact Us</h2>
          <div className="flex flex-col h-4/6 justify-evenly">
            <p>Ricardo Margain 444</p>
            <p>Call: +52 81 1234 5678</p>
            <p>Email: info@challenge.com</p>
            <div className="mt-5">
              <img src={whatsIcon} className="Footer-icon inline-flex mr-2" alt="logo" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
