// import PrivateLayout from "../layout/PrivateLayout";
// import PublicLayout from "../layout/PublicLayout";
import { memo } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { getCookie } from "../utils";
import PrivateLayout from "../Layout/PrivateLayout";

const PrivateRouter = ({ title, layout, isBack, className }) => {
    const auth = getCookie("userDetails");
    const location = useLocation();
    const loggedRole = auth?.role || auth?.userObj?.role;
    if (auth) {
        return (
            <>
                <Wrapper
                    layout={layout}
                    title={title}
                    className={className}
                    isBack={isBack}
                />
            </>
        );
    } else {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
};

const Wrapper = ({ title, layout, ...rest }) => (
    <HelmetProvider context={{}}>
        <PrivateLayout title={title}>
            <Outlet />
        </PrivateLayout>
    </HelmetProvider>
);

export default memo(PrivateRouter);
