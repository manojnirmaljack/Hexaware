
import React from 'react';

export const LanguageSelection = ({ languages,changeLanguage }) => {
    return (
        <select onChange={(e)=>changeLanguage(e)}>
            {languages.map((val, index) => (
                <option key={index}>{val}</option>
            ))}

        </select>
    )
}