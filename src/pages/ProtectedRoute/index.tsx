import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/store/store";
import { Root } from "../Root";

export const ProtectedRoute = () => {
    const user = useAppSelector((state) => state.user.username);

    if (!user) {
        return (
            <Navigate to="/login" replace state={{ from: location.pathname }} />
        );
    }

    return <Root />;
};
