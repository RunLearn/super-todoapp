import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';

export interface NavState {
    menuIndex?: number;
}

const initialState: NavState = {
    menuIndex: 1
};

const reducers = {
    setMenu: (state:NavState, action: PayloadAction<number>) => {
        state.menuIndex = action.payload
    },
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers
})

export const { setMenu } = navSlice.actions;

export const selectNav = (state: RootState) => state.nav;

export default navSlice.reducer;
