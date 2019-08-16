/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

var games;
class Games extends React.Component {
  constructor(props){
    super();
    games = this;

    this.state = {
      data: props.data
    }
    }
    componentWillReceiveProps(props){
        this.setState({
            data: props.data
        })
    }
    onSelection(id){
        games.props.onSelection(id);
    }
  render(){
      const games = this.state.data.upcoming.map((game, i) => {
        return (
          <li className="game" key={i} css={item} onClick={() => { this.onSelection(game.id) }}>
              <div css={css`width: 50%`}>{game.id}</div><div css={css`width: 50%`}>{game.startTime}</div>
          </li>
        )
      })
    return (
      <div className="games">
          <h2>Kommande event</h2>
          <ul css={
            css`
            list-style-type: none;
            `
          }>
            {games}
          </ul>
      </div>
    );
  }
}

export default Games;

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
