/** @jsx jsx */
import React from 'react';
import logo from '../src/atg.svg';
import {css, jsx} from '@emotion/core';
import Input from './input.js';
import Games from './games.js';
import RaceDay from './raceDay.js';
import RaceInfo from './raceInfo.js';
import 'bootstrap/dist/css/bootstrap.css';

var app;
class App extends React.Component {
  constructor(){
    super();
    app = this;

    this.state = {
      data: [],
      raceDayInfo: [],
      raceInfo: []
    }
  }
  async onGameChange(game){
    var url = "/services/racinginfo/v1/api/products/"+game;
    await fetch(url)    
    .then((response) => response.json())
    .then((responseJSON) => {
       // do stuff with responseJSON here...
       console.log(responseJSON);
       app.setState({
         data: responseJSON,
         raceDayInfo: [],
         raceInfo: []
      });
  });
}
onRaceDaySelection(id){
  var url = "/services/racinginfo/v1/api/games/"+id;
  fetch(url)    
  .then((response) => response.json())
  .then((responseJSON) => {
     // do stuff with responseJSON here...
     console.log(responseJSON);
     app.setState({
      raceDayInfo: responseJSON,
      raceInfo: []
    });
});
}
onRaceSelection(race){
  console.log(race);
  app.setState({
    raceInfo: race
  })
}
  render(){
    return (
      <div className="App" css={css`text-align:center`}>
        <nav css={css`
        background-color: rgb(0, 79, 159);
        width: 100%;
        height: 50px;
        border-bottom: 4px solid #fec005;
        padding: 15px; 
        `}>
          <img  css={css`
        height: 100%;
        float: left; 
        `} src={logo}></img>  
        </nav>
        <div className="container">
          <Input onGameChange={app.onGameChange}></Input>
          {app.state.data.length !== 0 &&
            <Games data={app.state.data} onSelection={app.onRaceDaySelection}></Games>
          }
          {app.state.raceDayInfo.length !== 0 &&
            <RaceDay raceDayInfo={app.state.raceDayInfo} onRaceSelection={app.onRaceSelection} ></RaceDay>
          }
          {app.state.raceInfo.length !== 0 &&
            <RaceInfo raceInfo={app.state.raceInfo} ></RaceInfo>
          }
        </div>
      </div>
    );
  }
}

export default App;
