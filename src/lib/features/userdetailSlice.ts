import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserDetailState = {
  fullname: string | null;
  email: string | null;
  phoneNumber: string | null;
};

const initialState: UserDetailState = {
  fullname: "bilal al ghiffari",
  email: "bilalalghiffari53@gmail.com",
  phoneNumber: "0812512731234",
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    selectUser: (state, action: PayloadAction<Partial<UserDetailState>>) => {
      const { email, fullname, phoneNumber } = action.payload;
      state.fullname = fullname ?? state.fullname;
      state.email = email ?? state.email;
      state.phoneNumber = phoneNumber ?? state.phoneNumber;
    },
  },
});

export const { selectUser } = userDetailSlice.actions;
export default userDetailSlice.reducer;
