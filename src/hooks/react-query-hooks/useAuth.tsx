import { forgotPassword, login, registerAdmin, resendVerificationToken, resetPassword, verifyEmail } from "@/services/auth-service"
import { useMutation } from "@tanstack/react-query"

const authQueryKeys = {
    login: 'login',
    registerAdmin: 'registerAdmin',
    requestPasswordReset: 'requestPasswordReset',
    resetPassword: 'resetPassword',
    verifyEmail: 'verifyEmail',
    resendToken: 'resendToken'
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

const useResendOTP = () => {
    return useMutation({
        mutationFn: resendVerificationToken,
        mutationKey: [authQueryKeys.resendToken]
    })
}

export {authQueryKeys, UseLogin, UseRegisterAdmin, useRequestResetPassword, useResetPassword, useVerifyOTP, useResendOTP}