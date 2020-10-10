export interface Item {
    id: number;
    name: string;
    level: number;
    ele?: any;
    parent?: string;
    draggable?: boolean;
    connected?: boolean;
    parentId?: number;
    x: number;
    y: number;
}
