import React from 'react'
import useTicTacToe from '../hooks/useTicTacToe'

const TicTacToe = () => {
    const {initialBoard} = useTicTacToe();

    console.log(initialBoard)

  return (
    <>
        <main>
            <h1>Tic Tac Toe</h1>

            <div className='box-container'>
                <section>
                    {
                        initialBoard.map((item, index) => {
                            return (
                                <button
                                    className='container'
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