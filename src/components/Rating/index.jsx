import { Container } from "./styles"
import { LiaStar, LiaStarSolid } from "react-icons/lia"

export function Rating({ grade, isBigSize }) {
	let stars = []

	for (let cont = 1; cont <= 5; cont++) {
		if (cont <= grade) {
			stars.push(<LiaStarSolid key={cont} />)
		} else {
			stars.push(<LiaStar key={cont} />)
		}
	}
	return <Container isBigSize={isBigSize}>{stars}</Container>
}
