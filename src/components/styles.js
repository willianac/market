import { Typography } from "@mui/material";
import styled from "styled-components";

export const CardHeader = styled(Typography) `
    display : flex;
    justify-content : space-between;
    align-items : center;
    > span {
        font-size : 16px;
    }
`

export const CardButtons = styled.div`
    display : flex;
    justify-content : space-around;
    align-items : center;
    align-self : flex-end;
`