import { createContext, useState, useContext, useEffect } from "react";
import { RegisterType } from "../types/registerType";
import {
  loginRequest,
  logoutRequest,
  meRequest,
  registerRequest,
} from "../api/auth";
import { clientAxios } from "../config/clientAxios";
import { LoginType } from "../types/loginType";

type contextAth = {
  //auth: boolean;
  //setAuth: (value: boolean) => void;
  //token: string;
  //setToken: (value: string) => void;
  //username: string;
  //setUsername: (value: string) => void;
  singUp: (user: RegisterType) => user;
  singIn: (user: LoginType) => user;
  logout: () => void;
  user: RegisterType | null;
  isAuthenticated: boolean;
  loading: boolean;
  errors: null;
};

type Props = {
  children: React.ReactNode;
};
export const authContext = createContext<contextAth>({
  //auth: false,
  //setAuth: (value: boolean) => {},
  //token: "",
  //setToken: (value: string) => {},
  //username: "",
  //setUsername: (value: string) => {},
  singUp: (user: RegisterType) => user,
  singIn: (user: LoginType) => user,
  logout: () => {},
  user: {
    firstName: "",
    userName: "",
    email: "",
    password: "",
  },
  isAuthenticated: false,
  loading: true,
  errors: null,
});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);

  const singUp = async (user: RegisterType) => {
    try {
      const res = await registerRequest(user);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const singIn = async (user: LoginType) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data.user);
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
    } catch (error: any) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };

  const logout = async () => {
    try {
      // const token = localStorage.getItem("token");
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      //const res = await logoutRequest(config);
      localStorage.removeItem("token");
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
      setUser(null);
    }
  };

  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await meRequest(config);
        setIsAuthenticated(true);
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    };
    authUser();
  }, []);

  return (
    <authContext.Provider
      value={{ singUp, singIn, user, isAuthenticated, loading, errors, logout }}
    >
      {children}
    </authContext.Provider>
  );
};
