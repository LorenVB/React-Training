import React from "react";
import CounterApp from "../CounterApp";
const { shallow } = require("enzyme");

describe("Testing CounterApp />", () => {
    let wrapper;

    beforeEach(()=>{
         wrapper = shallow( < CounterApp / > );
    })

            test("should return <CounterApp /> correctly", () => {
               
                expect(wrapper).toMatchSnapshot();
            });

            test("should return default value 100", () => {
                    const wrapper = shallow( < CounterApp value = { 100 }
                        />);
                        const counterText = wrapper.find("h2").text(); 
                        
                        expect(counterText).toBe('100');
                    });

            test('should increment with +1 button', () => {
                wrapper.find('button').at(0).simulate('click');

                const counterText= wrapper.find('h2').text().trim();

                expect(counterText).toBe('11');
               
            })
            test('should increment with -1 button', () => {
                wrapper.find('button').at(2).simulate('click');
                const counterText= wrapper.find('h2').text().trim();

                expect(counterText).toBe('9');
               
            })

            test('should reset value to 10', () => {
              
                wrapper.find('button').at(0).simulate('click');
                wrapper.find('button').at(1).simulate('click');

                const counterText= wrapper.find('h2').text().trim();
                expect(counterText).toBe('10');
            })
            
            
            });