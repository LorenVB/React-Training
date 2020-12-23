const { getGifs } = require("../../helpers/getGifs")

describe('Testing getGifs Fetch', () => {
    
    it('should return 10 items', async()=>{
        
        const gifs= await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    })
    it('should return 0 items', async()=>{
        
        const gifs= await getGifs('');

        expect(gifs.length).toBe(0);

    })
})
