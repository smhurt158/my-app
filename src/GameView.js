import './App.css';
import './api.js';
import { useState } from 'react';
import { api, account } from './api.js';
import PixelGrid from "react-pixel-grid";
function GameView() {
    function submitMove(e){
        console.log("submitting");
        e.preventDefault();
    }
    return (
    <div>
        <form onSubmit={submitMove}>
            <label>X</label>
            <input type="text" id="user"/>
            <label>Y</label>
            <input type="text" id = "pass"/>
            <button type="submit">Submit Move</button>
        </form>
        <PixelGrid
            data={[0, 1, 1, 0]}
            options={{
                size: 100,
                padding: 1,
                background: [0, 0.5, 1],
            }}
        />
    </div>
  );
}
export default GameView
