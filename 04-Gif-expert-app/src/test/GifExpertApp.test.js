const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Testing GifExpertApp component', () => {
      const wrapper= shallow(<GifExpertApp />)
    it('should match with the snapshot', () => {
       
        expect(wrapper).toMatchSnapshot();
    })

    it('should match with the initial state', ()=>{
        expect(wrapper.find('GifGrid').prop('category')).toBe('One Punch');
    })
})
