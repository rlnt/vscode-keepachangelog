import * as vscode from 'vscode';

type DateData = {
    dateDisplay: string;
    dateEditable: string;
    dateFix: string;
};

type Config = {
    validFiles: string[];
    untitledFile: boolean;
    triggerCharacter: boolean;
    dateData: DateData;
    defaultAuthor: string;
    defaultRepository: string;
};

function formatDate(config: vscode.WorkspaceConfiguration): DateData {
    const dateFormat = config.get('dateFormat');
    const dateSeparator = config.get('dateSeparator', '-');

    let dateDisplay: string;
    let dateEditable: string;
    let dateFix: string;

    switch (dateFormat) {
        case 'YYYY/MM/DD':
            dateDisplay = `2012${dateSeparator}10${dateSeparator}25`;
            dateEditable = `\${2:$CURRENT_YEAR}${dateSeparator}\${3:$CURRENT_MONTH}${dateSeparator}\${4:$CURRENT_DATE}`;
            dateFix = `$CURRENT_YEAR${dateSeparator}$CURRENT_MONTH${dateSeparator}$CURRENT_DATE`;
            break;
        case 'MM/DD/YYYY':
            dateDisplay = `10${dateSeparator}25${dateSeparator}2012`;
            dateEditable = `\${2:$CURRENT_MONTH}${dateSeparator}\${3:$CURRENT_DATE}${dateSeparator}\${4:$CURRENT_YEAR}`;
            dateFix = `$CURRENT_MONTH${dateSeparator}$CURRENT_DATE${dateSeparator}$CURRENT_YEAR`;
            break;
        case 'DD/MM/YYYY':
            dateDisplay = `25${dateSeparator}10${dateSeparator}2012`;
            dateEditable = `\${2:$CURRENT_DATE}${dateSeparator}\${3:$CURRENT_MONTH}${dateSeparator}\${4:$CURRENT_YEAR}`;
            dateFix = `$CURRENT_DATE${dateSeparator}$CURRENT_MONTH${dateSeparator}$CURRENT_YEAR`;
            break;
        default:
            dateDisplay = `2012${dateSeparator}10${dateSeparator}25`;
            dateEditable = `\${2:$CURRENT_YEAR}${dateSeparator}\${3:$CURRENT_MONTH}${dateSeparator}\${4:$CURRENT_DATE}`;
            dateFix = `$CURRENT_YEAR${dateSeparator}$CURRENT_MONTH${dateSeparator}$CURRENT_DATE`;
            break;
    }

    return { dateDisplay, dateEditable, dateFix };
}

function computeValidFiles(config: vscode.WorkspaceConfiguration): string[] {
    return config.get('validFiles', ['changelog.md']).map(e => {
        e.toLowerCase();
        if (!e.endsWith('.md')) e += '.md';
        return e;
    });
}

export function parseConfig(): Config {
    const config = vscode.workspace.getConfiguration('keep-a-changelog');
    return {
        validFiles: computeValidFiles(config),
        untitledFile: config.get('untitledFile', false),
        triggerCharacter: config.get('triggerCharacter', true),
        dateData: formatDate(config),
        defaultAuthor: config.get('defaultAuthor', ''),
        defaultRepository: config.get('defaultRepository', '')
    };
}
