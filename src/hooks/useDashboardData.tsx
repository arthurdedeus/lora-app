import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dashboard, Logs } from '../constants/types';
import { api } from '../services/api';

const DashboardContext = createContext<Dashboard.Data[]>(
  {} as Dashboard.Data[]
);

export function DashboardDataProvider({
  children,
}: Dashboard.DashboardProviderProps) {
  const [data, setData] = useState<Dashboard.Data[]>([]);

  useEffect(() => {
    api.get('/sensors/2/dashboard-data').then(response => {
      setData([
        response.data.temperature,
        response.data.humidity,
        response.data.pressure,
      ]);
    });
  }, []);

  return (
    <DashboardContext.Provider value={data}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboardData() {
  const context = useContext(DashboardContext);
  return context;
}
