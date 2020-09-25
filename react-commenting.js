// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Import the Dice component from the same directory as the App.js parent component so that the App component can call Dice in its return. It is important the App renders the components separately rather than handle all the functionality of the app in one single file. Having separate components that serve a single purpose will allow the app be more dynamic and allows for expansion if need be.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  constructor(props){
    super(props)
    // 2) Add a state object from React to your application. It holds all the properties (key: value pairs) that you may need to retrieve for the functionality of your application. 
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Destructor the properties of your state object by providing the path of that object (i.e. this.state). This allows the properties to be their own variable without having to reference the path where they came from. 
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) Declare a varaible newRoll and assign it a random index of the rollImages array, which contains 6 different images of the faces of a die (Note: I gotchu with the singular "die" Andee). This way when the user clicks the image of the die, it will generate a random image of one of the six die faces.
    let newRoll = rollImages[randomNum]
    // 5) The setState function takes a state object property as an argu,ent. Update the previous version of state to this new version of the state object by setting the current picture of the die to the radomized picture every time the user clicks the die. The diceLog will create an archive of the randomized die images in an array. The spread operator in front of diceLog is a way of concatting the newRoll to its array.
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        // 6) A JSX div tag with the id "board-container" which can be stylized in CSS or inline. It basically contains the space for dice and log to live in. The id is an identifier to allow the user to understand what it is and its purpose based on its name. Simply put, it contains the board where we can see the dice image that has an onclick event and a history of its previous clicks.
        <Dice
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component{
  // 7) The render() function allows React to make changes to the virtual DOM so the user can see changes made in real time. It is required if the user wants the application to hot reload. React is unique in that it renders only the places where it sees a change has been made rather than refreshing the entire page. Its return is where all the JSX is housed.
  render(){
    // 8) Destructor the prop calls from the parent in the child component. This allows the child component Dice to get access to these properties in the parent component. Now Dice can use these variables to acess the path of the images and the function that will activate in the onclick event. The variable is probably declared const so that the variable doesn't get changed to something else.
    const { currentPic, roll } = this.props
    return(
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) The alternative title for the image if the image path happens to be broken. It gives a description of what the image should be and in this case it is will be images of dice. It essentially acts as a placeholder for this image if it doesn't load properly. This is very important for visually impaired folks who use some sort of visual assistance that will read the alternative name to give the person an idea of what is on the webpage.
          alt="images of dice"
          // 10) The source of the image is the path (which looks similar to a hyperlink) of where to find it in the project's directory. Here, the currentPic comes from the parent component App which has the die face images imported into it. Inside the parent's render return, the Dice component is called within its tag is currentPic which is the prop name assigned to the state object of currentPic.
          src={ currentPic }
          onClick={ roll }
        />
      </div>
    )
  }
}

export default Dice
