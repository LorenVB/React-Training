describe("Testing demo.test.js", () => {
  test("should be equals both strings", () => {
    // 1. Initialation
    const mensaje = "Hola Mundo";

    //2. Action
    const mensaje2 = "Hola Mundo";

    //3. Assert
    expect(mensaje).toBe(mensaje2);
  });
});
