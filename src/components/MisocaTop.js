import React from 'react';
import '../assets/css/header.css'
import misocalogo from '../assets/images/misocalogo.svg'

export default function MisocaTop() {
    return (
        <div>
            <p class="header__logo">
                    <a href="#">
                        <img alt="" src={misocalogo}></img>
                    </a>
            </p>
        </div>
    );
}