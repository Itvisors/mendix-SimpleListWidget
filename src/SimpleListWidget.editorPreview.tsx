import { Component, ReactNode, createElement } from "react";
import { SimpleListWidgetPreviewProps } from "../typings/SimpleListWidgetProps";

declare function require(name: string): string;

export class preview extends Component<SimpleListWidgetPreviewProps> {
    render(): ReactNode {
        const { content } = this.props;
        return (
            <div>
                <content.renderer>
                    <div />
                </content.renderer>
            </div>
        );
    }
}

export function getPreviewCss(): string {
    return require("./ui/SimpleListWidget.css");
}
