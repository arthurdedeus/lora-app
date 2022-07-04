import { Logs } from '../constants/types';

export const getLogs = (payload: Logs.Log[], type: string) => {
  if (!payload) return [];
  switch (type) {
    case 'pressure':
      return payload.map(log => log.pressure);
    case 'temperature':
      return payload.map(log => log.temperature);
    case 'humidity':
      return payload.map(log => log.humidity);
    default:
      return [];
  }
};
