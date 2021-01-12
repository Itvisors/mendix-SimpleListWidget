import { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { SimpleListWidgetContainerProps } from "../typings/SimpleListWidgetProps";

import "./ui/SimpleListWidget.css";

export default class SimpleListWidget extends Component<SimpleListWidgetContainerProps> {
    render(): ReactNode {
        const { ds, content, selectedItemGuidAttr } = this.props;
        if (!ds || ds.status !== ValueStatus.Available || !ds.items) {
            return null;
        }
        const selectedItemGuid = selectedItemGuidAttr?.value;
        const containerClassName = "simplelistwidget " + this.props.class;
        return (
            <div className={containerClassName}>
                {ds.items.map(item => {
                    const selectedClassName = item.id === selectedItemGuid ? " simplelistwidget-selected" : "";
                    const itemClassName = "simplelistwidget-item" + selectedClassName;
                    return (
                        <div className={itemClassName} key={item.id}>
                            {content(item)}
                        </div>
                    );
                })}
            </div>
        );
    }
}
