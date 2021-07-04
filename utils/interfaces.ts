export interface Phrase extends Object {
    text: string,
    author: string
}

export interface PhraseWithDate extends Object {
    text: string;
    author: string;
    date: Date;
}

export interface SaintInfo extends Object {
    info: string;
    saint: string;
}

export interface SaintInfoWithDate extends Object {
    info: [SaintInfo],
    date: Date
}