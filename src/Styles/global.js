import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
    --background: #121214;
    --text-white: #FFFFFF;
    --color-primary: #FF577F;
    --color-primary-hover: #FF427F;
    --color-primary-disabled: #59323F;
    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
    --modal-background: rgba(0, 0, 0, 0.3);
    --sucess: #3FE864;
    --negative: #E83F5B;
    }

    * {
        padding:0;
        margin:0;
        list-style:none;
        text-decoration: none;
        border:0;  
    }

    body{
        background-color: var(--background);
        display: flex;
        justify-content: center;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
    }

    button, input{
        border-radius: 4px;
    }

    button {
        cursor: pointer
    }

    :focus {
      border: 1px solid var(--grey-0);
      color: var(--grey-0);
    }
  
    ::placeholder {
      color: var(--grey-1);
    }  
`;

export default GlobalStyles;
