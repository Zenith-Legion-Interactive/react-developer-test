import React from 'react';
import CounterForm from '../components/counter/CounterForm';
import { MDBContainer } from 'mdb-react-ui-kit';
import Counter from '../components/counter/Counter';

const CounterFeature = () => {
    return(
    <MDBContainer className='mt-5'>
       

       <Counter/>
       <CounterForm />
        
        </MDBContainer>
        ) 
}



export default CounterFeature;