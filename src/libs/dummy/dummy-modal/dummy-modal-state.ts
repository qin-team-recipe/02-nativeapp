import { atom } from "recoil"

export const ModalVisibilityState = atom<boolean>({
  key: "isVisible",
  default: false,
})
