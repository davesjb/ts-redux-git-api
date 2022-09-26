import "./App.css"

import { ChakraProvider, Box, Text, Heading } from "@chakra-ui/react"
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import { authApi } from "./services/GitApi"
import GitAuth from "./app/hooks/useGetGitUserQuery"
import { store } from "./app/store"

function App() {
  return (
    <ApiProvider store={store}>
      <ChakraProvider>
        <div className="App">
          <GitAuth />
          <Box as="section" bg="gray" w="100%" h="150px" m={10} pb={55}>
            <Heading as="h1">This is a box</Heading>
            <Text fontSize="18px">test</Text>
          </Box>
        </div>
      </ChakraProvider>
    </ApiProvider>
  )
}

export default App
