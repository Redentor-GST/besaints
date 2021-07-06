export interface Phrase extends Object {
    text: string;
    author: string;
    date: Date;
}

export interface SaintInfo extends Object {
    info: string;
    saint: string;
    date: Date;
}

export interface dbSaintInfo extends Object {
    saints_data: [SaintInfo],
    date: Date
}