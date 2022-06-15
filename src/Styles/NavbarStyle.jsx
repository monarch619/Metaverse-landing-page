import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Nav = styled(motion.nav)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6em 1.5em;
    padding-block-start: .7em;
    z-index: 100;
    width: 100%;
    max-width: 100%;
    .navbar {
        
        /*------------LOGO------------*/
        &_logo {
            display: none;
        }

        /*------------PROFILE-IMAGE------------*/
        &_profile-image {
           background-color: #282828;
           display: flex;
           align-items: center;
           padding: .4em .65em;
           border-radius: 50px;
           gap: 1rem;
           z-index: 666;
           cursor: pointer;
           img {
               width: 30px;
               height: 30px;
               object-fit: cover;
               border-radius: 100px;
           }
           span {
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 1.7rem;
               transform: rotateY(180deg);
           }
        }

        /*------------TOGGLE-BUTTON------------*/
        &_toggle-button {
           z-index: 666;
            button {
                font-size: 2.1rem;
                background-color: transparent;
                color: var(--clr-white);
                svg {
                    pointer-events: none;
                }
            }
        }


        /*------------LINKS------------*/
        &_links-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 555;
            opacity: 0;
            transition: opacity .2s ease;
            background-color: #000;
            
            &[data-show='true'] {
                opacity: 1;
            }
            .links {
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1.5em;
                li {
                    list-style: none;
                    font-size: 2rem;
                    font-weight: 700;
                    cursor: pointer;
                    color: var(--clr-white);
                    overflow: hidden;
                    z-index: 300;

                    &:hover {
                        &::after {
                            width: 100%;
                            transform: translateX(110%);
                        }
                    }
                    &::after {
                        content: '';
                        width: 0%;
                        height: 2.5px;
                        background-color: var(--clr-primary);
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        transform: translateX(-100%);
                        transition: all .4s linear;
                    }
                }
            }
        }
    }


    /*-------------MEDIA-QUERIES-------------*/
    @media (min-width: 54em) {
        padding: .7em 2.4em;
        .navbar {
            &_logo {
                display: block;
            }

            &_profile-image {
                order: 1;
            }

            &_toggle-button {
                display: none;
                
            }
            &_links-container {
                width: auto;
                display: flex;
                opacity: 1;
                position: relative;
                display: flex;
                justify-content: flex-end;
                margin-left: auto;
                margin-right: 5em;
                background-color: transparent;
                .links {
                    min-height: auto;
                    flex-direction: row;
                    gap: 3em;
                    li {
                        font-size: 1.1rem;
                        font-weight: unset;
                    }
                }     
            }
        }
    }
`