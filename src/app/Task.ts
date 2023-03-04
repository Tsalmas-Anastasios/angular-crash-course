//create the data-table interface

export interface Task {
    id?: number;                    //? --> optional
    text: string;
    day: string;
    reminder: boolean;
}