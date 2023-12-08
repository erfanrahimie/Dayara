import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    isAuth: false,
    username: '',
    fullName: '',
    email: '',
    image: '',
    createdAt: '',
    rule: '',
    isAdmin: false,
  },
};

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      const {username, fullName, email, image, createdAt, rule} = action.payload;
      let isAdmin = false
      if (rule === 'admin') { isAdmin = true } 
      return {
        value: {
          isAuth: true,
          username: username,
          fullName: fullName,
          email: email,
          image: image,
          createdAt: createdAt,
          rule: rule,
          isAdmin: isAdmin,
        },
      };
    },
    logOut: () => {
      return initialState;
    },
  },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
