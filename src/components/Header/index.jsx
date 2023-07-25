import { Container, Profile } from "./styles"

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

			<Profile>
				<div className="profile-info">
					<p>Cássia Bernardo</p>
					<button>sair</button>
				</div>
				<img src="https://github.com/cah90.png" alt="Imagem do usuário" />
			</Profile>
		</Container>
	)
}
