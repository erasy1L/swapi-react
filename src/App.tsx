import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { Root } from "./pages/Root";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { People } from "./pages/People";
import { Planets } from "./pages/Planets";
import { Films } from "./pages/Films";
import {
    listPeople,
    getPersonById,
    personFieldConfig,
} from "./entities/person";
import {
    getPlanetById,
    listPlanets,
    planetFieldConfigs,
} from "./entities/planet";
import { filmFieldConfigs, getFilmById, listFilms } from "./entities/film";
import { EntityForm } from "./features/entity-form/ui";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "login",
                element: <Login />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "people",
                children: [
                    {
                        index: true,
                        element: <People />,
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const page = url.searchParams.get("page") || "1";
                            return await listPeople(page);
                        },
                    },
                    {
                        path: ":personId",
                        element: (
                            <EntityForm fieldConfigs={personFieldConfig} />
                        ),
                        loader: async ({ params }) => {
                            return await getPersonById(params.personId!);
                        },
                    },
                ],
            },
            {
                path: "planets",
                children: [
                    {
                        index: true,
                        element: <Planets />,
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const page = url.searchParams.get("page") || "1";
                            return await listPlanets(page);
                        },
                    },
                    {
                        path: ":planetId",
                        element: (
                            <EntityForm fieldConfigs={planetFieldConfigs} />
                        ),
                        loader: async ({ params }) => {
                            return await getPlanetById(params.planetId!);
                        },
                    },
                ],
            },
            {
                path: "films",
                children: [
                    {
                        index: true,
                        element: <Films />,
                        loader: async ({ request }) => {
                            const url = new URL(request.url);
                            const page = url.searchParams.get("page") || "1";
                            return await listFilms(page);
                        },
                    },
                    {
                        path: ":filmId",
                        element: <EntityForm fieldConfigs={filmFieldConfigs} />,
                        loader: async ({ params }) => {
                            return await getFilmById(params.filmId!);
                        },
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
