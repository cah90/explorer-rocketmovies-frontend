import { Container } from "./styles.js"

export function Button({ title, icon }) {
	return (
		<Container type="button">
			{icon}
			{title}
		</Container>
	)
}
