import Nav from '@common/components/Nav'
import { NextPage } from 'next'
import React from 'react'
import MainLayout from 'styles/divs/MainLayout'
import ButtonLayout from 'styles/buttons/ButtonLayout'
import FlexBoxLayout from 'styles/divs/FlexBoxLayout'
import ItemSurfaceCardLayout from 'styles/divs/ItemSurfaceCardLayout'
import TodoItemSurfaceCard from '@todo/components/TodoItemSurfaceCard'

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
                        <FlexBoxLayout flexType="colCenter">
                            <header style={{width: "100%"}}>
                                <h1>flextype="colCenter"</h1>
                            </header>
                            <TodoItemSurfaceCard title="Item1 가나다라마바사아" name="홍길동" />
                            <TodoItemSurfaceCard title="Item2" name="김길동" deadline="2022-02-23"/>
                            <TodoItemSurfaceCard title="Item3" name="고길동" deadline="2022-02-22" />
                            <TodoItemSurfaceCard title="Item4" name="대길이" deadline="2022-02-21" />
                        </FlexBoxLayout>
                        <FlexBoxLayout flexType="colCenter">
                            <header style={{width: "100%"}}>
                                <h1>Doing</h1>
                            </header>
                            <TodoItemSurfaceCard title="Item1 가나다라마바사아" name="홍길동" />
                            <TodoItemSurfaceCard title="Item2" name="김길동" />
                            <TodoItemSurfaceCard title="Item3" name="고길동" />
                            <TodoItemSurfaceCard title="Item4" name="대길이" />
                        </FlexBoxLayout>
                        <FlexBoxLayout flexType="colCenter">
                            <header style={{width: "100%"}}>
                                <h1>Done</h1>
                            </header>
                            <TodoItemSurfaceCard title="Item1 가나다라마바사아" name="홍길동" />
                            <TodoItemSurfaceCard title="Item2" name="김길동" />
                            <TodoItemSurfaceCard title="Item3" name="고길동" />
                            <TodoItemSurfaceCard title="Item4" name="대길이" />
                        </FlexBoxLayout>
                    </FlexBoxLayout>
                </section>
            </MainLayout>
            <footer></footer>
        </>
    )
}

export default ButtonSamplePage
