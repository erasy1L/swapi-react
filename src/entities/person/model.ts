export interface Person {
    name: string;
    gender: string;
    height: number;
    hair_color: string;

    url: string;
}

export interface PersonResponse {
    count: number;
    previous: string;
    next: string;
    results: Person[];
}

export const personFieldConfig: Array<{
    name: keyof Person;
    label: string;
    placeholder: string;
    type: string;
}> = [
    { name: "name", label: "Name", placeholder: "Enter name", type: "string" },
    {
        name: "gender",
        label: "Gender",
        placeholder: "Enter gender",
        type: "string",
    },
    {
        name: "height",
        label: "Height",
        placeholder: "Enter height",
        type: "number",
    },
    {
        name: "hair_color",
        label: "Hair color",
        placeholder: "Enter hair color",
        type: "string",
    },
];
