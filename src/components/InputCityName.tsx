import React from 'react';
import styled from 'styled-components';
import { IoSearchCircleOutline } from "react-icons/io5";
import { Formik, Field, Form } from "formik";

const StyledField = styled(Field)`
    padding: 15px;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: white;
    transition: color 0.3s ease, transform 0.2s ease;
    font-size: 50px; 

    &:hover {
        color: #add8e6;
        transform: scale(1.1);
    }
`;

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const InputCityName = ({ setCityName }: { setCityName: React.Dispatch<React.SetStateAction<string>> }) => {
    return (
        <Div>
            <Formik
                initialValues={{ cityName: ""}}
                onSubmit={async (values) => {
                    setCityName(values.cityName);
                }}
            >
                <StyledForm>
                    <StyledField name="cityName" type="text" placeholder="Entre city name ..."/>
                    <Button type="submit"><IoSearchCircleOutline /></Button>
                </StyledForm>
            </Formik>
        </Div>
    );
}

export default InputCityName;