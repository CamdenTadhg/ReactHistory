import React, { Component } from "react";
import JokeList from "./JokeList";

/** App component. Renders list of jokes. */

const App = () => {
  return (
    <div className="App">
      <JokeList />
    </div>
  )
}

export default App;

//refactor to use functional components and hooks
  //refactor JokeList
  //refactor Joke

//store jokes and votes in local storage
  //when user visits, show saved jokes rather than new ones
  //user can still generate new jokes via the button
  //new jokes replace the ones in local storage
//add ability to reset vote counts by clicking on a button
  //should clear out local storage
//add ability to lock a joke so you can keep it on the page when you request new jokes