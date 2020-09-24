import React, {useState} from "react";
import NumberPad from "./NumberPad";
import StarsDisplay from "./StarsDisplay";

const GameBoard = () => {

    const [gameNumbers, setGameNumbers] = useState(utils.generateNumbers(1, 9, 'available'))
    const [completedTargetSums, setCompletedTargetSums] = useState([] as number[])
    const [targetSum, setTargetSum] = useState(utils.generateTargetSum(1, 9, completedTargetSums))

    const onNumberClick = (numberClicked: number) => {
        const numberClickedStatus = gameNumbers.find(n => n.number === numberClicked)
        if (!numberClickedStatus || numberClickedStatus.status === 'completed') return

        if (numberClickedStatus.status === 'available') {
            numberClickedStatus.status = 'selected'
        } else if (numberClickedStatus.status === 'selected' || numberClickedStatus.status === 'wrong') {
            numberClickedStatus.status = 'available'
        }

        // calculate sum for wrong selected nums

        const selectedNumbers = gameNumbers.filter(ns => ns.status === 'selected' || ns.status === 'wrong')
        const sumOfSelectedNumbers = selectedNumbers.reduce((a, b) => (a + b.number), 0)
        if (sumOfSelectedNumbers > targetSum) {
            selectedNumbers.forEach(ns => ns.status = 'wrong')
        } else if (sumOfSelectedNumbers === targetSum) {
            selectedNumbers.forEach(ns => ns.status = 'completed')
            completedTargetSums.push(targetSum)
            setCompletedTargetSums([...completedTargetSums])
            if (completedTargetSums.length === 9) {
                // game completed
            } else {
                setTargetSum(utils.generateTargetSum(1, 9, completedTargetSums))
            }
        }
        setGameNumbers([...gameNumbers])

        // if add up to the number, then mark them completed
    }

    const resetGame = () => {
        setGameNumbers(utils.generateNumbers(1, 9, 'available'))
        setCompletedTargetSums([])
        setTargetSum(utils.generateTargetSum(1, 9, []))
    }

    return <div className="game-board">
        <p>Select numbers that add up to the number of icons shown.</p>
        <StarsDisplay starsCount={targetSum}/>
        <NumberPad numbers={gameNumbers} onClick={onNumberClick}/>
        <button hidden={completedTargetSums.length !== 9} type="button" onClick={resetGame}>Play Again</button>
    </div>
}

const utils = {
    generateNumbers: (start: number, count: number, defaultStatus: string) => {
        return Array
            .apply(null, Array(count))
            .map((_, i) => ({
                number: start + i,
                status: defaultStatus
            } as NumberStatus))
    },

    generateTargetSum: (start: number, end: number, excludes: number[]) => {
        const rangeLength = end - start + 1
        if (excludes.length === rangeLength) {
            return -1
        }

        let targetNumber
        do {
            targetNumber = Math.floor(Math.random() * 4612832340) % rangeLength + 1
        } while (excludes.includes(targetNumber))
        return targetNumber
    }
}

export type NumberStatus = {
    number: number,
    status: 'available' | 'selected' | 'wrong' | 'completed'
}

export default GameBoard