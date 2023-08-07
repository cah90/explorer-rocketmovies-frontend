import styled from "styled-components"

export const Container = styled.textarea`
	width: 100%;
	height: 27.4rem;

	background-color: ${(props) => props.theme.COLORS.DARK_600};
	color: ${(props) => props.theme.COLORS.WHITE};

	font-family: "Roboto", sans-serif;

	border: none;
	resize: none;

	margin-bottom: 0.8rem;
	border-radius: 1rem;
	padding: 1.6rem;

	&::placeholder {
		color: ${(props) => props.theme.COLORS.GRAY_800};
	}
`
