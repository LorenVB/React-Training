const { shallow } = require("enzyme");
const { default: toJson } = require("enzyme-to-json");
const { GifGridItem } = require("../components/GifGridItem")


describe('should match snapshot', () => {
    
    const title= 'Un titulo';
    const url = 'https://localhost/smth.es'
    const wrapper= shallow(<GifGridItem title={title} url={url}/>);

    it('renders correctly', ()=> {
        
        expect(toJson(wrapper)).toMatchSnapshot();
    })

    it('should have one paragraph with the title', ()=>{

        const p= wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    it('should have similar image to the props url and alt',()=>{
        const img= wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    it('should have the animated fadeIn css class', ()=>{
        const div= wrapper.find('div');
        const className= div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    })
});
