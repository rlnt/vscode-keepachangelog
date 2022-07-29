import * as vscode from 'vscode';

enum EntryType {
    ADDED = 'Added',
    CHANGED = 'Changed',
    DEPRECATED = 'Deprecated',
    REMOVED = 'Removed',
    FIXED = 'Fixed',
    SECURITY = 'Security'
}

function multilineString(input: string[]): string {
    return input.join('\n');
}

function entrySnippet(type: EntryType): vscode.CompletionItem {
    return {
        label: `cl-${type.toLowerCase()}-entry`,
        kind: vscode.CompletionItemKind.Snippet,
        detail: `Initiates a new ${type.toLowerCase()} entry.`,
        documentation: new vscode.MarkdownString(entryString(type)),
        insertText: new vscode.SnippetString(`${entryString(type)}\n\n- $0`)
    };
}

function entryString(...type: EntryType[]): string {
    if (type.length === 1) {
        return `### ${type}`;
    } else {
        let output = '';
        type.forEach(e => {
            output += `\n${entryString(e)}\n`;
        });
        return output;
    }
}

function getAuthor(author: string, index: number): string {
    if (author.length > 0) {
        return author;
    } else {
        return `\${${index}:Author}`;
    }
}

function getRepository(repo: string, index: number): string {
    if (repo.length > 0) {
        return repo;
    } else {
        return `\${${index}:Repository}`;
    }
}

export function activate(): void {
    const config = vscode.workspace.getConfiguration('keep-a-changelog');
    const validFiles = config.get('validFiles', ['changelog.md']).map(e => {
        e.toLowerCase();
        if (!e.endsWith('.md')) e += '.md';
        return e;
    });
    const untitledFile = config.get('untitledFile', false);
    const triggerCharacter = config.get('triggerCharacter', true);
    const dateFormat = config.get('dateFormat');
    const dateSeparator = config.get('dateSeparator', '-');
    const defaultAuthor = config.get('defaultAuthor', '');
    const defaultRepository = config.get('defaultRepository', '');

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

    const completionProvider: vscode.CompletionItemProvider<vscode.CompletionItem> = {
        provideCompletionItems(doc: vscode.TextDocument): vscode.CompletionItem[] {
            if (doc.isUntitled) {
                if (!untitledFile) return [];
            } else {
                const path = doc.uri.path;
                const fileName = path.substring(path.lastIndexOf('/') + 1, path.length).toLowerCase();
                if (!validFiles.includes(fileName)) return [];
            }

            const clInit = new vscode.SnippetString(
                multilineString([
                    '# Changelog',
                    '',
                    'All notable changes to this project will be documented in this file.',
                    '',
                    'The format is based on [Keep a Changelog],',
                    'and this project adheres to [Semantic Versioning].',
                    '',
                    '## [Unreleased]',
                    '',
                    '- /',
                    '',
                    `## [0.0.2] - ${dateFix}`,
                    '',
                    entryString(EntryType.ADDED),
                    '',
                    '- $0',
                    '',
                    entryString(
                        EntryType.CHANGED,
                        EntryType.DEPRECATED,
                        EntryType.REMOVED,
                        EntryType.FIXED,
                        EntryType.SECURITY
                    ),
                    `## [0.0.1] - ${dateFix}`,
                    '',
                    '- initial release',
                    '',
                    '<!-- Links -->',
                    '[keep a changelog]: https://keepachangelog.com/en/1.0.0/',
                    '[semantic versioning]: https://semver.org/spec/v2.0.0.html',
                    '',
                    '<!-- Versions -->',
                    `[unreleased]: https://github.com/${getAuthor(defaultAuthor, 1)}/${getRepository(
                        defaultRepository,
                        2
                    )}/compare/v0.0.2...HEAD`,
                    `[0.0.2]: https://github.com/${getAuthor(defaultAuthor, 1)}/${getRepository(
                        defaultRepository,
                        2
                    )}/compare/v0.0.1...v0.0.2`,
                    `[0.0.1]: https://github.com/${getAuthor(defaultAuthor, 1)}/${getRepository(
                        defaultRepository,
                        2
                    )}/releases/tag/v0.0.1`
                ])
            );

            const clEntries = new vscode.SnippetString(
                multilineString([
                    entryString(EntryType.ADDED),
                    '',
                    '- $0',
                    entryString(
                        EntryType.CHANGED,
                        EntryType.DEPRECATED,
                        EntryType.REMOVED,
                        EntryType.FIXED,
                        EntryType.SECURITY
                    )
                ])
            );

            const clVerFull = new vscode.SnippetString(
                multilineString([`## [\${1:version}] - ${dateEditable}`, '', clEntries.value])
            );

            return [
                {
                    label: 'cl-init',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates a new changelog with all required entries.',
                    documentation: new vscode.MarkdownString(
                        clInit.value.replace(dateFix, dateDisplay).replace(dateFix, dateDisplay).replace('- $0', '')
                    ),
                    insertText: clInit
                },
                {
                    label: 'cl-version-full',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates a new version entry with all fields.',
                    documentation: new vscode.MarkdownString(
                        clVerFull.value
                            .replace(dateEditable, dateDisplay)
                            .replace('${1:version}', '1.0.0')
                            .replace('- $0', '')
                    ),
                    insertText: clVerFull
                },
                {
                    label: 'cl-version',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates a new version entry without any fields.',
                    documentation: new vscode.MarkdownString(`## [1.0.0] - ${dateDisplay}`),
                    insertText: new vscode.SnippetString(`## [\${1:version}] - ${dateEditable}`)
                },
                {
                    label: 'cl-entries',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates all version fields without a version header.',
                    documentation: new vscode.MarkdownString(clEntries.value.replace('- $0', '')),
                    insertText: clEntries
                },
                entrySnippet(EntryType.ADDED),
                entrySnippet(EntryType.CHANGED),
                entrySnippet(EntryType.DEPRECATED),
                entrySnippet(EntryType.REMOVED),
                entrySnippet(EntryType.FIXED),
                entrySnippet(EntryType.SECURITY),
                {
                    label: 'cl-link-first',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates a new link for the first version.',
                    documentation: new vscode.MarkdownString(
                        '[1.0.0] https://github.com/RLNT/keep-a-changelog/releases/v1.0.0'
                    ),
                    insertText: new vscode.SnippetString(
                        `[\${1:Version}]: https://github.com/${getAuthor(defaultAuthor, 2)}/${getRepository(
                            defaultRepository,
                            3
                        )}/releases/v\${1:Version}$0`
                    )
                },
                {
                    label: 'cl-link-compare',
                    kind: vscode.CompletionItemKind.Snippet,
                    detail: 'Initiates a new link for comparing two versions.',
                    documentation: new vscode.MarkdownString(
                        '[1.0.0] https://github.com/RLNT/keep-a-changelog/compare/v1.0.0..v1.1.0'
                    ),
                    insertText: new vscode.SnippetString(
                        `[\${1:Version}]: https://github.com/${getAuthor(defaultAuthor, 2)}/${getRepository(
                            defaultRepository,
                            3
                        )}/compare/v\${4:PreviousVersion}..v\${1:Version}$0`
                    )
                }
            ];
        }
    };

    triggerCharacter
        ? vscode.languages.registerCompletionItemProvider('markdown', completionProvider, '-')
        : vscode.languages.registerCompletionItemProvider('markdown', completionProvider);
}
