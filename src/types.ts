export interface WidgetState {
  label: string;
  value: 'default' | 'active' | 'disabled' | 'loading' | 'error' | 'selected';
}

export interface PropertyRow {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
}

export interface FlutterWidgetInfo {
  id: string;
  name: string;
  description: string;
  fileLocation: string;
  dartCode: string;
  usageExample: string;
  properties: PropertyRow[];
  customizations: string[];
  statesSupported: ('default' | 'active' | 'disabled' | 'loading' | 'error' | 'selected')[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  widgets: FlutterWidgetInfo[];
}
