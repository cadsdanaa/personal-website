import React, {FormEvent} from "react";
import './Navigation.css';
import './History';
import {History} from "./History";

export function Navigation() {
    const [history1, setHistory1] = React.useState({command: 'ls', result: 'About Links  Projects  Resume'});
    const [history2, setHistory2] = React.useState({command: '', result: ''});
    const [history3, setHistory3] = React.useState({command: '', result: ''});
    const [history4, setHistory4] = React.useState({command: '', result: ''});
    const [history5, setHistory5] = React.useState({command: '', result: ''});

    const determineResult = (command: string): any =>  {
        switch (command.toLowerCase()) {
            case 'ls':
            case 'dir':
                return 'About Links Projects Resume';
            case 'about':
                return 'Experienced software engineer with a primary focus on backend Java development. Extensive experience using various Spring frameworks. Strong advocate for the benefits that test driven development and other extreme programming practices can bring to a team.';
            case 'links':
                return <>
                    <a style={{color: '#39ff14'}} target={'blank'} href="https://github.com/cadsdanaa">Github</a>&nbsp;&nbsp;
                    <a style={{color: '#39ff14'}} target={'blank'} href="https://linkedin.com/in/alex-dana-907a74193">LinkedIn</a>&nbsp;&nbsp;
                    <a style={{color: '#39ff14'}} download href="Resume.pdf" target={'_self'}>Resume</a>
                </>;
            case 'projects':
                return 'Projects';
            case 'resume':
                return 'Resume';
            default:
                return 'Command not recognized...';
        }

    }

    const navigate = (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        const command = (form as any).target[0].value;
        if(command === 'clear' || command === 'cls') {
            setHistory1({command: '', result: ''});
            setHistory2({command: '', result: ''});
            setHistory3({command: '', result: ''});
            setHistory4({command: '', result: ''});
            setHistory5({command: '', result: ''});
            return;
        }
        const result = determineResult(command);
        setHistory5(history4);
        setHistory4(history3);
        setHistory3(history2);
        setHistory2(history1);
        setHistory1({command, result});
    }

    return (
        <div>
            {history5.command ? <History command={history5.command} result={history5.result}/> : <></>}
            {history4.command ? <History command={history4.command} result={history4.result}/> : <></>}
            {history3.command ? <History command={history3.command} result={history3.result}/> : <></>}
            {history2.command ? <History command={history2.command} result={history2.result}/> : <></>}
            {history1.command ? <History command={history1.command} result={history1.result}/> : <></>}
            <div className='PostNavigation'>
                C:/AlexDana &gt; &nbsp;
                <form className={'Form'} onSubmit={(navValue) => navigate(navValue)}>
                    <input autoFocus={true} className='Input'/>
                </form>
            </div>
        </div>
    )


}