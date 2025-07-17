import { axiosClient } from "./axiosClient";

export interface LoginInput{
    email: string;
    password: string;
}

export interface AdminRegistrationInput{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    contact?: string
}

export interface VerifyEmailInput{
    token: string
}

export interface ForgotPasswordInput{
    email: string;
    baseResetURL: string;
}

export interface ResetPasswordInput{
    token: string;
    passwordInfo: {
        password: string;
        confirmPassword: string
    }
}

const login = (data: LoginInput) => {
    return axiosClient.post('/auth/login', data);
}

const registerAdmin = (data: AdminRegistrationInput) => {
    return axiosClient.post('/auth/signup/admin', data);
}

const verifyEmail = (data: VerifyEmailInput) => {
    return axiosClient.post('/auth/verify-email', data);
}

const resendVerificationToken = () => {
    return axiosClient.post('/auth/resend-token', null);
}

const forgotPassword = (data: ForgotPasswordInput) => {
    return axiosClient.post('/auth/forgot-password', data);
}

const resetPassword = (data: ResetPasswordInput) => {
    return axiosClient.post(`/auth/reset-password/${data.token}`, data.passwordInfo);
}


export {login, registerAdmin, verifyEmail, resendVerificationToken, forgotPassword, resetPassword}