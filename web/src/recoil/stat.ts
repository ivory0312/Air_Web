import moment from "moment";
import { atom } from "recoil";
import { IDateDataTypes, IStatDateTypes } from "types/stat.types";

export const activeTabState = atom<number>({
  key: "activeTabState",
  default: 0,
});

export const statDate: IStatDateTypes = {
  activeDate: moment().format("YYYY.MM.DD"),
  dateArray: moment().format("YYYY.MM.DD").split("."),
};

export const statDateState = atom<IStatDateTypes>({
  key: "statDateState",
  default: statDate,
});

export const dateData: IDateDataTypes = {
  startDate: "",
  endDate: "",
};
export const dateDataState = atom<IDateDataTypes>({
  key: "dateDataState",
  default: dateData,
});
