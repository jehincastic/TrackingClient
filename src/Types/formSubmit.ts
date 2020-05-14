export type Login = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type Signup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  getEmails: boolean;
};

export type Response = {
  status: string;
  data: string;
};
