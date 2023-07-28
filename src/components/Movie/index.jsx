import { Container } from "./styles"
import { Rating } from "../Rating"
import { Tag } from "../Tag"

export function Movie({ data, children }) {
	return (
		<Container>
			<h2>{data.title}</h2>
			<Rating grade={data.rating} />
			{children.length > 40 ? (
				<p>{children.slice(0, 3 * 40) + "..."}</p>
			) : (
				<p>{children}</p>
			)}

			<footer>
				{data.tags.map((tag) => (
					<Tag title={tag.name} key={tag.id} />
				))}
			</footer>
		</Container>
	)
}
