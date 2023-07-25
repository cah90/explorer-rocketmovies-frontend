import { styled } from "styled-components"

export const Container = styled.div`
	> main {
		padding: 4rem;

		h2 {
			color: ${(props) => props.theme.COLORS.GRAY_200};
			font-size: 2.6rem;
			font-weight: 500;
			margin: 2.4rem 0;
		}
	}

	@media (min-width: 768px) {
		> main {
			padding: 4rem 12.3rem;

			h2 {
				font-size: 3.6rem;
			}
		}
	}
`

export const Title = styled.div`
	display: flex;
	gap: 1.9rem;
	align-items: center;
`
