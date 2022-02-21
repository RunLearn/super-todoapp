import { NextPage } from 'next'
import React from 'react'
import MainLayout from 'styles/divs/MainLayout'
import ButtonLayout from '../../styles/buttons/ButtonLayout'
import NavLayout from '../../styles/divs/NavLayout'

const ButtonSamplePage: NextPage = () => {
    return (
        <>
            <header>
                <NavLayout>
                    <h3>Button Sample Page</h3>
                    <ul>
                        <li>
                            <b className="left-curve"></b>
                            <b className="right-curve"></b>
                            <a>a</a>
                        </li>
                        <li>
                            <b className="left-curve"></b>
                            <b className="right-curve"></b>
                            <a>a</a>
                        </li>
                        <li className="selected">
                            <b className="left-curve"></b>
                            <b className="right-curve"></b>
                            <a>a</a>
                        </li>
                    </ul>
                </NavLayout>
            </header>
            <MainLayout>
                <article style={{
                    display: "flex",
                    justifyContent: "space-around",
                    paddingTop: "2rem",
                    backgroundColor: "#FCF6F5",
                }}>
                    <ButtonLayout className='main'>MAIN</ButtonLayout>
                    <ButtonLayout className='sub'>SUB</ButtonLayout>
                    <ButtonLayout className='primary'>PRIMARY</ButtonLayout>
                    <ButtonLayout className='secondary'>SECONDARY</ButtonLayout>
                    <ButtonLayout className='info'>INFO</ButtonLayout>
                    <ButtonLayout className='warning'>WARNING</ButtonLayout>
                    <ButtonLayout className='danger'>DANGER</ButtonLayout>
                    <ButtonLayout className='success'>SUCCESS</ButtonLayout>
                    <ButtonLayout className='light'>LIGHT</ButtonLayout>
                    <ButtonLayout className='dark'>DARK</ButtonLayout>
                </article>
            </MainLayout>
            <footer></footer>
        </>
    )
}

export default ButtonSamplePage
