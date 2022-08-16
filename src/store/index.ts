import { Action, combineReducers, configureStore, Reducer, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import thunk from "redux-thunk";
const initialState = {
  articles: [],
}

const articlesReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PUSH_ARTICLES':
      return { ...state, articles: action.payload}
    default:
      return state
  }
}

export const rootReducer: Reducer = combineReducers({
  articles: articlesReducer
})

export const store = configureStore({
  reducer: rootReducer
});

export type RootStore = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnT = void> = ThunkAction<ReturnT, RootStore, unknown, Action<string>>

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;