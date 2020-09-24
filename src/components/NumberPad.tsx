import React from "react";
import {NumberStatus} from "./GameBoard";

export type PropsType = {
    numbers: Array<NumberStatus>,
    onClick: (n: number) => any
}

const NumberPad = ({numbers, onClick}: PropsType) => {
    const onButtonElementClick = (ev: any) => {
        ev.preventDefault()
        onClick(Number((ev.target as any).innerText))
    };

    return <div className="number-pad">
        {numbers.map(n =>
            <button key={n.number} type="button" className={n.status} onClick={onButtonElementClick}
                    disabled={n.status === 'completed'}>{n.number}</button>
        )}
    </div>
}

export default NumberPad