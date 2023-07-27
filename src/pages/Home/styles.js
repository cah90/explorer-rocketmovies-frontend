import { styled } from "styled-components"

export const Container = styled.div`
	h2 {
		color: ${(props) => props.theme.COLORS.WHITE};
		font-family: "Roboto Slab", serif;
		font-size: 2.2rem;
		font-weight: 400;
	}

	> main {
		padding: 0 2rem;
	}

	@media (min-width: 768px) {
		h2 {
			font-size: 3.2rem;
		}
	}
`

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const Content = styled.div``
