import { Routes, Route } from "react-router-dom"

import { New } from "../src/pages/New"
import { Details } from "../src/Details"
import { Home } from "../src/Home"
import { Profile } from "../src/Profile"

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/new" element={<New />} />
			<Route path="/profile" element={<Details />} />
			<Route path="/details/:id" element={<Profile />} />
		</Routes>
	)
}
