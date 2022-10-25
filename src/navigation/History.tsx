import React from 'react';

export interface HistoryProps {
    command: string;
    result: string;
}

export function History(historyProps: HistoryProps) {
    return <div>
        C:/AlexDana &gt; &nbsp; {historyProps.command}
        {historyProps.result};
    </div>
}