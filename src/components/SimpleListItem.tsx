import React, { createElement, ReactElement } from "react";
import { EditableValue, ListWidgetValue, ObjectItem } from "mendix";

export interface SimpleListItemProps {
    item: ObjectItem;
    content: ListWidgetValue;
    selectedItemGuidAttr?: EditableValue<string>;
}

export const SimpleListItem = React.forwardRef<HTMLDivElement, SimpleListItemProps>((props, ref): ReactElement => {
    const { content, item, selectedItemGuidAttr } = props;
    const selectedItemGuid = selectedItemGuidAttr?.value;
    const isSelected = item.id === selectedItemGuid;
    const selectedClassName = isSelected ? " simplelistwidget-selected" : "";
    const itemClassName = "simplelistwidget-item" + selectedClassName;
    return (
        <div ref={isSelected ? ref : undefined} className={itemClassName} key={item.id}>
            {content.get(item)}
        </div>
    );
});
