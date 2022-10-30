import React from "react";
import './Links.css';

export const LINKS_LENGTH = 24;

export function Links() {
    return <>
        <a target={'blank'} href="https://github.com/cadsdanaa">Github</a>&nbsp;&nbsp;
        <a target={'blank'} href="https://linkedin.com/in/alex-dana-907a74193">LinkedIn</a>&nbsp;&nbsp;
        <a download target="_blank" rel="noreferrer" href="Resume.pdf">Resume.pdf</a>
    </>
}