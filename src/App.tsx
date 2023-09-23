import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const router = createBrowserRouter([
    {
        path: "/",
        Component: lazy(() => import("./Layout/Root")),
        children: [
            {
                path: "/",
                Component: lazy(() => import("./Components/Counter")),
            },
            {
                path: "/users",
                Component: lazy(() => import("./Pages/PageOne")),
            },
            {
                path: "/users/:id",
                Component: lazy(() => import("./Pages/PageTwo")),
            },
        ],
    },
]);

function App() {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center min-h-screen p-5 bg-white min-w-screen">
                    <div className="flex space-x-2 animate-pulse">
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                        <div className="w-3 h-3 bg-black rounded-full"></div>
                    </div>
                </div>
            }
        >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
