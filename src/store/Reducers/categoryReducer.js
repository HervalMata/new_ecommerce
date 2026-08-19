import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";

export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async ({ name, image }, {rejectWithValue, fulfillWithValue}) => {
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("image", image);
            const { data } = await api.post('/category-add', formData, {withCredentials: true});
            return fulfillWithValue(data)
        } catch (error) {
            const data = error?.response?.data;
            return rejectWithValue({error: data?.error ?? data?.message ?? error?.message ?? "Request failed"});
        }
    }
)

export const get_category = createAsyncThunk(
    'category/get_category',
    async ({ perPage, page, searchValue }, {rejectWithValue, fulfillWithValue}) => {
        try {
            const { data } = await api.get(`/category-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, {withCredentials: true});
            return fulfillWithValue(data)
        } catch (error) {
            const data = error?.response?.data;
            return rejectWithValue({error: data?.error ?? data?.message ?? error?.message ?? "Request failed"});
        }
    }
)

export const categoryReducer = createSlice({
    name: "category",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        categories: [],
        totalCategory: 0,
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(categoryAdd.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(categoryAdd.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(categoryAdd.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.categories = [...state.categories,payload.category];
            })
            .addCase(get_category.rejected, (state, { payload, error }) => {
                state.errorMessage = payload?.error ?? error?.message ?? "Request failed";
            })
            .addCase(get_category.fulfilled, (state, { payload }) => {
                state.categories = payload.category;
                state.totalCategory = payload.totalCategory;
            })
    }
})

export const { messageClear, successMessage, loader, categories } = categoryReducer.actions;
export default categoryReducer.reducer;
