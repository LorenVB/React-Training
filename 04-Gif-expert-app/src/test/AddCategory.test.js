import React from 'react';
const { shallow } = require("enzyme")
const { AddCategory } = require("../components/AddCategory")


describe('Testing AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=> {
        jest.clearAllMocks();
        wrapper= shallow(<AddCategory setCategories={setCategories}/>)
    })

    it('should shown correctly', ()=>{
        expect(wrapper).toMatchSnapshot();
    
    })

    it('should change the input value', ()=>{
        const input= wrapper.find('input');
        console.log(input);
        const value='Hola Mundo';
        input.simulate('change', {target:{value}});

        expect(wrapper.find('p').text().trim()).toBe(value);
    })

    it('should not post the information on submit',()=>{

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    })

    it('should call setCategories and clean input text', () => {

      
        const valueInput= 'Dragon Ball Z';

        //1.Simulate inputChange
        wrapper.find('input').simulate('change', {target: {valueInput}})
        //2.Simulate submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //3. setCategories must be called
        expect(setCategories).toHaveBeenCalled();
        //4. Value input must be ''
        expect(wrapper.find('input').prop('value')).toBe('');
        

    })
})
