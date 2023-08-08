import { Container, Title } from "./styles"
import { FiPlus } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Movie } from "../../components/Movie"

export function Home() {
	return (
		<Container>
			<Header />

			<Title>
				<h2>Meus filmes</h2>

				<Button title={"Adicionar filme"} icon={FiPlus} />
			</Title>
			<main>
				<div className="card">
					<Movie
						data={{
							title: "Interestellar",
							rating: 2,
							tags: [
								{ id: "1", name: "Ação" },
								{ id: "2", name: "Ficção Cientifica" },
								{ id: "3", name: "Aventura" },
							],
						}}
					>
						Pragas nas colheitas fizeram a civilização humana regredir para uma
						sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
						da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
						anos de Cooper, acredita que seu quarto está assombrado por um
						fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
						"fantasma" é uma inteligência desconhecida que está enviando
						mensagens codificadas através de radiação gravitacional, deixando
						coordenadas em binário que os levam até uma instalação secreta da
						NASA liderada pelo professor John Brand.
					</Movie>
				</div>

				<div className="card">
					<Movie
						data={{
							title: "Interestellar",
							rating: 2,
							tags: [
								{ id: "1", name: "Ação" },
								{ id: "2", name: "Ficção Cientifica" },
								{ id: "3", name: "Aventura" },
							],
						}}
					>
						Pragas nas colheitas fizeram a civilização humana regredir para uma
						sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
						da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
						anos de Cooper, acredita que seu quarto está assombrado por um
						fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
						"fantasma" é uma inteligência desconhecida que está enviando
						mensagens codificadas através de radiação gravitacional, deixando
						coordenadas em binário que os levam até uma instalação secreta da
						NASA liderada pelo professor John Brand.
					</Movie>
				</div>

				<div className="card">
					<Movie
						data={{
							title: "Interestellar",
							rating: 2,
							tags: [
								{ id: "1", name: "Ação" },
								{ id: "2", name: "Ficção Cientifica" },
								{ id: "3", name: "Aventura" },
							],
						}}
					>
						Pragas nas colheitas fizeram a civilização humana regredir para uma
						sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
						da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
						anos de Cooper, acredita que seu quarto está assombrado por um
						fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
						"fantasma" é uma inteligência desconhecida que está enviando
						mensagens codificadas através de radiação gravitacional, deixando
						coordenadas em binário que os levam até uma instalação secreta da
						NASA liderada pelo professor John Brand.
					</Movie>
				</div>
			</main>
		</Container>
	)
}
