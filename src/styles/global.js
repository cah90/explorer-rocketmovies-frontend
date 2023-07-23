import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 92.5%;
}

body {
  background-color: ${(props) => props.theme.COLORS.DARK_900};

  font-size: 1.6rem;
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased; //Smooth the font
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter .2s;
}

button:hover, a:hover {
  filter: brightness(.9);
}


`
