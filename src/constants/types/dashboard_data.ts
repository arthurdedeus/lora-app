import { ReactNode } from 'react';

export declare namespace Dashboard {
  export interface Data {
    id: number;
    type: string;
    title: string;
    measure: string;
    date: string;
    time: string;
    icon: string;
  }

  export interface DashboardProviderProps {
    children: ReactNode;
  }

  export interface DashboardContextData {
    temperature: Data;
    humidity: Data;
    pressure: Data;
  }
}
