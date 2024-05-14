import { lazy } from "react";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
const AccessLevel = lazy(()=>import("../pages/AccessLevel/index"))

export const publicRouteList = [
    {
        path: "/",
        element: Login,
        title: "Login"
    },
    {
        path: "/forgot-password",
        element: ForgotPassword,
        title: "ForgotPassword",
    },
]

export const privateRouteList = [
    {
        path: "/config/access-level",
        element: AccessLevel,
        title: "Config",
        subTitle: "Access Level"
    },
]