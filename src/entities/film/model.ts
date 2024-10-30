export interface Film {
    title: string;
    director: string;
    producer: string;
    release_date: string;

    url: string;
}

export interface FilmResponse {
    count: number;
    previous: string;
    next: string;
    results: Film[];
}

export const filmFieldConfigs: Array<{
    name: keyof Film;
    label: string;
    placeholder: string;
    type: string;
}> = [
    {
        name: "title",
        label: "Title",
        placeholder: "Enter title",
        type: "string",
    },
    {
        name: "director",
        label: "Director",
        placeholder: "Enter director",
        type: "string",
    },
    {
        name: "producer",
        label: "Producer",
        placeholder: "Enter producer",
        type: "string",
    },
    {
        name: "release_date",
        label: "Release date",
        placeholder: "Enter release date",
        type: "string",
    },
];
