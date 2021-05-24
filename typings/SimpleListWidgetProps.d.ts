/**
 * This file was generated from SimpleListWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { EditableValue, ListValue, ListWidgetValue } from "mendix";

export interface SimpleListWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    ds: ListValue;
    content: ListWidgetValue;
    selectedItemGuidAttr?: EditableValue<string>;
    scrollIntoViewGuidAttr?: EditableValue<string>;
    scrollIntoViewDelay: number;
}

export interface SimpleListWidgetPreviewProps {
    class: string;
    style: string;
    ds: {} | null;
    content: { widgetCount: number; renderer: ComponentType<{caption?: string}> };
    selectedItemGuidAttr: string;
    scrollIntoViewGuidAttr: string;
    scrollIntoViewDelay: number | null;
}
