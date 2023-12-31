import styled from "styled-components"
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
	height: 100vh;

	display: flex;
	justify-content: space-around;
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;

	margin: 0 13.2rem;

	> h1 {
		font-size: 4.8rem;
		font-weight: 700;
		color: ${(props) => props.theme.COLORS.PINK};
	}

	> h2 {
		font-size: 2.4rem;
		font-weight: 500;
		color: ${(props) => props.theme.COLORS.GRAY_200};

		margin: 4.8rem 0;
	}

	> p {
		font-size: 1.4rem;
		font-weight: 400;
		color: ${(props) => props.theme.COLORS.GRAY_300};
	}

	> a {
		margin-top: 4.2rem;
		color: ${(props) => props.theme.COLORS.PINK};

		text-align: center;
	}
`

export const Background = styled.div`
	display: none;

	@media (min-width: 678px) {
		display: inline-block;

		flex: 1;
		background: url(${backgroundImg}) no-repeat center center;
		background-size: cover;
		opacity: 0.4;
	}
`
