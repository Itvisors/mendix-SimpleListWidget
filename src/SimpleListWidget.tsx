import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { SimpleListWidgetContainerProps } from "../typings/SimpleListWidgetProps";

import "./ui/SimpleListWidget.css";

export default class SimpleListWidget extends Component<SimpleListWidgetContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
