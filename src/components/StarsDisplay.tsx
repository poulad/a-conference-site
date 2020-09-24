import React from "react";
import logo from '../logo.svg'

const StarsDisplay = (props: { starsCount: number }) => {
    return <div className="stars-display">
        {Array.apply(null, Array(props.starsCount)).map((_, i) =>
            <img key={i} src={logo} alt="star"/>
        )}
    </div>
}

export default StarsDisplay