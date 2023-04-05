export interface Task {
    start: Date;
    end: Date;
    name: string;
    id: string;
    progress: number;
    type: string;
    hideChildren: boolean;
    displayOrder: number;
}