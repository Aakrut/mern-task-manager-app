import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
     background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );

    scroll-behavior: smooth;
    ::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-thumb {
  background:  linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
}

::-webkit-scrollbar-track {
  background:   linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 20%
    );
}
}
`;