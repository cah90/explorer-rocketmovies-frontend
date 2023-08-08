import { Container, Form, Background } from "./styles"
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { BsArrowLeft } from "react-icons/bs"

import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

export function SignUp() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir</p>

				<h2>Crie sua conta</h2>

				<Input placeholder="Nome" type="text" icon={FiUser} required />

				<Input placeholder="E-mail" type="email" icon={FiMail} required />

				<Input placeholder="Senha" type="password" icon={FiLock} required />

				<Button title="Cadastrar" />

				{/* <div className="button">
					<ButtonText title={"Voltar para o login"} />
				</div> */}

				<div className="button">
					<BsArrowLeft />
					<Link to="/"> Voltar para o login </Link>
				</div>
			</Form>

			<Background />
		</Container>
	)
}
