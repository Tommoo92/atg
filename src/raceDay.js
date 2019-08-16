/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

var race;
class RaceDay extends React.Component {
  constructor(props){
    super();
    race = this;

    this.state = {
      raceDayInfo: props.raceDayInfo
    }
    }
    componentWillReceiveProps(props){
        this.setState({
          raceDayInfo: props.raceDayInfo
        })
    }
    onRaceSelection(starts){
      race.props.onRaceSelection(starts);
    }
    render(){
        const races = this.state.raceDayInfo.races.map((race, i) => {
          return (
            <li className="race" key={i} css={item} onClick={() => { this.onRaceSelection(race.starts) }}>
                <div css={css`width:10%`}>{race.number}</div><div css={css`width:70%`}>{race.name}</div><div css={css`width:20%`}>{race.startTime}</div>
            </li>
          )
        })
      return (
        <div className="races">
            <h3>Race</h3>
            <ul css={
              css`
              list-style-type: none;
              `
            }>
              {races}
            </ul>
        </div>
      );
    }
}

export default RaceDay;

const grayBg = css({
  "backgroundColor": '#dedede'
})

const item = css({
  ':hover,:focus': grayBg,
  "display": "flex",
  "borderBottom": "1px solid #dedede",
  "cursor": "pointer",
  "textAlign": "left"
})
