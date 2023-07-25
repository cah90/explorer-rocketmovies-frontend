import styled from "styled-components"

export const Container = styled.header`
	height: 11.6rem;

	background: ${(props) => props.theme.COLORS.DARK_800};
	border-bottom: 1px solid ${(props) => props.theme.COLORS.GRAY_900};

	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2rem;
	justify-content: space-between;

	padding: 2.4rem 2rem;

	> h1 {
		display: none;
	}

	> input {
		width: 100%;

		border-radius: 1rem;
		border: none;
		background-color: ${(props) => props.theme.COLORS.DARK_600};

		color: ${(props) => props.theme.COLORS.GRAY_200};
		font-family: "Roboto Slab", serif;
		font-size: 1.4rem;
		font-weight: 400;

		padding: 1.9rem 2.4rem;
	}

	> input::placeholder {
		color: ${(props) => props.theme.COLORS.GRAY_800};
	}

	> div img {
		height: 6.4rem;
		width: 6.4rem;

		border-radius: 3.5rem;
		border: 1px solid ${(props) => props.theme.COLORS.GRAY_900};
	}

	.profile {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.profile-info {
		text-align: end;
	}

	.profile-info p {
		font-size: 1.4rem;
		font-weight: 700;

		color: ${(props) => props.theme.COLORS.GRAY_200};
	}

	.profile-info button {
		background: none;
		border: none;

		font-family: "Roboto Slab", serif;
		font-size: 1.4rem;
		font-weight: 400;
		color: ${(props) => props.theme.COLORS.GRAY_800};
	}

	@media (min-width: 768px) {
		gap: 4rem;

		padding: 2.4rem 4rem;

		> h1 {
			display: inline-block;
			color: ${(props) => props.theme.COLORS.PINK};
			font-size: 2rem;
			font-weight: 700;
		}

		.profile-info {
			width: 12rem;
		}
	}

	@media (min-width: 1000px) {
		padding: 2.4rem 12.3rem;

		> input {
			width: 50%;
		}
	}
`
