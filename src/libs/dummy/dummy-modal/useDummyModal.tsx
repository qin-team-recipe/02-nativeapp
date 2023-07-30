import { SetterOrUpdater, useRecoilState } from "recoil"

import { ModalVisibilityState } from "./dummy-modal-state"

type Response = [boolean, SetterOrUpdater<boolean>]

export const useDummyModal = (): Response => {
  const [isVisible, setIsVisible] = useRecoilState(ModalVisibilityState)

  return [isVisible, setIsVisible]
}
