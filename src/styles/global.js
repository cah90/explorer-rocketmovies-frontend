import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

body {
  background-color: ${(props) => props.theme.COLORS.DARK_800};

  font-size: 1.6rem;
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased; //Smooth the font
}

main {
  height: 70vh;
	overflow-y: scroll;
}

::-webkit-scrollbar {
  width: .8rem;
  height: 2px;
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.COLORS.PINK};
  border-radius: 8px;
  height: 1px;
}

::-webkit-scrollbar-thumb:hover {
  background: #f34767;
}

@media (min-width: 768px) {
  main { 
    max-width: 80%;
    margin: auto;
  }
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
