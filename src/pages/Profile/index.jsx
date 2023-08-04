import { FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Container, Form, Avatar } from "./styles"

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"

export function Profile() {
	return (
		<Container>
			<header>
				<a href="/">
					<ButtonText title="Voltar" />
				</a>
			</header>

			<Form>
				<Avatar>
					<img src="https://github.com/cah90.png" alt="Foto do usuário" />
					<label htmlFor="avatar">
						<FiCamera />

						<input id="avatar" type="file" />
					</label>
				</Avatar>

				<Input placeholder="Nome" type="text" icon={FiUser} />

				<Input placeholder="Email" type="email" icon={FiMail} />

				<Input placeholder="Senha atual" type="password" icon={FiLock} />

				<Input placeholder="Nova senha" type="password" icon={FiLock} />

				<Button title="Salvar" />
			</Form>
		</Container>
	)
}
