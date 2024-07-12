export type TApiResponse<T> = {
  message: string;
  result: boolean;
  data: T;
};
export interface User {
  userId: 0;
  userName: string;
  role: string;
  password: string;
  mobileNo: string;
  emailId: string;
  restaurantId: 0;
}
 
export type loginUser = {
  userName: string;
  password: string;
};
