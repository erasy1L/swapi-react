import { useLoaderData, useNavigate } from "react-router-dom";
import { personFieldConfig, PersonResponse } from "@/entities/person";
import { Pagination } from "@/features/pagination";
import { useEffect } from "react";

export const People = () => {
    const data = useLoaderData() as PersonResponse;

    const quantPerPage = 10;

    const totalPages = Math.ceil(data.count / quantPerPage);

    const navigate = useNavigate();

    const handleItemClick = (url: string) => {
        navigate(`${url.split("/").slice(-2)[0]}`);
    };

    useEffect(() => {
        document.title = "People";
    }, []);

    return (
        <div className="flex flex-col items-center gap-6 px-12">
            <table className="table">
                <thead>
                    <tr>
                        {personFieldConfig.map((p) => (
                            <th key={p.label}>{p.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&>tr:hover]:bg-slate-50">
                    {data.results.map((person, _) => (
                        <tr
                            key={person.name}
                            onClick={() => handleItemClick(person.url)}
                        >
                            <td>{person.name}</td>
                            <td>{person.gender}</td>
                            <td>{person.height}</td>
                            <td>{person.hair_color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination totalPages={totalPages} />
        </div>
    );
};
