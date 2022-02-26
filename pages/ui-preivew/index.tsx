import Nav from '@common/components/Nav'
import { NextPage } from 'next'
import React from 'react'
import MainLayout from 'styles/divs/MainLayout'
import ButtonLayout from 'styles/buttons/ButtonLayout'
import FlexBoxLayout from 'styles/divs/FlexBoxLayout'
import TodoItemSurfaceCard from '@todo/components/TodoItemSurfaceCard'
import TodoListConatiner from '@todo/components/TodoListConatiner'

const ButtonSamplePage: NextPage = () => {
    return (
        <>
            <header>
                <Nav selectedIndex={2} />
            </header>
            <MainLayout>
                <section aria-label="Button UI Preview">
                    <h1>Button UI Preview</h1>
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
                </section>
                <section aria-label="Flex Box, Cards Preview" style={{paddingTop: "2rem"}}>
                    <h1>Flex Box, Cards Preview</h1>
                    <header style={{width: "100%"}}>
                            <h1>flextype="rowAround"</h1>
                    </header>
                    <FlexBoxLayout flexType="rowAround">
                        <TodoListConatiner title="Todo" list={ undefined } />
                        <TodoListConatiner title="Doing" list={ undefined } />
                        <TodoListConatiner title="Done" list={ undefined } />
                    </FlexBoxLayout>
                </section>
            </MainLayout>
            <footer></footer>
        </>
    )
}

export default ButtonSamplePage
