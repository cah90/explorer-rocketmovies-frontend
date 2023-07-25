import styled from "styled-components"

export const Container = styled.button`
	background: none;
	border: none;

	color: ${(props) => props.theme.COLORS.PINK};
	font-family: "Roboto Slab", serif;
	font-size: 1.4rem;
	font-weight: 400;

	display: flex;
	align-items: center;
	gap: 0.8rem;

	@media (min-width: 768px) {
		font-size: 1.6rem;
	}
`
