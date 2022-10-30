import React from 'react';

const ABOUT_TEXT = 'Experienced software engineer with a primary focus on backend Java development. ' +
    'Extensive experience using various Spring frameworks. Strong advocate for the benefits ' +
    'that test driven development and other extreme programming practices can bring to a team.'
export const ABOUT_LENGTH = ABOUT_TEXT.length;

export function About() {
    return <>
        {ABOUT_TEXT}
    </>
}