import { createSlice } from "@reduxjs/toolkit";
import { Slide, toast } from "react-toastify";


const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {

            const alreadyExists = state.items.find(
                item => item.id === action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }

        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))

        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
        },
        addedToast: () => {
            toast.success('Added to Collection!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        removeToast: () => {
            toast.error('Removed from Collection!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        extraReducers: (builder) => {
            builder
                .addCase(saveMediaToUserCollection.pending, (state) => {
                    state.loading = true;
                })
                .addCase(saveMediaToUserCollection.fulfilled, (state, action) => {
                    state.loading = false;
                    console.log("Media saved successfully");
                })
                .addCase(saveMediaToUserCollection.rejected, (state, action) => {
                    state.loading = false;
                    console.log("Save failed:", action.payload);
                });
        },
    },
})

export const {
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast,
    extraReducers } =
    collectionSlice.actions

export default collectionSlice.reducer;