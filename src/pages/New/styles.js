import { styled } from "styled-components"

export const Container = styled.div`
	width: 100%;
	height: 100%;
`

export const Content = styled.div`
	width: 100%;
`

export const Form = styled.form`
	max-width: 80%;
	margin: 3.8rem auto;

	> header {
		display: flex;
		flex-direction: column;
		align-items: left;
		gap: 2.4rem;

		margin-bottom: 3.6rem;

		h1 {
			color: ${(props) => props.theme.COLORS.GRAY_200};
			font-size: 2.6rem;
			font-weight: 500;
		}
	}

	h2 {
		font-family: "Roboto", sans-serif;
		font-weight: 400;
		font-size: 2rem;
		color: ${({ theme }) => theme.COLORS.GRAY_400};

		margin: 4rem 0;
	}

	.movie-tag {
		display: flex;
		gap: 2.4rem;

		background-color: ${({ theme }) => theme.COLORS.DARK_900};
		border-radius: 0.8rem;
		padding: 1.6rem;

		margin-bottom: 4rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		button:first-child {
			background-color: ${({ theme }) => theme.COLORS.DARK_900};
			color: ${({ theme }) => theme.COLORS.PINK};
		}
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 3.6rem;
		}

		.buttons {
			flex-wrap: nowrap;
			gap: 4rem;
		}

		.movieInfo {
			display: flex;
			gap: 4rem;

			margin-bottom: 4rem;
		}
	}
`
