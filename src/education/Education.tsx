import React from 'react';

const EDUCATION_TEXT = 'Degree in Software Engineering from Iowa State University';
export const EDUCATION_LENGTH = EDUCATION_TEXT.length;

export function Education() {
    return <>
        {EDUCATION_TEXT}
    </>
}