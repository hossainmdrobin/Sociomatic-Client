import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface accountObj {
    name: string,
    _id: string,
    email: string,
    photo?: string,
    accountType: string,
    tokenExpirres?: Date,
    addedBy: string
};

interface accountsState {
    activeAccount: accountObj | null,
    accounts: Array<accountObj>
}


const initialState: accountsState = {
    activeAccount: null,
    accounts: []
};

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        setAllAccounts: (state, action: PayloadAction<accountObj[]>) => {
            state.accounts = action.payload;
        },

        setActiveAccount: (state, action:PayloadAction<accountObj>)=>{
            state.activeAccount = action.payload;
        }

    },
});

export const {
    setAllAccounts, 
    setActiveAccount
} = accountsSlice.actions;
export default accountsSlice.reducer;
