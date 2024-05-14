// import Loader from "../layout/Loader";
// import AuthLayout from "../layout/AuthLayout";
import AuthLayout from "../Layout/AuthLayout";
import { getCookie } from "../utils";
import { memo, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";

const PublicRouter = ({ title }) => {

    let redirectPath = "/dashboard";
    const auth = getCookie("userDetails");
    
    return !auth ? (
            // <HelmetProvider context={{}}>
            <>
                {/* <title>{title}</title> */}
                <div>
                    <div className="flex h-screen">
                        <AuthLayout >
                                <Outlet />
                        </AuthLayout>
                    </div>
                </div>
            </>
            // </HelmetProvider>
    ) : (
        <Navigate to={redirectPath} replace />
    );
};

export default memo(PublicRouter);
