import React from "react";
import './Links.css';

export const LINKS_LENGTH = 24;

export function Links() {
    return <>
        Github&nbsp;&nbsp;
        <a className={'Github'} target={'blank'} href="https://github.com/cadsdanaa">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        LinkedIn&nbsp;&nbsp;
        <a className={'LinkedIn'} target={'blank'} href="https://linkedin.com/in/alex-dana-907a74193">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
        Resume
        <a className={'Resume'} download target="_blank" rel="noreferrer" href="Resume.pdf">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </a>
    </>
}