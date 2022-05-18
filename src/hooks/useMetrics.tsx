import React, { createContext, useContext, useEffect, useState } from 'react';
import { Dashboard, Metrics } from '../constants/types';
import { api } from '../services/api';

const MetricsContext = createContext<Metrics.MetricsList>(
  {} as Metrics.MetricsList
);

export function MetricsProvider({
  children,
}: Metrics.MetricsContextData) {
  const [metrics, setMetrics] = useState<Metrics.MetricsList>({
    temperature: [],
    humidity: [],
    pressure: [],
  });

  useEffect(() => {
    api.get('/sensors/2/metrics').then(response => {
      setMetrics(response.data);
    });
  }, []);

  return (
    <MetricsContext.Provider value={metrics}>
      {children}
    </MetricsContext.Provider>
  );
}

export function useMetrics() {
  const context = useContext(MetricsContext);
  return context;
}
