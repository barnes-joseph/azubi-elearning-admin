import { forgotPassword, login, registerAdmin, resetPassword, verifyEmail } from "@/services/auth-service"
import { useMutation } from "@tanstack/react-query"

const authQueryKeys = {
    login: 'login',
    registerAdmin: 'registerAdmin',
    requestPasswordReset: 'requestPasswordReset',
    resetPassword: 'resetPassword',
    verifyEmail: 'verifyEmail'
}

const UseLogin = () => {
    return useMutation({
        mutationFn: login,
        mutationKey: [authQueryKeys.login]
    })
}

const UseRegisterAdmin = () => {
    return useMutation({
        mutationFn: registerAdmin,
        mutationKey: [authQueryKeys.registerAdmin]
    })
}

const useRequestResetPassword = () => {
    return useMutation({
        mutationFn: forgotPassword,
        mutationKey: [authQueryKeys.requestPasswordReset]
    })
}

const useResetPassword = () => {
    return useMutation({
        mutationFn: resetPassword,
        mutationKey: [authQueryKeys.resetPassword]
    })
}

const useVerifyOTP = () => {
    return useMutation({
        mutationFn: verifyEmail,
        mutationKey: [authQueryKeys.verifyEmail]
    })
}

export {authQueryKeys, UseLogin, UseRegisterAdmin, useRequestResetPassword, useResetPassword, useVerifyOTP}