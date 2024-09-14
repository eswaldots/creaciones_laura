export interface State {
  errors: {
    firstName?: string[];
    lastName?: string[];
    address?: string[];
    email?: string[];
    phone?: string[];
  };
  message: string;
  status?: string | undefined;
}
