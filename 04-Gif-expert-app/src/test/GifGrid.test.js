const { shallow } = require('enzyme');
const { GifGrid } = require('../components/GifGrid');
const { useFetchGifs } = require('../hooks/useFetchGifs');
jest.mock('../hooks/useFetchGifs');

describe('Testing GifGrid component', () => {
  const category = 'Boku';

  it('should display component match', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show items when images loaded by useFetchGifs', () => {

    const gifs = [{
        id:'ABC',
        url: 'https://localhost//cosa.jpg',
        title: 'Cualquier cosa'
    }]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false,
      });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
  });

  });

