import React from 'react';
import './Footer.css';

export function Footer() {

    const navigateToCommit = () => {
        if(process.env.REACT_APP_COMMIT_ID) {
            window.open('https://github.com/cadsdanaa/personal-website/commit/' + process.env.REACT_APP_COMMIT_ID);
        }
    }

    return <div className={'Footer'} onClick={() => navigateToCommit()}>
        Terminal Version: {process.env.REACT_APP_COMMIT_ID ? process.env.REACT_APP_COMMIT_ID : 'local'}
    </div>
}