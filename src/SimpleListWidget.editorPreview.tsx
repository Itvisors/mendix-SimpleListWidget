import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { SimpleListWidgetPreviewProps } from "../typings/SimpleListWidgetProps";

declare function require(name: string): string;

export class preview extends Component<SimpleListWidgetPreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/SimpleListWidget.css");
}
