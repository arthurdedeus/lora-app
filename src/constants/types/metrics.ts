import { ReactNode } from 'react';

export declare namespace Metrics {
  export interface Metric {
    name: string;
    value: number;
  }

  export interface MetricsList {
    temperature: Metric[];
    pressure: Metric[];
    humidity: Metric[];
  }

  export interface MetricsContextData {
    children: ReactNode;
  }
}
