import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Testing function heroes", () => {
  test("should return heroe given an ID", () => {
    const idErroneo = 100;
    const idValido = 1;
    const heroe = getHeroeById(idValido);

    console.log(heroe);

    const heroeData = heroes.find((h) => h.id === idValido);
    expect(heroe).toEqual(heroeData);
  });
});

// find?, filter
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('Marvel') );
