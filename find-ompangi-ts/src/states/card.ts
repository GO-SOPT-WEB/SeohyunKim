import { atom } from "recoil";

export const scoreState = atom<number>({
  key: "scoreState",
  default: 0,
});

export const levelState = atom<string>({
  key: "levelState",
  default: "EASY",
});

export const modalState = atom<boolean>({
  key: "modalState",
  default: false,
});
