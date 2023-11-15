import { Dispatch } from "react";
import { AuthAction } from "./AuthProvider";
import React from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
