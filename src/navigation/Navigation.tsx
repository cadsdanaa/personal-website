import React, {FormEvent, ReactElement} from "react";
import './Navigation.css';
import {History} from "./History";
import {Experience, EXPERIENCE_LENGTH} from "../experience/Experience";
import {Education, EDUCATION_LENGTH} from "../education/Education";
import {Links, LINKS_LENGTH} from "../links/Links";
import {About, ABOUT_LENGTH} from "../about/About";
import {Directory, DIRECTORY_LENGTH} from "../directory/Directory";

export function Navigation() {
    const [history1, setHistory1] = React.useState({command: 'ls', result: <Directory/>});
    const [history2, setHistory2] = React.useState({command: '', result: <></>});
    const [history3, setHistory3] = React.useState({command: '', result: <></>});
    const [history4, setHistory4] = React.useState({command: '', result: <></>});
    const [history5, setHistory5] = React.useState({command: '', result: <></>});

    const determineResult = (command: string): any =>  {
        switch (command) {
            case 'ls':
            case 'dir':
                return {result: <Directory/>, length: DIRECTORY_LENGTH};
            case 'about':
                return {result: <About/>, length: ABOUT_LENGTH};
            case 'links':
                return {result: <Links/>, length: LINKS_LENGTH};
            case 'experience':
            case 'exp':
                return {result: <Experience/>, length: EXPERIENCE_LENGTH}
            case 'education':
            case 'edu':
                return {result: <Education/>, length: EDUCATION_LENGTH}
            default:
                return {result: <>Command not recognized...</>, length: 25};
        }

    }

    function resetAnimations(resultLength: string) {
        document.getElementById('history')!.className = '';
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.getElementById('history')!.offsetWidth;
        document.getElementById('history')!.className = 'typewriter';

        document.getElementById('input')!.className = '';
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.getElementById('input')!.offsetWidth;
        document.getElementById('input')!.style.setProperty('--n', resultLength);
        document.getElementById('input')!.className = 'PostNavigation';
    }

    const navigate = (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        const command = (form as any).target[0].value.trim().toLowerCase();
        (form as any).target[0].value = '';
        if(command === '') {
            return;
        }
        if(command === 'clear' || command === 'cls') {
            setHistory1({command: '', result: <></>});
            setHistory2({command: '', result: <></>});
            setHistory3({command: '', result: <></>});
            setHistory4({command: '', result: <></>});
            setHistory5({command: '', result: <></>});
            return;
        }
        const {result, length} = determineResult(command);
        setHistory5(history4);
        setHistory4(history3);
        setHistory3(history2);
        setHistory2(history1);
        setHistory1({command, result});
        resetAnimations(length*.01 + 's');
    }

    return (
        <div>
            {history5.command ? <History command={history5.command} result={history5.result}/> : <></>}
            {history4.command ? <History command={history4.command} result={history4.result}/> : <></>}
            {history3.command ? <History command={history3.command} result={history3.result}/> : <></>}
            {history2.command ? <History command={history2.command} result={history2.result}/> : <></>}
            {history1.command ? <div id={'history'} className={'typewriter'}><History command={history1.command} result={history1.result}/></div> : <></>}
            <div id={'input'} className='PostNavigation'>
                C:/AlexDana &gt; &nbsp;
                <form className={'Form'} onSubmit={(navValue) => navigate(navValue)}>
                    <input autoFocus={true} className='Input'/>
                </form>
            </div>
        </div>
    )


}