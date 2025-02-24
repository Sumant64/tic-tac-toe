import React, { useState } from 'react'

let board = new Array(9).fill(null);

const useTicTacToe = () => {
    const [initialBoard, setInitialBoard] = useState(board);


    return {
        initialBoard,
        
    }
    
}

export default useTicTacToe