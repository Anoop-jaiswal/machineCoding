import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Anoop",
  email: "",
  age: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUserName: (state, action) => {
      state.name = action.payload;
    },
    addEmail: (state, action) => {
      state.email = action.payload;
    },
    addAge: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { addUserName, addEmail, addAge } = userSlice.actions;
export default userSlice.reducer;
