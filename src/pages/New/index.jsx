import { Container, Content, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { MovieTag } from "../../components/MovieTag"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

export function New() {
	return (
		<Container>
			<Header />

			<Content>
				<main>
					<Form>
						<header>
							<ButtonText title="Voltar" />
							<h1>Novo filme</h1>
						</header>

						<div className="movieInfo">
							<Input placeholder="Título" />
							<Input placeholder="Sua nota (de 0 a 5)" />
						</div>

						<TextArea placeholder="Observações" />

						<h2>Marcadores</h2>
						<div className="movie-tag">
							<MovieTag value="Action" />
							<MovieTag isnew="true" placeholder="Novo marcador" />
						</div>

						<div className="buttons">
							<Button title="Excluir filme" />
							<Button title="Salvar alterações" />
						</div>
					</Form>
				</main>
			</Content>
		</Container>
	)
}
