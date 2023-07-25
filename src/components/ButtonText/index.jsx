import { Container } from "./styles"
import { BsArrowLeft } from "react-icons/bs"

export function ButtonText({ title }) {
	return (
		<Container type="button">
			<BsArrowLeft />
			{title}
		</Container>
	)
}
