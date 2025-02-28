import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postComponentState {
    showPostForm: boolean,
    mode: string
}
interface payload {
    showPostForm:boolean,
    mode: string
}

const initialState: postComponentState = {
    showPostForm:false,
    mode:'create'
}

const postComponentSlice = createSlice({
    name:'post_component',
    initialState,
    reducers:{
        updateMode:(state, action:PayloadAction<payload>) =>{
            state.showPostForm = action.payload.showPostForm
            state.mode = action.payload.mode
        },
        
    }
});

export const {updateMode} = postComponentSlice.actions
export default postComponentSlice.reducer;