import { Container } from "./styles"

export function Header() {
	return (
		<Container>
			<h1>RocketMovies</h1>

			<input
				type="text"
				name="search"
				id="search"
				placeholder="Pesquisar pelo título"
			/>

			<div className="profile">
				<div className="profile-info">
					<p>Cássia Bernardo</p>
					<button>sair</button>
				</div>
				<img src="https://github.com/cah90.png" alt="Imagem do usuário" />
			</div>
		</Container>
	)
}
