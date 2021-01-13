import { createElement, ReactElement } from "react";
import { EditableValue, ListWidgetValue, ObjectItem } from "mendix";

export interface SimpleListItemProps {
    item: ObjectItem;
    content: ListWidgetValue;
    selectedItemGuidAttr?: EditableValue<string>;
}

export function SimpleListItem(props: SimpleListItemProps): ReactElement {
    const { content, item, selectedItemGuidAttr } = props;
    const selectedItemGuid = selectedItemGuidAttr?.value;
    const isSelected = item.id === selectedItemGuid;
    const selectedClassName = isSelected ? " simplelistwidget-selected" : "";
    const itemClassName = "simplelistwidget-item" + selectedClassName;
    return (
        <div className={itemClassName} key={item.id}>
            {content(item)}
        </div>
    );
}
