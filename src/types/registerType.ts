export interface RegisterType {
  firstName: string;
  userName: string;
  email: string;
  password: string;
  profileImage?: string;
  isActive?: boolean;
  externalProvider?: boolean;
  provider?: string;
}
