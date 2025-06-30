import type { Login } from "./Login"

export type LoginContextType = {
    loginValue : Login | undefined,
    setLoginValue : React.Dispatch<React.SetStateAction<Login | undefined>>
}