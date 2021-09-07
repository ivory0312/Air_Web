import { Stream } from "stream";

export interface IMainListTypes {
  rank: string;
  name: string;
  week: number[];
  time: string;
  isMine?: boolean;
}