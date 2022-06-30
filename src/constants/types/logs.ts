import { ReactNode } from 'react';

import { Metrics } from './metrics';

export declare namespace Logs {
  export interface Log {
    id: number;
    timestamp: string;
    pressure: number;
    temperature: number;
    humidity: number;
  }

  export interface LogsProviderProps {
    children: ReactNode;
  }

  export interface LogsContextData {
    id: number;
    name: string;
    logs: Log[];
  }
}

export interface MeasurementsProviderProps {
  children: ReactNode;
}

export interface SensorData {
  id: number;
  metrics: Metrics.MetricsList;
  logs: Logs.Log[];
  created_at: string;
  updated_at: string;
  name: string;
  app_eui: string;
  dev_eui: string;
}

export interface MeasurementsContextData {
  measurements: SensorData;
}
