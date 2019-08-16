/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';
import Collapsible from 'react-collapsible';

var games;
class RaceInfo extends React.Component {
  constructor(props){
    super();
    games = this;

    this.state = {
      raceInfo: props.raceInfo
    }
    }
    componentWillReceiveProps(props){
        this.setState({
          raceInfo: props.raceInfo
        })
    }
    render(){
        const starts = this.state.raceInfo.map((start, i) => {
          return (
            <li className="start" key={i} css={item}>
                <div css={css`display: flex; width: 100%`}>
                    <div css={css`width:10%;`}>{start.number}</div><div css={css`width:20%;`}>{start.horse.name}</div><div css={css`width:20%;`}>{start.driver.firstName+" "+start.driver.lastName}</div><div css={css`width:20%;`}><Collapsible trigger="Tränare" css={css`font-weight: bold; cursor: pointer; text-decoration: underline`}>{start.horse.trainer.firstName+" "+start.horse.trainer.lastName}</Collapsible></div><div css={css`width:20%;`}><Collapsible trigger="Fader" css={css`font-weight: bold; cursor: pointer;text-decoration: underline`}>{start.horse.pedigree.father.name}</Collapsible></div>                    
                </div>
            </li>
          )
        })
      return (
        <div className="starts">
            <h3>Hästar</h3>
            <ul css={
              css`
              list-style-type: none;
              `
            }>
              {starts}
            </ul>
        </div>
      );
    }
}

export default RaceInfo;

const item = css({
  "display": "flex",
  "borderBottom": "1px solid #dedede",
  "textAlign": "left"
})
