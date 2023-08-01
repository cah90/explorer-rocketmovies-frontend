import { styled } from "styled-components"

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	background-color: ${(props) => props.theme.COLORS.DARK_600};
	color: ${(props) => props.theme.COLORS.GRAY_800};

	margin-bottom: 0.8rem;
	border-radius: 1rem;

	> input {
		height: 5.6rem;
		width: 100%;

		padding: 1.2rem;

		color: ${(props) => props.theme.COLORS.WHITE};
		background: transparent;
		border: 0;

		&:placeholder {
			color: ${(props) => props.theme.COLORS.GRAY_800};
		}
	}

	svg {
		margin-left: 1.6rem;
	}
`
