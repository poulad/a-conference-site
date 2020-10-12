export interface ErrorState {
  hasError: boolean;
  error?: Error;
  message?: string;
  code?: string;
}
