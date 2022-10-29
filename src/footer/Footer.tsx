import React from 'react';
import './Footer.css';

export function Footer() {
    return <div className={'Footer'}>
        Terminal Version: {process.env.REACT_APP_COMMIT_ID ? process.env.REACT_APP_COMMIT_ID : 'local'}
    </div>
}