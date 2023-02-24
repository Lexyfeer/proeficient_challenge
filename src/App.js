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
import useCounter from './useCounter';
import { useState } from 'react';


function App() {
  const [totalItems, setTotalItems] = useState(0);
  const [counterBeds, controlsBeds] = useCounter(0);
  const [counterRefri, controlsRefri] = useCounter(0);
  const [counterFurniture, controlsFurniture] = useCounter(0);
  const [counterOven, controlsOven] = useCounter(0);
  const [counterSofa, controlsSofa] = useCounter(0);
  const [counterTV, controlsTV] = useCounter(0);
  const [counterWasher, controlsWasher] = useCounter(0);
  const [counterDining, controlsDining] = useCounter(0);
  const [counterDesk, controlsDesk] = useCounter(0);
  const [counterWardrobe, controlsWardrobe] = useCounter(0);

  // calculadores para mts2
  const formateador = new Intl.NumberFormat("en", { currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const [totalMts2, setTotalMts2] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  let tax = (subTotal * .16);
  let totalPay = (subTotal + tax);
  let discount = totalPay - (totalPay * .50);


  const countItems = () => {
    setTotalItems(counterBeds + counterRefri + counterFurniture + counterOven + counterSofa + counterTV + counterWasher + counterDining + counterDesk + counterWardrobe);

    let mts2TotalBeds = counterBeds * 1.2;
    let mts2TotalRefri = counterRefri * 1;
    let mts2Furniture = counterFurniture * 0.5;
    let mts2Oven = counterOven * 0.6;
    let mts2Sofa = counterSofa * 1.5;
    let mts2TV = counterTV * 0.25;
    let mts2Washer = counterWasher * 0.5;
    let mts2Dining = counterDining * 2;
    let mts2Desk = counterDesk * 0.75;
    let mts2Wardrobe = counterWardrobe * 3.2;
    let subT = (mts2TotalBeds + mts2TotalRefri + mts2Furniture + mts2Oven + mts2Sofa + mts2TV + mts2Washer + mts2Dining + mts2Desk + mts2Wardrobe) * 200;

    setTotalMts2(mts2TotalBeds + mts2TotalRefri + mts2Furniture + mts2Oven + mts2Sofa + mts2TV + mts2Washer + mts2Dining + mts2Desk + mts2Wardrobe);
    setSubTotal(subT);
  };

  const resetCouter = () => {
    controlsBeds("reset");
    controlsRefri("reset");
    controlsFurniture("reset");
    controlsOven("reset");
    controlsSofa("reset");
    controlsTV("reset");
    controlsWasher("reset");
    controlsDining("reset");
    controlsDesk("reset");
    controlsWardrobe("reset");

    setTotalItems(0);
    setTotalMts2(0);
    setSubTotal(0);
    tax = 0;
    totalPay = 0;
    discount = 0;
  };

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
      <div className='flex flex-col pt-16 pb-48 md:pt-32 md:items-center'>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">What items to store?</h1>
          <p className="md:w-96">Select which items you wish to store before moving to your new home. We'll keep 'em safe!</p>
        </div>
        <div className='flex flex-col pt-9 md:w-9/12 md:pt-32'>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="1.2 mts2" className="cursor-help card flex flex-col p-12 justify-center">
                <img src={bedsIcon} className="h-12 md:h8" alt="Beds icon" />
                <p className="mt-3">Beds</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsBeds("decrement")}>-</button>
                <p className="w-7/12">{counterBeds}</p>
                <button className="couter-button w-5/12" onClick={() => controlsBeds("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="1 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={refIcon} className="h-12 md:h8" alt="Refrigerador icon" />
                <p className="mt-3">Refrigerador</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsRefri("decrement")}>-</button>
                <p className="w-7/12">{counterRefri}</p>
                <button className="couter-button w-5/12" onClick={() => controlsRefri("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title=".5 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={furnitureIcon} className="h-12 md:h8" alt="Furniture icon" />
                <p className="mt-3">Furniture</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsFurniture("decrement")}>-</button>
                <p className="w-7/12">{counterFurniture}</p>
                <button className="couter-button w-5/12" onClick={() => controlsFurniture("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title=".6 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={ovenIcon} className="h-12 md:h8" alt="Oven icon" />
                <p className="mt-3">Oven</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsOven("decrement")}>-</button>
                <p className="w-7/12">{counterOven}</p>
                <button className="couter-button w-5/12" onClick={() => controlsOven("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="1.5 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={sofaIcon} className="h-12 md:h8" alt="Sofa icon" />
                <p className="mt-3">Sofa</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsSofa("decrement")}>-</button>
                <p className="w-7/12">{counterSofa}</p>
                <button className="couter-button w-5/12" onClick={() => controlsSofa("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title=".25 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={tvIcon} className="h-12 md:h8" alt="TV icon" />
                <p className="mt-3">TV</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsTV("decrement")}>-</button>
                <p className="w-7/12">{counterTV}</p>
                <button className="couter-button w-5/12" onClick={() => controlsTV("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title=".5 mts2" className="cursor-help card flex flex-col px-8 py-12 justify-center border-4">
                <img src={washerIcon} className="h-12 md:h8" alt="Washer dryer icon" />
                <p className="mt-3">Washer-dryer</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsWasher("decrement")}>-</button>
                <p className="w-7/12">{counterWasher}</p>
                <button className="couter-button w-5/12" onClick={() => controlsWasher("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="2 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={diningIcon} className="h-12 md:h8" alt="Dining icon" />
                <p className="mt-3">Dining</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsDining("decrement")}>-</button>
                <p className="w-7/12">{counterDining}</p>
                <button className="couter-button w-5/12" onClick={() => controlsDining("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title=".75 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={deskIcon} className="h-12 md:h8" alt="Desk icon" />
                <p className="mt-3">Desk</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsDesk("decrement")}>-</button>
                <p className="w-7/12">{counterDesk}</p>
                <button className="couter-button w-5/12" onClick={() => controlsDesk("increment")}>+</button>
              </div>
            </div>

            <div>
              <div data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="3.2 mts2" className="cursor-help card flex flex-col p-12 justify-center border-4">
                <img src={wardrobeIcon} className="h-12 md:h8" alt="Wardrobe icon" />
                <p className="mt-3">Wardrobe</p>
              </div>
              <div className="flex border-2 rounded-md mt-4 justify-around">
                <button className="couter-button w-5/12" onClick={() => controlsWardrobe("decrement")}>-</button>
                <p className="w-7/12">{counterWardrobe}</p>
                <button className="couter-button w-5/12" onClick={() => controlsWardrobe("increment")}>+</button>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-8">
            <button className="clearBtn w-48 h-10 rounded-lg" onClick={resetCouter}>Clear</button>
            <button className="calcBtn w-48 h-10 rounded-lg" onClick={countItems}>Calculate</button>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Summary</h2>
          <div className="sumaryTable w-full m-auto my-16 text-left px-2 py-8 border border-transparent shadow-sm md:w-25 md:p-8">
            <div className="flex justify-between">
              <p data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="Number of items selected in the form" className="cursor-help w-6/12 py-2">Total Items</p>
              <p className="w-6/12 py-2">{totalItems}</p>
            </div>
            <div className="flex justify-between">
              <p data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="Total m2 of selected items" className="cursor-help w-6/12 py-2">Total m²</p>
              <p className="w-6/12 py-2">{totalMts2}</p>
            </div>
            <div className="flex justify-between">
              <p data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="1m2 = $200" className="cursor-help w-6/12 py-2">Subtotal</p>
              <p className="w-6/12 py-2">${formateador.format(subTotal)}</p>
            </div>
            <div className="flex justify-between">
              <p data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="Tax is 16%" className="cursor-help w-6/12 py-2">Tax</p>
              <p className="w-6/12 py-2">${formateador.format(tax)}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p className="w-6/12 py-2">Total</p>
              <p className="w-6/12 py-2">${formateador.format(totalPay)}</p>
            </div>
            <div className="flex justify-between font-bold">
              <p data-te-toggle="tooltip" data-te-placement="top" data-te-ripple-init data-te-ripple-color="dark" title="50% of total" className="cursor-help w-6/12 py-2">Due Today 50%</p>
              <p className="w-6/12 py-2">${formateador.format(discount)}</p>
            </div>
          </div>
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


