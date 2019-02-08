
import React from 'react';

export const MultiLineText = ({ props, handleChange, handleKeyPress }) => {
    return (
        <div>
            <textarea name="body"
                onChange={(e) => handleChange(e)}
                onKeyPress={(e) => handleKeyPress(e)}
            />
            {props.props}</div>
    )
}