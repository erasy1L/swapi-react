import { useLoaderData, useNavigate } from "react-router-dom";
import { Pagination } from "@/features/pagination";
import { useEffect } from "react";
import { filmFieldConfigs, FilmResponse } from "@/entities/film/model";

export const Films = () => {
    const data = useLoaderData() as FilmResponse;

    const quantPerPage = 10;

    const totalPages = Math.ceil(data.count / quantPerPage);

    const navigate = useNavigate();

    const handleItemClick = (url: string) => {
        navigate(`${url.split("/").slice(-2)[0]}`);
    };

    useEffect(() => {
        document.title = "Films";
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 px-12">
            <table className="table">
                <thead>
                    <tr>
                        {filmFieldConfigs.map((f) => (
                            <th key={f.label}>{f.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&>tr:hover]:bg-slate-50">
                    {data.results.map((film, _) => (
                        <tr
                            key={film.title}
                            onClick={() => handleItemClick(film.url)}
                        >
                            <td>{film.title}</td>
                            <td>{film.director}</td>
                            <td>{film.producer}</td>
                            <td>{film.release_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={totalPages} />
        </div>
    );
};
