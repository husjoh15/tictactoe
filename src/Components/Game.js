import React, {Component} from 'react';
import GameBoard from "./GameBoard";

class Game extends Component{
    constructor(props) {
        super(props);
        this.state = this.startState();
    }
    handleClick(square){
        if (this.state.board[square] === null) {
            const updatedBoard = this.state.board;
            updatedBoard[square] = this.state.currentPlayer;
            this.setState({
                board: updatedBoard,
                currentPlayer: this.state.currentPlayer === "X" ? "O" : "X"
            });
        }
    }
    startState(){
        return {
            board: Array(9).fill(null),
            currentPlayer: "X"
        }
    }
    reset (){
        this.setState(this.startState())
    }
    render(){
        return (
            <div>
                <h1>TicTacToe</h1>
                <GameBoard onClick={(square) => this.handleClick(square)} board={this.state.board} />
                <div className="currentPlayer"> {this.state.currentPlayer}'s turn </div>
                <button onClick={() => this.reset()}> Reset </button>
            </div>
        );
    }
}

export default Game;