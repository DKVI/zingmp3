/** @format */

import appReducer from "./appReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import musicReducer from "./musicReducer";
import persistReducer from "redux-persist/es/persistReducer";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistConfig = {
  ...commonConfig,
  key: "music",
  whitelist: ["curSongId"],
};

const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(persistConfig, musicReducer),
});

export default rootReducer;
