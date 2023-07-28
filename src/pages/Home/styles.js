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
		text-align: justify;
	}

	.card {
		background-color: rgba(255, 133, 155, 0.05);
		padding: 3.2rem;
		margin-bottom: 2.4rem;

		border-radius: 1.6rem;
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
	padding: 0 2rem;
	margin-bottom: 4rem;

	@media (min-width: 768px) {
		width: 80%;
		margin: 4rem auto;
	}
`
