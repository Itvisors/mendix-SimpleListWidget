/**
 * This file was generated from SimpleListWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";
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
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    ds: {} | { caption: string } | { type: string } | null;
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    selectedItemGuidAttr: string;
    scrollIntoViewGuidAttr: string;
    scrollIntoViewDelay: number | null;
}
