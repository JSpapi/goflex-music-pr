export interface ISong {
  id: string;
  name: string;
  thumbnail: string;
  track: string;
  createrId: string;
}

export interface ICreateSong {
  name: string;
  image: string;
  audio: string;
}
