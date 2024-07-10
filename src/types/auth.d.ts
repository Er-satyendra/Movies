
interface LoginProps {
    email: string
    password: string
    rememberMe: boolean
}
interface RegistrationProps {
    name: string
    email: string
    password: string
    rememberMe: boolean
}

interface AuthResponseProps extends ResponseWithMessageProps {
    user: {
        id: number,
        name: string,
        email: string,
        updated_at: string,
        created_at: string
    },
    error?: string,
    errors?: Record<string, string>
    token: string
}


interface LoginFormErrors {
    email?: string;
    password?: string;
}

interface RegistrationFormErrors {
    name?: string
    email?: string;
    password?: string;
}

type LoginFormValues = Pick<LoginProps, 'email' | 'password'>
type RegisterFormValues = Pick<RegistrationProps, 'email' | 'password' | 'name'>
