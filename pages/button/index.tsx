import { NextPage } from 'next'
import React from 'react'
import ButtonLayout from '../../styles/buttons/ButtonLayout'

const ButtonSamplePage: NextPage = () => {
    return (
        <main>
            <header>ButtonSamplePage</header>
            <article style={{"display": "flex", "justifyContent": "space-around"}}>
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
        </main>
    )
}

export default ButtonSamplePage
