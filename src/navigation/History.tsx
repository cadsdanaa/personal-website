import React from 'react';

export function History(historyProps: any) {
    return <div>
        C:/AlexDana &gt; &nbsp; {historyProps.command}
        <br/>
        <span>{historyProps.result}</span>
    </div>
}