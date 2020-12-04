import "@testing-library/jest-dom";
const { getSaludo } = require("../../base/02-template-string");

describe("Testing 02-template-string.js", () => {
  test('getSaludo should return "Hola + {nombre}', () => {
    const nombre = "Fernando";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });

  test('getSaludo should return "Hola Carlos" if not value is given', () => {
    const nombre = getSaludo();
    expect(nombre).toBe("Hola Carlos");
  });
});
