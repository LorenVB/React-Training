import React from "react";
import { shallow } from "enzyme";
const { default: FirstApp } = require("../FirstApp");

describe("Testing FirstApp", () => {
            // test("should return Hola, soy Goku", () => {
            //         const saludo = "Hola, soy Goku";
            //         const { getByText } = render( < FirstApp saludo = { saludo }
            //             />);

            //             expect(getByText(saludo)).toBeInTheDocument();
            //         });

            test("return <FirstApp /> correctly", () => {
                    const saludo = "Hola, Soy Goku";
                    const wrapper = shallow( < FirstApp saludo = { saludo }
                        / > );

                        expect(wrapper).toMatchSnapshot();
                    });
            });