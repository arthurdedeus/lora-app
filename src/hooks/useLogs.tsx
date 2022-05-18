import React, { createContext, useContext, useEffect, useState } from 'react';
import { Logs } from '../constants/types';
import { api } from '../services/api';

const LogsContext = createContext<Logs.LogsContextData>(
  {} as Logs.LogsContextData
);

export function LogsProvider({ children }: Logs.LogsProviderProps) {
  const [logs, setLogs] = useState<Logs.LogsContextData>({
    id: 0,
    name: '',
    logs: [],
  });

  useEffect(() => {
    api.get('/sensors/2/logs').then(response => {
      console.log(response);
      setLogs(response.data[0]);
    });
  }, []);

  return <LogsContext.Provider value={logs}>{children}</LogsContext.Provider>;
}

export function useLogs() {
  const context = useContext(LogsContext);
  return context;
}
