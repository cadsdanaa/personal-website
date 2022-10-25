import React, {FormEvent} from "react";
import './Navigation.css';
import './History';
import {History, HistoryProps} from "./History";

export function Navigation() {
    const [history1, setHistory1] = React.useState({command: '', result: ''} as HistoryProps);
    const [history2, setHistory2] = React.useState({command: '', result: ''} as HistoryProps);
    const [history3, setHistory3] = React.useState({command: '', result: ''} as HistoryProps);
    const [history4, setHistory4] = React.useState({command: '', result: ''} as HistoryProps);
    const [history5, setHistory5] = React.useState({command: '', result: ''} as HistoryProps);
    const [history6, setHistory6] = React.useState({command: '', result: ''} as HistoryProps);
    const [history7, setHistory7] = React.useState({command: '', result: ''} as HistoryProps);
    const [history8, setHistory8] = React.useState({command: '', result: ''} as HistoryProps);
    const [history9, setHistory9] = React.useState({command: '', result: ''} as HistoryProps);
    const [history10, setHistory10] = React.useState({command: '', result: ''} as HistoryProps);

    return (
        <div>
            <div className='InitialNavigation'>
                C:/AlexDana &gt; &nbsp;ls
            </div>
            <div className='FileStructure'>
                <span>About&nbsp;&nbsp;Projects&nbsp;&nbsp;Resume</span>
            </div>
            {history10.command ? <History command={history10.command} result={history10.result}/> : <></>}
            {history9.command ? <History command={history9.command} result={history9.result}/> : <></>}
            {history8.command ? <History command={history8.command} result={history8.result}/> : <></>}
            {history7.command ? <History command={history7.command} result={history7.result}/> : <></>}
            {history6.command ? <History command={history6.command} result={history6.result}/> : <></>}
            {history5.command ? <History command={history5.command} result={history5.result}/> : <></>}
            {history4.command ? <History command={history4.command} result={history4.result}/> : <></>}
            {history3.command ? <History command={history3.command} result={history3.result}/> : <></>}
            {history2.command ? <History command={history2.command} result={history2.result}/> : <></>}
            {history1.command ? <History command={history1.command} result={history1.result}/> : <></>}
            <div className='PostNavigation'>
                C:/AlexDana &gt; &nbsp;
                <form>
                    <input onChange={(navValue) => navigate(navValue)} className='Input'/>
                    <input style={{display: "none"}} type="submit" className='Input'/>
                </form>
            </div>
        </div>
    )

    const navigate = (input: FormEvent<HTMLInputElement>) => {
        console.log(JSON.stringify(input.target));
    }

}