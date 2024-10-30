export const getPersonById = async (personId: string) => {
    const resp = await fetch(`https://swapi.dev/api/people/${personId}`);
    return await resp.json();
};

export const listPeople = async (page: string) => {
    const resp = await fetch(`https://swapi.dev/api/people/?page=${page}`);

    return await resp.json();
};
