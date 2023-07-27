import { Container, Title, Content } from "./styles"
import { AiOutlinePlus } from "react-icons/ai"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export default function Home() {
	return (
		<Container>
			<Header />
			<main>
				<Title>
					<h2>Meus filmes</h2>
					<Button title={"Adicionar filme"} icon={<AiOutlinePlus />} />
				</Title>
				<Content></Content>
			</main>
		</Container>
	)
}
