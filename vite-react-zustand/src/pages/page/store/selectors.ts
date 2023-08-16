import { MyPageState } from "./initialState"

export const mergeFooBarSelector = (state: MyPageState) => {
  return state.foo + state.bar
}
