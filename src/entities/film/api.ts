export const getFilmById = async (filmId: string) => {
    const resp = await fetch(`https://swapi.dev/api/films/${filmId}`);
    return await resp.json();
};

export const listFilms = async (page: string) => {
    const resp = await fetch(`https://swapi.dev/api/films/?page=${page}`);

    return await resp.json();
};
