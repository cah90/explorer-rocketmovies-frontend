import { styled } from "styled-components"
import { Container as Rating } from "../Rating/styles.js"

export const Container = styled.div`
	> h2 {
		font-size: 2.4rem;
		font-weight: 700;
		color: ${(props) => props.theme.COLORS.GRAY_200};
		margin-bottom: 0.8rem;
	}

	p {
		color: white;
		font-size: 1.6rem;

		margin-bottom: 2rem;
	}

	${Rating} {
		> svg {
			font-size: 1.2rem;
		}

		margin: 0.8rem 0 1.5rem;
	}

	footer {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
	}
`
