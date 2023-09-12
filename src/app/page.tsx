import { FC } from "react"
import { Container } from "./Container"
import { Header } from "@/components/Header/Header"
import { Main } from "@/components/Main/Main"
import { RootProvider } from "./RootProvider"

const Home: FC = () => {

  return (
    <>
      <RootProvider>
        <Container>
          <Header />
          <Main />
        </Container>
      </RootProvider>
    </>
  )
}

export default Home