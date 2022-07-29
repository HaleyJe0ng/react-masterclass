import { atom } from "recoil";
import { v1 } from "uuid";

export const isDarkAtom = atom<boolean>({
  key: `isDark/${v1()}`,
  default: true,
});
