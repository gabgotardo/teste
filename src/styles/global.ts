import { createGlobalStyle, styled } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: Colgate Ready;
        src: url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady-Light.woff2.css") format("woff2"), url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady-Light.woff.css") format("woff");
        font-weight: 300;
        font-style: normal
    }

    @font-face {
        font-family: Colgate Ready;
        src: url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady.woff2.css") format("woff2"), url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady.woff.css") format("woff");
        font-weight: 400;
        font-style: normal
    }

    @font-face {
        font-family: Colgate Ready;
        src: url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady-Bold.woff2.css") format("woff2"), url("https://colgateprobr.vteximg.com.br/arquivos/ColgateReady-Bold.woff.css") format("woff");
        font-weight: 700;
        font-style: normal
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    body {
        background: var(--white);
        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    button {
        cursor: pointer;
    }
    

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    } 



    .swiper {
        position: unset;



        .swiper-button-prev,
        .swiper-button-next {
            width: 3rem;
            height: 3rem;
            cursor: pointer;
            position: absolute;
            top: 47%;
            z-index: 1
        }

        .swiper-button {
            &-prev {
                left: -0.625rem;

                &::before {
                    content: url('data:image/svg+xml,<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.5" r="23" fill="white" stroke="%23EFE9EC" stroke-width="2"/><path d="M19.6172 24.5625L26.0156 18.2188C26.2891 17.9453 26.7266 17.9453 26.9453 18.2188L27.3828 18.6016C27.6016 18.875 27.6016 19.2578 27.3828 19.5312L21.75 25L27.3281 30.5234C27.6016 30.7969 27.6016 31.1797 27.3281 31.4531L26.9453 31.8359C26.7266 32.1094 26.2891 32.1094 26.0156 31.8359L19.6172 25.4922C19.3438 25.2188 19.3438 24.8359 19.6172 24.5625Z" fill="%23222121"/></svg>');
                }
            }

            &-next {
                right: -0.625rem;

                &::before {
                    content: url('data:image/svg+xml,<svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24.5" r="23" fill="white" stroke="%23EFE9EC" stroke-width="2"/><path d="M29.3281 25.4922L22.9297 31.8359C22.6562 32.1094 22.2188 32.1094 22 31.8359L21.6172 31.4531C21.3438 31.1797 21.3438 30.7969 21.6172 30.5234L27.1953 25L21.6172 19.5312C21.3438 19.2578 21.3438 18.875 21.6172 18.6016L22 18.2188C22.2188 17.9453 22.6562 17.9453 22.9297 18.2188L29.3828 24.5625C29.6016 24.8359 29.6016 25.2188 29.3281 25.4922Z" fill="%23222121"/></svg>');
                    width: 
                }
            }   

            &-disabled {
                opacity: 0.5;
            }
        }

        .swiper-pagination {
            bottom: unset;
            top: unset;
            padding: 0 16px;
            
            &-bullet {
                background: white;
                border: 1px solid #cac3c7;

                &-active {
                    background: #EE0400;
                    border-color: #EE0400;
                }
            }
        }
    }
`;

export const ColgateLoding = styled.img``;
