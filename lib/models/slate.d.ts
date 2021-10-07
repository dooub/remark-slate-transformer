import * as slate from "slate";
export declare type Node = Editor | Element | Text;
export declare type Editor = slate.Editor;
export declare type Element = slate.Element & {
    type: string;
};
export declare type Text = slate.Text;
