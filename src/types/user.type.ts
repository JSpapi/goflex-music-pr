// !USER TYPE
export interface IUser {
  id: string;
  email: string;
  name: string;
  password: string;
  profile?: string;
  likedSongs?: [];
  likedPlaylists?: [];
  subscribedArtists?: [];
}
// !AUTHORIZATION POST TYPE

export type UserData = Omit<IUser, 'id'>;
// !AUTHORIZATION RESPONSE TYPE
export type LoginResponseData = Omit<IUser, 'password'> & { token: string };

// !LOGIN POST TYPE
export type LoginData = Pick<UserData, 'name' | 'password'>;
// !EMAIL POST TYPE

export interface IEmail {
  name: string;
  email: string;
  text?: string;
  subject?: string | number;
}

// !GENERATE OTP CODE type

export interface IOtpCode {
  code: string;
  email: string;
}
