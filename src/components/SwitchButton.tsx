import React from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)`
    color: white;
`;

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; 
`;

const SwitchButton = ({ setUnits }: { setUnits: React.Dispatch<React.SetStateAction<string>> }) => {

    // Change the units of the temperature
    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setUnits("metric");
        } else {
            setUnits("imperial");
        }
    };

    return (
        <Div>
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <StyledTypography>Fahrenheit</StyledTypography>
                <Switch defaultChecked onChange={handleChange} />
                <StyledTypography>Celsius</StyledTypography>
            </Stack>
        </Div>
    );
}

export default SwitchButton;