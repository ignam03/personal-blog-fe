export interface UserType {
  id: number;
  userName: string;
  email: string;
  firstName?: string;
  lastName?: string;
  biography?: string;
  role?: string;
  gender?: string;
  isActive?: string;
  profileImage: string;
  file: File[];
}