import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

const TicTacToe = () => {
    const {initialBoard, isPlayerX, handleBoxClick, getStatusMessage} = useTicTacToe();

    console.log(initialBoard)

  return (
    <>
        <main>

            <div className='box-container'>
            <div className='title-container'>
                <h1>TIC TAC TOE</h1>
                <h4>Player: {isPlayerX ? "X" : "O"} Turn</h4>
                <h3>{getStatusMessage()}</h3>
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