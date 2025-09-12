import { Container, TextInput } from '@mantine/core'
import { useState } from 'react';
import UrlResponse from './UrlResponse';
import UrlForm from './UrlForm';


export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}
