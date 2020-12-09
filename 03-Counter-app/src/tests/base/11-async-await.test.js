const { getImagen } = require("../../base/11-async-await")

describe('Testing con async-awayt y Fetch', () => {

    test('should return image url', async() => {
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    })

})