type ButtonType = "submit" | "reset" | "button" | undefined

export interface IButton {
    children: React.ReactNode
    className: string
    onClick?: () => void
    disabled?: boolean
    type?: ButtonType

}