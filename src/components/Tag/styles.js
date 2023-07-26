import { styled } from "styled-components"

export const Container = styled.span`
	color: ${(props) => props.theme.COLORS.GRAY_100};
	text-align: center;
	font-family: "Roboto", sans-serif;
	font-size: 1.2rem;
	font-weight: 400;

	background-color: ${(props) => props.theme.COLORS.DARK_700};
	padding: 0.8rem 1.6rem;
	border-radius: 0.8rem;
`
