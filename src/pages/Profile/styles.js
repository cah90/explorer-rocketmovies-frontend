import styled from "styled-components"

export const Container = styled.div`
	width: 100%;

	> header {
		width: 100%;
		height: 14.4rem;

		background-color: rgba(255, 133, 155, 0.05);

		display: flex;
		align-items: center;

		padding: 0 4rem;

		@media (min-width: 768px) {
			padding: 0 12.4rem;
		}

		svg {
			color: ${({ theme }) => theme.COLORS.PINK};
			font-size: 1.6rem;
		}
	}
`

export const Form = styled.form`
	max-width: 34rem;
	margin: 6.4rem auto 0;

	> div:nth-child(4) {
		margin-top: 2.4rem;
	}

	> div:nth-child(5) {
		margin-bottom: 2.4rem;
	}
`

export const Avatar = styled.div`
	position: relative;
	margin: -125px auto 32px;

	width: 18.6rem;
	height: 18.6rem;

	> img {
		border-radius: 50%;
		width: 18.6rem;
		height: 18.6rem;
	}

	> label {
		width: 4.8rem;
		height: 4.8rem;

		background-color: ${(props) => props.theme.COLORS.PINK};
		border-radius: 50%;

		display: flex;
		align-items: center;
		justify-content: center;

		position: absolute;
		bottom: 0.7rem;
		right: 0.7rem;

		cursor: pointer;

		input {
			display: none;
		}

		svg {
			width: 2rem;
			height: 2rem;
			color: ${(props) => props.theme.COLORS.DARK_500};
		}
	}
`
