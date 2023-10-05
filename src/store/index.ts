import { configureStore} from "@reduxjs/toolkit";



import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ListSlice from "./ListSlice";

 

export const store = configureStore({
  reducer: {
    data: ListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

declare global {
  type RootState = ReturnType<typeof store.getState>;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// const filterData = () => {
//   return data.slice(from, to).filter((item) => {
//     return (
//       item.title.toLowerCase().includes(searchText.toLowerCase()) ||
//       item.body.toLowerCase().includes(searchText.toLowerCase())
//     );
//   });
// };