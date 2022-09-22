export type SignInPayload = {
  login: string;
  password: string;
};

export type SignUpPayload = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignUpResponse = {
  id: number;
};

export type ServiceIdResponse = {
  service_id: string;
};

export type SignInByOAuth = {
  code: string;
  redirect_uri: string;
};
