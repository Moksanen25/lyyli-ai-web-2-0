
export interface RequestData {
  threadId?: string;
  message?: string;
  runId?: string;
}

export interface ValidatedRequest {
  action: string;
  data?: RequestData;
}

export interface LogData {
  [key: string]: any;
}
