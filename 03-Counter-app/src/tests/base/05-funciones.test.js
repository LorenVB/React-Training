const { getUser, getUsuarioActivo } = require("../../base/05-funciones");

describe("Testing 05-funciones", () => {
  test("should return an object", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  });

  test("should return an object", () => {
    const nombre = "Juan";
    const user = getUsuarioActivo(nombre);

    expect(user).toEqual({
      uid: "ABC567",
      username: "Juan",
    });
  });
});
