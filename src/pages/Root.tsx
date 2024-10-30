import { Outlet } from "react-router-dom";

export const Root = () => {
    return (
        <div className="h-full w-full flex flex-col justify-center">
            <Outlet />
        </div>
    );
};
