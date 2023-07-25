import { Container, Title } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Rating } from "../../components/Rating"

export default function Details() {
	return (
		<>
			<Container>
				<Header />
				<main>
					<ButtonText title="Voltar" />

					<Title>
						<h2>Interestellar</h2>
						<Rating grade={4} isBigSize={false} />
					</Title>
				</main>
			</Container>
		</>
	)
}
