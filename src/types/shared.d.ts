
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    itemsPerPage: number
    onPageChange: (page: number) => void;
}

interface LoaderProps {
    alwaysTrue?: boolean
}

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    name: string;
    error?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface DropzoneProps {
    error: string
    getFile: (file: File) => void
    image?: string
}

interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    width?: string
    type?: 'submit' | 'button'
    btnType?: string
}

interface AlertModel { state: AlertProps }

interface NotFoundProps {message?: string}