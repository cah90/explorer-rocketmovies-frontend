import { Container, Form, Background } from "./styles"
import { FiMail, FiLock } from "react-icons/fi"

import { Link } from "react-router-dom"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function SignIn() {
	return (
		<Container>
			<Form>
				<h1>RocketMovies</h1>
				<p>Aplicação para acompanhar tudo que assistir</p>

				<h2>Faça seu login</h2>

				<Input placeholder="E-mail" type="email" icon={FiMail} required />

				<Input placeholder="Senha" type="password" icon={FiLock} required />

				<Button title="Entrar" />

				<a href="#"> Criar uma conta </a>
			</Form>

			<Background />
		</Container>
	)
}
