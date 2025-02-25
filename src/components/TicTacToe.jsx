import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

const TicTacToe = () => {
    const {initialBoard, isPlayerX, handleBoxClick, getStatusMessage} = useTicTacToe();

    console.log(initialBoard)

  return (
    <>
        <main>
            <h1>Tic Tac Toe</h1>

            <div className='box-container'>
                <h4>Player: {isPlayerX ? "X" : "O"} Turn</h4>
                <h3>{getStatusMessage()}</h3>
                <section>
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