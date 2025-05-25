
import { LogData } from './types.ts';

export const log = (level: 'info' | 'warn' | 'error', message: string, data?: LogData) => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    level: level.toUpperCase(),
    message,
    ...(data && { data })
  };
  console.log(JSON.stringify(logEntry));
};
