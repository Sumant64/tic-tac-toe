import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

const TicTacToe = (props) => {
    const {playerX, playerO} = props;
    const {initialBoard, isPlayerX, handleBoxClick, getStatusMessage, resetGame} = useTicTacToe(playerX, playerO);

    console.log(initialBoard)

  return (
    <>
        {getStatusMessage() && <div className='status-message'>
            <div className='status-heading'>
                <h3>{getStatusMessage() === "X" ? `${playerX} Wins!` : `${playerO} Wins!`}</h3>
                <button onClick={() => resetGame()} className='reset'>RESET</button>
            </div>
        </div>}
        <main>
            <div className='box-container'>
            <div className='title-container'>
                <h1>TIC TAC TOE</h1>
                <h4>Player: {isPlayerX ? playerX : playerO} Turn</h4>
            </div>
                <section className='board-container'>
                    {
                        initialBoard.map((item, index) => {
                            return (
                                <button
                                    className='container'
                                    onClick={() => handleBoxClick(index)}
                                >{item}</button>
                            )
                        })
                    }
                </section>
            </div>
        </main>
    </>
  )
}

export default TicTacToe