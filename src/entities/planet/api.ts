export const getPlanetById = async (planetId: string) => {
    const resp = await fetch(`https://swapi.dev/api/planets/${planetId}`);
    return await resp.json();
};

export const listPlanets = async (page: string) => {
    const resp = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return await resp.json();
};
