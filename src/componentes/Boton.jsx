import React from 'react';
import '../css/buttons.css';

function Boton({ text, isClickedButton, handleClick }){ //Destructuring sintax we refer to the property by the name
	//We are using branches to destructure the prop and only acces to the props we need
	return(
		<button
			className={ isClickedButton ? 'clicked-button' : 'restart-button'} //Ternary operator this function will check the expression isClickedButton if its true tha name of the class will be clicked-button, if is false the class name will be restart-button
			onClick={handleClick}> 
			{text}
		</button>
	);
}

export default Boton;