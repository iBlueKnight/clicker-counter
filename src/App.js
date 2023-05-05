import './App.css';
import logoPage from './img/freeCodeCampLogo.png';
import Boton from './componentes/Boton';
import Counter from './componentes/Counter';
import { useState } from 'react'; //react hook that allow us working with hooks

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    //Here we are working with hooks special functions that allow us use react 
    //special features like react useState, a hook that allow us to add a state to
    //a functionan component to use this hook and return the state we will import the hook at line 5
    setNumClicks(numClicks + 1);
    console.log('Chinga a tú madre  mierda >_<');

  }

  const restarCounter = () =>{
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className='logo-container'>
        <img
          className='logo'
          src={logoPage}
          alt=''
        />
      </div>
      <div className='main-container'>
        <Counter
          numClicks = {numClicks} />
        <Boton
        text ='+ Click'
        isClickedButton = {true}
        handleClick = {handleClick}/> 
        <Boton
        text = 'Restart'
        isClickedButton = {false}
        handleClick = {restarCounter}/>
      </div>
    </div>
  );
}

export default App;
