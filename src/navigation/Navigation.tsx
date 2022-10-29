import React, {FormEvent, ReactElement} from "react";
import './Navigation.css';
import './History';
import {History} from "./History";
import {Experience} from "../experience/Experience";
import {Education} from "../education/Education";
import {Links} from "../links/Links";
import {About} from "../about/About";
import {Directory} from "../directory/Directory";

export function Navigation() {
    const [history1, setHistory1] = React.useState({command: 'ls', result: <Directory/>});
    const [history2, setHistory2] = React.useState({command: '', result: <></>});
    const [history3, setHistory3] = React.useState({command: '', result: <></>});
    const [history4, setHistory4] = React.useState({command: '', result: <></>});
    const [history5, setHistory5] = React.useState({command: '', result: <></>});

    const determineResult = (command: string): ReactElement =>  {
        switch (command) {
            case 'ls':
            case 'dir':
                return <Directory/>;
            case 'about':
                return <About/>;
            case 'links':
                return <Links/>;
            case 'experience':
            case 'exp':
                return <Experience/>
            case 'education':
            case 'edu':
                return <Education/>
            default:
                return <>Command not recognized...</>;
        }

    }

    const navigate = (form: FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        const command = (form as any).target[0].value.trim().toLowerCase();
        if(command === 'clear' || command === 'cls') {
            setHistory1({command: '', result: <></>});
            setHistory2({command: '', result: <></>});
            setHistory3({command: '', result: <></>});
            setHistory4({command: '', result: <></>});
            setHistory5({command: '', result: <></>});
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