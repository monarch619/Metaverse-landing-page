import styled from 'styled-components'
import { motion } from 'framer-motion'



export const Section = styled(motion.section)`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em 0;

    .section_figure {
        max-width: 100%;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .section_desc {
        padding: 1rem 2rem;;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
        h1 {
            font-size: 2.2rem;
        }
        
        ul li {
            list-style: inside;
        }

        button {
            padding: .8rem 1.3rem;
            background-color: #41CCB3;
            color: var(--clr-white);
            cursor: pointer;
            border-radius: 50px;
            margin-top: .7em;
            box-shadow: 0 5px 20px #184C43;
        }
    }


    
    /*--------------MEDIA-QUERIES--------------*/
    @media (min-width: 43.500em) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 1em;
        gap: 2rem;

        .section_figure {
            height: 400px;
        }

        .section_desc {
            > span {
                margin-bottom: 1.7rem;
            }
            h1 {
                font-size: 2.7rem;
            }
        }
    }
`