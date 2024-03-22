import React from 'react'
import "./button.scss"
const ButtonMe = ({btnString="Bog'lanish"}) => {

    return (
        <div className="nav-button">
            <button>
                {btnString}
            </button>
        </div>
    )
}

export default ButtonMe