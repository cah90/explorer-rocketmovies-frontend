import { Container } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"

export default function Details() {
	return (
		<>
			<Container>
				<Header />
				<main>
					<ButtonText title="Voltar" />
				</main>
			</Container>
		</>
	)
}
