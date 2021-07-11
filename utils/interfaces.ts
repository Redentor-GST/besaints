export interface Phrase extends Object {
    text: string;
    author: string;
    date: string;
}

export interface SaintInfo extends Object {
    info: string;
    saint: string;
    date: string;
}

export interface dbSaintInfo extends Object {
    saints_data: [SaintInfo],
    date: string
}