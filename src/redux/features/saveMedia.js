import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveMedia } from "../../api/mediaApi";

export const saveMediaToUserCollection = createAsyncThunk(
    "collection/saveMedia",
    async (mediaItem, { getState, rejectWithValue }) => {

        const token = getState().auth.token;

        if (!token) {
            return rejectWithValue({
                message: "Login required",
                type: "AUTH_REQUIRED"
            });
        }

        try {
            const response = await saveMedia(mediaItem, token);
            return response;
        } catch (error) {
            return rejectWithValue(err.response?.data || err.message);
        }
    }
);
