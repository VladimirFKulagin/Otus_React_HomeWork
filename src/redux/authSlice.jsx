import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
    const savedState = localStorage.getItem('isAuthenticated');
    return {
        isAuthenticated: savedState === 'true',
    };
};

const authSlice = createSlice({
    name: 'auth',
    initialState: getInitialState(),
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            localStorage.setItem('isAuthenticated', 'true'); // Сохраняем в localStorage
        },
        logout: (state) => {
            state.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', 'false'); // Удаляем из localStorage
        },
    },
});

// Экспортируем действия и редюсер
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;