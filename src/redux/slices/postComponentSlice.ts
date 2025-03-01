import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postComponentState {
    showPostForm: boolean,
    mode: string,
    showCancelUI: boolean
}
interface payload {
    showPostForm:boolean,
    mode: string
}

const initialState: postComponentState = {
    showPostForm:false,
    mode:'create',
    showCancelUI: false
}

const postComponentSlice = createSlice({
    name:'post_component',
    initialState,
    reducers:{
        updateMode:(state, action:PayloadAction<payload>) =>{
            state.showPostForm = action.payload.showPostForm
            state.mode = action.payload.mode
        },
        showCancelUI: (state) =>{
            state.showPostForm = false
        },

    }
});

export const {updateMode, showCancelUI} = postComponentSlice.actions
export default postComponentSlice.reducer;