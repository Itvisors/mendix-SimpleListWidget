/**
 * This file was generated from SimpleListWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ComponentType, CSSProperties } from "react";
import { ListValue, ListWidgetValue } from "mendix";

export interface SimpleListWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    ds: ListValue;
    content: ListWidgetValue;
}

export interface SimpleListWidgetPreviewProps {
    class: string;
    style: string;
    ds: {} | null;
    content: { widgetCount: number; renderer: ComponentType };
}
