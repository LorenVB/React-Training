const { renderHook } = require('@testing-library/react-hooks');
const { useFetchGifs } = require('../../hooks/useFetchGifs');

describe('Testing customHook useFetchGifs', async() => {
  test('should return initial state', () => {

    const {result}= renderHook( ()=> useFetchGifs( 'One Punch' ));
    const {data, loading}= result.current;
 
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return an images array and a false loading', async() => {
      
    const {result, waitForNextUpdate}= renderHook( ()=> useFetchGifs( 'One Punch' ));
    await waitForNextUpdate();
    const {data, loading}= result.current;
    // console.log(resp);
    // const { data: images, loading } = useFetchGifs('One Punch');
    console.log(data, loading);

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  })
  
});
