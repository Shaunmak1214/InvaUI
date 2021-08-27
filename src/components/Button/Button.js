import React from 'react';
import './Button.css'

interface ButtonProps {
    primary: boolean;
}

const Button = ({primary: false} : ButtonProps) => {
    return (
        <button className='button' >
            {children}
        </button>
    )
}

export default Button
