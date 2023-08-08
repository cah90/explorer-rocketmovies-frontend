import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	background-color: ${({ theme, isnew }) =>
		isnew ? "transparent" : theme.COLORS.DARK_600};

	color: ${({ theme }) => theme.COLORS.WHITE};

	border: ${({ theme, isnew }) =>
		isnew ? `1px dashed ${theme.COLORS.GRAY_800}` : "none"};

	padding: 1.6rem;
	border-radius: 1rem;

	> button {
		border: none;
		background: none;
	}

	.button-delete {
		color: #ff0000;
	}

	.button-add {
		color: ${({ theme }) => theme.COLORS.PINK};
	}

	> input {
		width: 100%;

		color: ${({ theme }) => theme.COLORS.WHITE};
		background: transparent;

		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.GRAY_800};
		}
	}
`
