import styled from 'styled-components'
import { motion } from 'framer-motion'



export const Section = styled(motion.section)`
    background-image: url('https://i.postimg.cc/nhYFgvv6/nasa-Q1p7bh3-SHj8-unsplash.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5rem 0;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(circle at 50%, transparent, rgba(0,0,0,.1)),
            linear-gradient(to top, rgba(0,0,0,0.9), transparent),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent);
        position: absolute;
        top: 0;
        left: 0;
    }

    .section {
        &_header {
            text-align: center;
            padding: 2rem 0;
        }

        &_technologies {
            width: 100%;
            max-width: 700px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            justify-items: center;
            align-items: center;
            row-gap: 1rem;
            padding: 1.3rem 10px;
            figure {
                width: 50px;
                &:first-of-type,
                &:last-of-type {
                    width: 100px;
                }
                &:nth-of-type(2) {
                    width: 50px;
                }
                &:nth-of-type(3) {
                    width: 40px;
                }
                &:nth-of-type(4) {
                    width: 50px;
                    margin-right: .8em;
                    margin-bottom: .5em;
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    /*--------------MEDIA-QUERIES--------------*/
    @media (min-width: 41.500em) {
        .section_technologies {
            display: flex;
            justify-content: space-around;
            align-items: center;
            figure {
                width: 70px;
                &:first-of-type,
                &:last-of-type {
                    width: 100px;
                }
                &:nth-of-type(2) {
                    width: 50px;
                }
                &:nth-of-type(3) {
                    width: 40px;
                }
                &:nth-of-type(4) {
                    width: 50px;
                    margin: 0;
                }
            }
        }
    }

`
