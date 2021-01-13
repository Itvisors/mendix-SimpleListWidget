import { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { SimpleListWidgetContainerProps } from "../typings/SimpleListWidgetProps";

import "./ui/SimpleListWidget.css";
import { SimpleListItem } from "./components/SimpleListItem";

export default class SimpleListWidget extends Component<SimpleListWidgetContainerProps> {
    render(): ReactNode {
        const { ds, content, selectedItemGuidAttr } = this.props;
        if (!ds || ds.status !== ValueStatus.Available || !ds.items) {
            return null;
        }
        const containerClassName = "simplelistwidget " + this.props.class;
        return (
            <div className={containerClassName}>
                {ds.items.map(item => (
                    <SimpleListItem
                        key={item.id}
                        item={item}
                        selectedItemGuidAttr={selectedItemGuidAttr}
                        content={content}
                    />
                ))}
            </div>
        );
    }
}
