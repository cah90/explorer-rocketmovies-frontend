import { styled } from "styled-components"

export const Container = styled.button`
	background-color: ${(props) => props.theme.COLORS.PINK};

	border: none;
	border-radius: 10px;

	padding: 1.4rem 2rem;

	font-size: 1.4rem;
	font-family: "Roboto Slab", serif;
	font-weight: 400;
	line-height: normal;
	color: ${(props) => props.theme.COLORS.DARK_500};

	display: flex;
	align-items: center;
	gap: 0.8rem;

	> svg {
		color: ${(props) => props.theme.COLORS.DARK_500};
	}

	@media (min-width: 768px) {
		font-size: 1.6rem;
		padding: 1.6rem 3.2rem;
	}
`
