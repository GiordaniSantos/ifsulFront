import api from "@/Services/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    fotoDePerfilUrl: string;
    id: string;
    matricula: string;
    nome: string;
    usuarioTipo: string;
}

interface AuthState {
    user: User;
    token: string | null
}

const initialState: AuthState = {
    user: {
        email: "",
        fotoDePerfilUrl: "",
        id: "",
        matricula: "",
        nome: "",
        usuarioTipo: ""
    },
    token: null
}

function logout(state: AuthState) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return initialState;
}

function login(state: AuthState, action: PayloadAction<{user: User; token: string}>) {
    const { user, token } = action.payload;

    state.user = user;
    state.token = token;

    api.defaults.headers.Authorization = `Bearer ${token}`
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
}

function verifyUserLogged(state: AuthState) {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
        const parsedUser = JSON.parse(user);
        state.user = parsedUser ;
        state.token = token;

        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout,
        login,
        verifyUserLogged
    }
})

export const { reducer: authReducer, actions } = authSlice;