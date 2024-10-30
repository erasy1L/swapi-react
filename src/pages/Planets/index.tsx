import { useLoaderData, useNavigate } from "react-router-dom";
import { Pagination } from "../../features/pagination";
import { planetFieldConfigs, PlanetResponse } from "@/entities/planet";
import { useEffect } from "react";

export const Planets = () => {
    const data = useLoaderData() as PlanetResponse;

    const quantPerPage = 10;

    const totalPages = Math.ceil(data.count / quantPerPage);

    const navigate = useNavigate();

    const handleItemClick = (url: string) => {
        navigate(`${url.split("/").slice(-2)[0]}`);
    };

    useEffect(() => {
        document.title = "Planets";
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 px-12">
            <table className="table">
                <thead>
                    <tr>
                        {planetFieldConfigs.map((p) => (
                            <th key={p.label}>{p.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&>tr:hover]:bg-slate-50">
                    {data.results.map((planet, _) => (
                        <tr
                            key={planet.name}
                            onClick={() => handleItemClick(planet.url)}
                        >
                            <td>{planet.name}</td>
                            <td>{planet.climate}</td>
                            <td>{planet.gravity}</td>
                            <td>{planet.population}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={totalPages} />
        </div>
    );
};
