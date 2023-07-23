import { styled } from "styled-components"

export const Container = styled.button`
	background-color: ${(props) => props.theme.COLORS.PINK};

	border: none;
	border-radius: 10px;

	padding: 1.6rem;
	width: 25rem;

	font-size: 1.6rem;
	font-weight: 500;
	line-height: normal;
	color: ${(props) => props.theme.COLORS.DARK_500};
`
