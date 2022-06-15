import styled from 'styled-components'
import { motion } from 'framer-motion'



export const FooterSection = styled(motion.footer)`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-image: url('https://i.postimg.cc/mgxcZRw1/footer-bg-waves-2.png');
    background-repeat: no-repeat;
    background-size: cover;
    
    .footer_image {
        display: none;
    }

    > section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.3rem;
        .footer_input {
            display: flex;
            background-color: #212121;
            padding: .5rem;
            border-radius: 40px;
            overflow: hidden;
            input {
                padding: 0.7rem .5rem;
                font-size: .9rem;
                background-color: #212121;
                color: var(--clr-white);
            }
            button {
                background-color: #16AF93;
                color: var(--clr-white);
                box-shadow: 0 5px 20px #184C43;
                cursor: pointer;
                padding: 0 1rem;
                border-radius: 100px;
            }
        }

        .footer_logo {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: .5rem;
            > span {
                display: flex;
                align-items: center;
                svg  {
                    font-size: 2rem;
                }
               span {
                   font-size: .9rem;
               }
            }
            > ul {
                display: flex;
                gap: .8rem;
                list-style: none;
                li {
                    cursor: pointer;
                }
            }
        }

        .footer_socialMedias {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: .7rem;
            padding: .5rem;
            margin-top: 1rem;
            > span {
                font-size: .8rem;
            }
            > ul {
                order: -1;
                display: flex;
                list-style: none;
                gap: 2rem;
                li {
                    font-size: 1.4rem;
                    cursor: pointer;
                    transition: color .2s ease;
                    padding: .25em;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    &:hover {
                        color: #16AF93;
                    }
                }
            }
        }
    }


    /*--------------MEDIA-QUERIES--------------*/
    @media (min-width: 41.500em) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        .footer_image {
            display: block;
            width: 300px;
        }
       
        > section {
            width: 100%;
            max-width: 450px;
            padding: 0 1.3em;
            .footer_input {
                width: 100%;
                input {
                    flex: 1;
                }
            }
            
            .footer_logo {
                justify-content: space-between;
            }

            .footer_socialMedias {
                flex-direction: row;
                justify-content: space-between;

                > ul {
                    order: 1;
                    margin-top: .4rem;
                }
            }
        }
    }

    @media (min-width: 53.750em) {
        background-size: contain;
    }
`