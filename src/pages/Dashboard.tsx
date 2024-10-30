import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div className="mx-auto w-[642px] h-full md:w-[1042px] flex flex-col justify-center items-center">
            <p className="text-6xl">Browse the Star Wars data</p>
            <ul className="mt-6 menu bg-slate-50 rounded-box mx-auto menu-horizontal">
                <li>
                    <Link to="people">People</Link>
                </li>
                <li>
                    <Link to="planets">Planets</Link>
                </li>
                <li>
                    <Link to="films">Films</Link>
                </li>
            </ul>
        </div>
    );
};
