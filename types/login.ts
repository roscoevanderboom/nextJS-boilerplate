export interface LoginProps {
    email: string,
    password: string,
}
export interface RegProps extends LoginProps {
    confirm: string,
}