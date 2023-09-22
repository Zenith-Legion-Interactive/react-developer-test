import React from 'react';
import './counter.css'
import {  useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from '../../redux/counter/counterSlice'
import {  MDBContainer,MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react';
const CounterForm = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [increaseByAmount, setIncreaseByAmount] = useState()
    const addValue = Number(increaseByAmount) || 0

    const resetAllValues = () => {
        dispatch(reset())
    }
    return (
    <MDBContainer className='pt-3 bg-secondary'>
    
<div className='lineSeparator mx-5 my-4'></div>
       <MDBContainer>
     
        <MDBBtn className='mx-5 counterButton' onClick={() => dispatch(increment())}>
        <MDBIcon size='2x' fas icon="plus" />
        increase
        </MDBBtn>
     
        <MDBBtn className='mx-5 counterButton' onClick={() => dispatch(decrement())}>
        <MDBIcon size='2x' fas icon="minus" />
        decrease
        </MDBBtn>
       </MDBContainer>
       <div className='lineSeparator mx-5 my-4'></div>
     
       <MDBContainer>
       <MDBBtn className='mx-5 counterButton' onClick={() => resetAllValues()}>
       
       <MDBIcon size='2x' fas icon="undo" />
       reset
        </MDBBtn>
       </MDBContainer>

    </MDBContainer>
    )
}



export default CounterForm;