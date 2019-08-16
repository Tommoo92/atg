/** @jsx jsx */
import React from 'react';
import {css, jsx} from '@emotion/core';

var input;
class Input extends React.Component {
    constructor(props){
        super();
        input = this;

        this.state = {
            value: "Välj"
        }
    }
    onChange(e){
        console.log(e.target.value);
        var game = e.target.value;
        input.props.onGameChange(game);
    }
    render(){
        return (
        <div className="input"  css={css`
        text-align: center
        `}>
            <h2>Välj spelform</h2>
            <select  css={css`
            width: 50%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box; 
            `} onChange={input.onChange}>
                <option value="">Välj spel</option>
                <option value="V75">V75</option>
                <option value="V65">V65</option>
                <option value="V64">V64</option>
                <option value="V4">V4</option>
            </select>
        </div> 
        );
    }
}

export default Input;