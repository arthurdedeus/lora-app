import React, { createContext, useContext, useEffect, useState } from 'react';
import { Logs } from '../constants/types';
import { api } from '../services/api';

const LogsContext = createContext<Logs.Log[]>({} as Logs.Log[]);

export function LogsProvider({ children }: Logs.LogsProviderProps) {
  const [logs, setLogs] = useState<Logs.Log[]>();

  useEffect(() => {
    api.get('/sensors/2/logs/').then(response => {
      setLogs(response.data);
    });
  }, []);

  return <LogsContext.Provider value={logs}>{children}</LogsContext.Provider>;
}

export function useLogs() {
  const context = useContext(LogsContext);
  return context;
}
