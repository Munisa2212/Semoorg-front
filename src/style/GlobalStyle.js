import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        /* border: 1px dashed red; */
    }
    html {
        scroll-behavior: smooth;
    }
    a{
        text-decoration: none!important;
        color: #000;
        font-weight: 600;
    }
    ul{
        list-style: none;
        padding: 0!important;
    }
    input{
        font-size: 14px!important;
        background: transparent!important;
    }
    input:focus{
        box-shadow: 0 0 0rem .20rem rgba(175, 143, 92, 0.2) !important;
        outline: none!important;
        border: 1px solid #AF8F5C!important;
        color: grey!important;
    }
    textarea{
        font-size: 14px!important;
        background: transparent!important;
    }
    textarea:focus{
        box-shadow: 0 0 0rem .20rem rgba(175, 143, 92, 0.2) !important;
        outline: none!important;
        border: 1px solid #AF8F5C!important;
        color: grey!important;
    }
    .dropdown-toggle::after{
        display: none!important;
    }
    .titleSpan{
        color: #AF8F5C;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: .2rem
    }
    .titleH{
        margin-top: 20px;
        font-weight: 600;
    }
    .titleP{
        font-size: 1.25rem;
        font-weight: 500;
        color: #64748b;
    }
    .primaryColor{
        color: #AF8F5C;
    }

    /* dark theme start */
    /* 1: #2a220f */
    body.light {
        background-color: #ffffff;
    }
    body.dark {
        background-color: #2a220f;
        color: #ffffff;
    }
    .StyledLearn{
        .card {
            border: none;;
        }
    }
    .dark{
        .MyNavbar{
            background: #2a220f!important;
            color: #fff!important;
            a{
                color: #fff!important;
            }
        }
        .Header{
            ul span{
                color: #fff !important;
            }
            .cardHeader{
                background: #2a220f!important;
            }
            .cardHeaderDown{
                color: #fff!important;
                a{
                    color: #fff!important;
                }
            }
            .StyledHr span{
                background: #2a220f!important;
            }
        }
        .specialisation .mainImageWrapper{
            background: linear-gradient( 180deg, rgb(51, 47, 39) 0%, rgb(136, 116, 77) 100%, rgb(237, 228, 211) 100% );
        }
        
        .styledInstructor{
            background: #d9c5a6;
            h1{
                color: #000;
            }
            .titleP, span{
                color: #fff;
            }
        }
        input{
            background: #2a220f!important;
            border: 1px solid #2a220f!important;
            color: #fff!important;
            &::placeholder{
                color: #eee!important;
            }
        }
        textarea{
            background: #2a220f!important;
            border: 1px solid #2a220f!important;
            color: #fff!important;
            &::placeholder{
                color: #eee!important;
            }
        }
        .StyledLearn{
            background: #d9c5a6;
            h1{
                color: #000;
            }
        }
        .StyledTestimonials{
            background: #2a220f !important;
            .InnerLeft{
                background: #2a220f!important;
            }
            .InnerRight{
                background: #2a220f!important;
            }
            p{
                color: #fff!important;
            }
            h4{
                color: #000!important;
            }
            .userBox span{
                color: #000;
            }
        }
         
        .accordationBlock .accordion{
            div{
                background: none!important;
            }
            button{
                background: none!important;
                color: #fff!important;
            }
        }
        .StyledJoin{
            background: #2a220f !important;
        }
        .StyledFooter{
            h4, h5, b, a{
                color: #fff!important;
            }
        }
        .Forms{
            color: #000;
            background: #d9c5a6;
        }
    }
    /* dark theme end */
    /* // -------------------max-width: 1400px------------------------------- */
    @media only screen and (max-width: 1400px) {
        .headerRBtn {
            padding: 10px 20px!important;;
        }
    }
     /* // -------------------max-width: 992px------------------------------- */
    @media only screen and (max-width: 992px) {
        .footerDown {
            ul{
                width: 100%!important;
            }
        }
        .HFormBlock{
            margin-top: 40px!important;
        }
        .show .navbar-nav{
            max-height: 40vh!important;
        }
        .specialisation{
            flex-direction: column;
            .leftSide{
                width: 100%!important;
            }
            .MainImageWrapper{
                width: 60%;
                height: 100%;
                font-size: 23px;
            }
        }
    }
    /* // -----------------max-device-width: 480px---------------------- */
    @media only screen and (max-device-width: 480px){
        .JBtnBox{
            flex-wrap: wrap!important;
            button{
                width: 100%!important;
                margin-left: 0!important;
                margin-top: 20px!important;
            }
        }
        .headerRBtn{
            padding: 10px 10px!important;;
        }
        .dropdownNavbar{
            width: 100%!important;
            margin-bottom: 20px;
        }
        .specialisation{
            h1{
                font-size: 25px!important;
            }
            .mainImageWrapper{
                width: 60%!important;
                height: 100%!important;
                font-size: 12px;
            }
        }
        .StyledTestimonials .imgCont{
            left: 38%!important;
        }
        .partnersBlock{
            gap: 1rem;
            padding: 0 20px!important;
            margin-bottom: 5rem;
        }
        .LinksNavbar{
            justify-content: center;
            margin: 0 20px;
        }
        
        .navbar-toggler{
            box-shadow: none!important;
        }

        /* ........slider settings don't touch....... */
        .sliderImg {
            object-fit: cover;
            max-height: 100%;
        }
        .StyledLearn{
            overflow: hidden!important;
        }
        .Forms .formInner{
            height: 75vh!important;
        }
        
    }
    
`;

export default GlobalStyle;
