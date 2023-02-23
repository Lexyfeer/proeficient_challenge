import logo from './assets/logo.svg';
import twitterIcon from './assets/twitterIcon.svg';
import facebookIcon from './assets/facebookIcon.svg';
import instagramIcon from './assets/instagramIcon.svg';
import whatsIcon from './assets/whatsIcon.svg';
import bedsIcon from './assets/bedsIcon.svg';
import refIcon from './assets/refIcon.svg';
import furnitureIcon from './assets/furnitureIcon.svg';
import ovenIcon from './assets/ovenIcon.svg';
import sofaIcon from './assets/sofaIcon.svg';
import tvIcon from './assets/tvIcon.svg';
import washerIcon from './assets/washerIcon.svg';
import diningIcon from './assets/diningIcon.svg';
import deskIcon from './assets/deskIcon.svg';
import wardrobeIcon from './assets/wardrobeIcon.svg';
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
      <div className='flex flex-col pt-16 md:pt-32 md:items-center border-4'>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">What items to store?</h1>
          <p className="md:w-96">Select which items you wish to store before moving to your new home. We'll keep 'em safe!</p>
        </div>
        <div className='flex flex-col pt-9 md:w-9/12 md:pt-32 border-4'>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
            <div>
              <div className="flex flex-col p-12 justify-center border-4">
                <img src={bedsIcon} className="h-12 md:h8" alt="Beds icon" />
                <p className="mt-3">Beds</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12">-</button>
                <p className="w-7/12">1</p>
                <button className="couter-button w-5/12">+</button>
              </div>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={refIcon} className="h-12 md:h8" alt="Refrigerador icon" />
              <p className="mt-3">Refrigerador</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={furnitureIcon} className="h-12 md:h8" alt="Furniture icon" />
              <p className="mt-3">FurnitureIcon</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={ovenIcon} className="h-12 md:h8" alt="Oven icon" />
              <p className="mt-3">Oven</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={sofaIcon} className="h-12 md:h8" alt="Sofa icon" />
              <p className="mt-3">Sofa</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={tvIcon} className="h-12 md:h8" alt="TV icon" />
              <p className="mt-3">TV</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={washerIcon} className="h-12 md:h8" alt="Washer dryer icon" />
              <p className="mt-3">Washer-dryer</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={diningIcon} className="h-12 md:h8" alt="Dining icon" />
              <p className="mt-3">Dining</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={deskIcon} className="h-12 md:h8" alt="Desk icon" />
              <p className="mt-3">Desk</p>
            </div>
            <div className="flex flex-col p-12 justify-center border-4">
              <img src={wardrobeIcon} className="h-12 md:h8" alt="Wardrobe icon" />
              <p className="mt-3">Wardrobe</p>
            </div>
          </div>
          <div>
            <p>Buttons</p>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Summary</h2>
        </div>
      </div>
      <footer className="App-footer flex flex-col px-8 justify-evenly items-center py-10 md:flex-row md:items-stretch md:absolute">
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
