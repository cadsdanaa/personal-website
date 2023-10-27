import React from 'react';

const DIRECTORY_TEXT = 'About Links Education Experience Games';
export const DIRECTORY_LENGTH = DIRECTORY_TEXT.length;

export function Directory() {
    return <>
        {DIRECTORY_TEXT}
    </>
}