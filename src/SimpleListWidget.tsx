import React, { Component, ReactNode, createElement } from "react";
import { ValueStatus } from "mendix";

import { SimpleListWidgetContainerProps } from "../typings/SimpleListWidgetProps";

import "./ui/SimpleListWidget.css";
import { SimpleListItem } from "./components/SimpleListItem";

export default class SimpleListWidget extends Component<SimpleListWidgetContainerProps> {
    private itemRef = React.createRef<HTMLDivElement>();

    // Depending on whether attribute is set and has a value, we can get an actual value, null or undefined so allow all.
    private previousItemGuid: string | undefined | null = null;

    render(): ReactNode {
        const { ds, content, scrollIntoViewGuidAttr, selectedItemGuidAttr } = this.props;
        if (!ds || ds.status !== ValueStatus.Available || !ds.items) {
            return null;
        }
        const containerClassName = "simplelistwidget " + this.props.class;
        const selectedItemGuid = selectedItemGuidAttr?.value;
        const scrollIntoViewGuid = scrollIntoViewGuidAttr?.value;
        let isSelected = false;
        const itemArray = ds.items.map(item => {
            if (item.id === selectedItemGuid) {
                isSelected = true;
            }

            return (
                <SimpleListItem
                    key={item.id}
                    ref={this.itemRef}
                    item={item}
                    selectedItemGuidAttr={selectedItemGuidAttr}
                    content={content}
                />
            );
        });
        if (isSelected && scrollIntoViewGuid && scrollIntoViewGuid !== this.previousItemGuid) {
            // We use a separate attribute for the scroll into view functionality because scrollIntoView will also scroll when the item is already visible.
            // So when the user clicks it, the scroll position is adjusted to make the item appear at the top of the scroll area. Really annoying.
            this.previousItemGuid = scrollIntoViewGuid;
            // console.info("SimpleListWidget new selection");
            let scrollIntoViewDelay = this.props.scrollIntoViewDelay;
            if (scrollIntoViewDelay < 0) {
                scrollIntoViewDelay = 0;
            }
            setTimeout(() => {
                if (this.itemRef.current) {
                    this.itemRef.current.scrollIntoView();
                }
            }, scrollIntoViewDelay);
        }
        return <div className={containerClassName}>{itemArray}</div>;
    }
}
