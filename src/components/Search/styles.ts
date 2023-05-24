import styled from "styled-components";

import { COLORS } from "../../constants/colors";

const Container = styled.div
`
width: 773px;
margin-left: 28px;
@media(max-width: 1100px) {
    width: 90%;
    margin-left: 0px;
    margin-top: 18px;
}
`

const Button = styled.button
`
margin-right: 70px;
padding: 5px 20px;
border-radius: 8px;
background-color: ${COLORS.BRIGHT_BLUE};
color: #FFF;
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 21px;
`

export {Button,Container}