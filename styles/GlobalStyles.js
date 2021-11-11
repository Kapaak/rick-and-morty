//libraries
import { createGlobalStyle } from "styled-components";
import { breakpoints } from ".";

export const GlobalStyles = createGlobalStyle`
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    :root{
        --font1:"Rajdhani", sans-serif;

        --col1:#001427;
        --col2: #A2F3BC;
        --col3:#A2F3E5;
        --col4:#F3DBA2;
        --col5:#F5BB40;
        --col6:#FFFEFE;
        --col7:#828181;

        --max-width:120rem;
        --side-p:2rem;
        --top-p:4rem;
        --gap:5rem;
        --shadow:0 0 5px 1px #52525224;

        --mh:calc(4.5rem / var(--divider));
        --smh:calc(2.2rem / var(--divider));
        --t:calc(1.6rem / var(--divider));
        --bt:calc(1.8rem / var(--divider));
        --h:calc(2.3rem / var(--divider));

        --divider:1;

    }

    html{
        font-size: 62.5%;
        background-color: var(--col6);
    }

    body{
        font-family:var(--font1);
        font-size: 1.6rem;
        color: var(--col1);
    }


    @media ${breakpoints.mobileM}{
        :root{
            --divider:.88;
            --side-p:4rem;
        }
    }

    @media ${breakpoints.tabletS}{
        :root{
            --side-p:8rem;
        }
    }

    @media ${breakpoints.desktopS}{
        :root{
            --mh: calc(5.3rem / var(--divider));
            --smh: calc(2.6rem / var(--divider));
            --t: calc(1.6rem / var(--divider));
            --bt: calc(2.3rem / var(--divider));
            --h: calc(3.3rem / var(--divider));

            --gap:6rem;
            --top-p:10rem;
        }
    }

    @media ${breakpoints.desktopX}{
       :root{
            --mh: calc(5rem / var(--divider));
            --smh: calc(2.4rem / var(--divider));
            --h: calc(4rem / var(--divider));
            --t: calc(1.8rem / var(--divider));
            --bt: calc(2.5rem / var(--divider));
            --divider:0.75;
       }
    }
`;
