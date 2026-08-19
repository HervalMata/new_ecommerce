import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api from "../../api/api";
import {jwtDecode} from "jwt-decode";

export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        console.log(info);
        try {
            const { data } = await api.post('/admin/login', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const seller_register = createAsyncThunk(
    'auth/seller_register',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log(info);
            const { data } = await api.post('/seller_register', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const seller_login = createAsyncThunk(
    'auth/seller_login',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log(info);
            const { data } = await api.post('/seller_login', info, {withCredentials: true});
            localStorage.setItem('accessToken', data.token)
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

export const get_user_info = createAsyncThunk(
    'auth/get_user_info',
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/get-user', undefined, {withCredentials: true});
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const returnRole = (token) => {
    if (token) {
        const decodedToken = jwtDecode(token);
        const expireTime = new Date(decodedToken.exp * 1000);
        if (expireTime < new Date()) {
            localStorage.removeItem('accessToken');
            return ''
        } else {
            return decodedToken.role
        }
    } else {
        localStorage.removeItem('accessToken');
        return ''
    }
}

export const profile_image_upload = createAsyncThunk(
    'auth/profile_image_upload',
    async (image, {rejectWithValue, fulfillWithValue}) => {
        try {
            const { data } = await api.post('/profile-image-upload', image, {withCredentials: true});
            return fulfillWithValue(data)
        } catch (error) {
            const data = error?.response?.data;
            return rejectWithValue({error: data?.error ?? data?.message ?? error?.message ?? "Request failed"});
        }
    }
)

export const profile_info_add = createAsyncThunk(
    'auth/profile_info_add',
    async (info, {rejectWithValue, fulfillWithValue}) => {
        try {
            const { data } = await api.post('/profile-info-add', info, {withCredentials: true});
            return fulfillWithValue(data)
        } catch (error) {
            const data = error?.response?.data;
            return rejectWithValue({error: data?.error ?? data?.message ?? error?.message ?? "Request failed"});
        }
    }
)

export const authReducer = createSlice({
    name: "auth",
    initialState: {
        successMessage: "",
        errorMessage: "",
        loader: false,
        userInfo: '',
        role: returnRole(localStorage.getItem('accessToken')),
        token: localStorage.getItem('accessToken'),
    },
    reducers: {
        messageClear: (state, _) => {
            state.errorMessage = "";
            state.successMessage = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(admin_login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(admin_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(admin_login.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })
            .addCase(seller_register.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_register.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_register.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })
            .addCase(seller_login.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(seller_login.rejected, (state, { payload }) => {
                state.loader = false;
                state.errorMessage = payload.error;
            })
            .addCase(seller_login.fulfilled, (state, { payload }) => {
                state.loader = true;
                state.successMessage = payload.message;
                state.token = payload.token;
                state.role = returnRole(payload.token);
            })
            .addCase(get_user_info.fulfilled, (state, { payload }) => {
                state.loader = true;
                state.userInfo = payload.userInfo;
            })
            .addCase(profile_image_upload.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(profile_image_upload.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.userInfo = payload.userInfo;
            })
            .addCase(profile_info_add.pending, (state, { payload }) => {
                state.loader = true;
            })
            .addCase(profile_info_add.fulfilled, (state, { payload }) => {
                state.loader = false;
                state.successMessage = payload.message;
                state.userInfo = payload.userInfo;
            })
    }
})



export const {messageClear} = authReducer.actions
export default authReducer.reducer
