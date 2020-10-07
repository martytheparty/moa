export interface Item {
    id: Number;
    name: String;
    level: Number;
    ele?: any;
    parent?: String;
    draggable?: boolean;
    connected?: boolean;
    parentId?: Number;
    x: Number;
    y: Number;
}
