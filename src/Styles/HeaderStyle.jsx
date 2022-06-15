import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Banner = styled(motion.header)`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-image: url('https://i.postimg.cc/G2xqcqY6/backgroud-waves-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    &::after {
        content: '';
        width: 100%;
        height: 50%;
        background-image: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
        position: absolute;
        left: 0;
        bottom: 0;
    }
    
    .banner-body {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .astraunat-img {
            width: 600px;
            height: 570px;
            position: absolute;
            right: -100px;
            top: 2em;
            z-index: -1;
            display: none;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        /*------------INTRO------------*/
        .banner_intro {
            flex: 1;
            padding: 2rem 2rem 3rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            max-width: 500px;
            margin-right: auto;
            h1 {
                font-size: 3rem;
                line-height: 3rem;
                margin-bottom: .6em;
                span {
                    color: #41CCB3;
                }
            }
            
            p {
                line-height: 1.4rem;
                margin-bottom: 1.5em;
            }

            button {
                padding: .8rem 1.3rem;
                background-color: #41CCB3;
                color: var(--clr-white);
                cursor: pointer;
                border-radius: 50px;
                margin-top: .7em;
                box-shadow: 0 5px 20px #184C43;
                transition: all .3s linear;
            }
        }


        /*------------FOOTER------------*/
        .banner_footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 20;
            &-item {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 2rem .8rem;
                width: 80%;
                > div {
                    display: flex;
                    align-items: center;
                    gap: .7rem;
                    margin-bottom: 1rem;
                    figure {
                        width: 35px;
                        height: 35px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                }
            }
        }
    }


    /*-------------MEDIA-QUERIES-------------*/
    @media (min-width: 41.500em) {
       .banner-body {
            overflow: hidden;
            .astraunat-img {
                display: inline-block;
            }
            .banner_intro {
                padding: 0;
                width: 90%;
                max-width: unset;
                margin-right: unset;
                h1 {
                    font-size: 3.5rem;
                    width: 14ch;
                    line-height: normal;
                }
                p {
                    width: 50ch;
                }
            }
            .banner_footer {
                padding-right: 1.5rem;
                padding-left: 1.5rem;
                flex-direction: row;
                justify-content: center;
                align-items: center;
            }

       }           
    }
    @media (min-width: 44em) {
        .banner-body {
            .banner_footer {
                padding: 0 2rem;
                width: 100%;
                max-width: 1250px;
            }
        }
    }
`