export interface Planet {
    name: string;
    climate: string;
    gravity: string;
    population: number;

    url: string;
}

export interface PlanetResponse {
    count: number;
    previous: string;
    next: string;
    results: Planet[];
}

export const planetFieldConfigs: Array<{
    name: keyof Planet;
    label: string;
    placeholder: string;
    type: string;
}> = [
    {
        name: "name",
        label: "Name",
        placeholder: "Enter name",
        type: "string",
    },
    {
        name: "climate",
        label: "Climate",
        placeholder: "Enter climate",
        type: "string",
    },
    {
        name: "gravity",
        label: "Gravity",
        placeholder: "Enter gravity",
        type: "string",
    },
    {
        name: "population",
        label: "Population",
        placeholder: "Enter population",
        type: "number",
    },
];
