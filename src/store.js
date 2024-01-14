import { createStore } from "redux";
import {
  UPDATE_GRIDENT_COLOR_MODE,
  UPDATE_GRIDENT_ANGLE,
  UPDATE_GRIDENT_COLORS,
  UPDATE_GRIDENT_PRECISION,
} from "./constants";

function gradientStore(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }
  switch (action.type) {
    case UPDATE_GRIDENT_COLOR_MODE:
      state.colorMode = action.value;
      return { ...state };
    case UPDATE_GRIDENT_PRECISION:
      state.precision = action.value;
      return { ...state };
    case UPDATE_GRIDENT_ANGLE:
      state.angle = action.value;
      return { ...state };
    case UPDATE_GRIDENT_COLORS:
      state.colors = action.value;
      return { ...state };
    default:
      return state;
  }
}

const store = createStore(gradientStore, {
  colorType: undefined,
  angle: 45,
  precision: 10,
  colors: [
    { color: "#ffffff", enabled: true },
    { color: "#A00000", enabled: true },
    { color: "#222222", enabled: false },
    { color: "#222222", enabled: false },
    { color: "#222222", enabled: false },
  ],
});
export default store;
