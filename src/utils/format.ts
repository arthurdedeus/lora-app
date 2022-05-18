export const formatMetric = (type: string, metric: number) => {
  switch (type) {
    case 'temperature':
      return `${metric.toFixed(1)}°C`;
    case 'pressure':
      return `${metric.toFixed(1)}hPa`;
    case 'humidity':
      return `${metric.toFixed(1)}%`;
  }
};
