
import React from 'react';
import './App.css';
import { Localization } from './Localization';


export const NameTags = ({ tagNames, lang = "English" }) => {
    return (
        <ul className="tag-names">
            {tagNames.map((val, index) => (
                <li key={index}><span>{Localization[lang].hi} </span><b>{val}</b><span> {Localization[lang].welcome}</span></li>
            ))}
        </ul>
    )
}