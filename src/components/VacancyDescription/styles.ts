import styled from "styled-components";

import { COLORS } from "../../constants/colors";

export const Container = styled.div
`
width: 773px;
margin-top: 20px;
margin-bottom: 50px;
padding: 24px;
background-color: ${COLORS.WHITE};
border-radius: 12px;
border: 1px solid;
border-color: ${COLORS.LIGHT_GREY};
font-size: 16px;
fron-weigh: 700;

& p {
    margin-top: 12px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}

& li {
    margin-left: 24px;
}

@media(max-width: 1100px) {
    width: 100%;
}
`
