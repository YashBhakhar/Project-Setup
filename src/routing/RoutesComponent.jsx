import { memo } from "react";
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate } from "react-router-dom";
import { privateRouteList, publicRouteList } from ".";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

function RoutesComponent() {

    const render = () => {
        return (
            <>
                {/* Private Route List */}
                {privateRouteList.map(
                    ({ title, path, isBack, className = "", layout, element: Element }) => (
                        <Route
                            element={
                                <PrivateRouter
                                    layout={layout}
                                    title={title}
                                    isBack={isBack}
                                    className={className}
                                />
                            }
                        >
                            <Route path={path} element={<Element />} />
                        </Route>
                    )
                )}

                {/* Public Route List  */}
                {publicRouteList.map(({ title, path, element: Element }) => (
                    <Route element={<PublicRouter title={title} />}>
                        <Route path={path} element={<Element />} />
                    </Route>
                ))}

                <Route path={"/*"} element={<>Page </>} />

            </>
        )
    }

    const router = createBrowserRouter(createRoutesFromElements(render()));

    return <RouterProvider router={router} />
}

export default memo(RoutesComponent);
