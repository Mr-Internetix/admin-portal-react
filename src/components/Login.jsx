import * as  React from 'react'
import {Box, Center,Flex,Text , Stack , Input , Button, Spinner } from '@chakra-ui/react'
import {useState} from 'react'
// import {Navigate} from 'react-router-dom';


function Login (){
   const [clicked , setClicked]  = useState(false)
  const validateLogin= async (e)=>{
    setClicked(true)
    fetch('https:')

  }
  return(
    <Center>
    <Flex justifyContent="center" alignItems="center">
    <Box p="2" width="md">
    <Text textTransform="capitalise" textAlign="center"> Welcome  </Text>
    <Stack>
    <Input  p="10px" placeholder="Username" variant="flushed"/>
    <Input type="Password" p="10px" placeholder="Password" variant="flushed"/>
    <Button colorScheme="cyan" onClick={validateLogin}> {clicked ? <Spinner/>: 'Login' }</Button>
    </Stack>
    </Box>
</Flex>

    </Center>
  )
}


export default Login
