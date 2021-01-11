import { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { SimpleListWidgetContainerProps } from "../typings/SimpleListWidgetProps";

import "./ui/SimpleListWidget.css";

export default class SimpleListWidget extends Component<SimpleListWidgetContainerProps> {
    render(): ReactNode {
        const { ds, content } = this.props;
        if (!ds || ds.status !== ValueStatus.Available || !ds.items) {
            return null;
        }
        const className = "simplelistwidget " + this.props.class;
        return (
            <div className={className}>
                {ds.items.map(item => (
                    <div className="simplelistwidget-item" key={item.id}>
                        {content(item)}
                    </div>
                ))}
            </div>
        );
    }
}
