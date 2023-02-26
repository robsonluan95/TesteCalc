import React,{ useState } from "react";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import './style.css'

export default function Calculadora(){
    const [num, setNum]= useState(0);

    function Calc(e){
        let valor=num;
        if (num==0){
            setNum(`${e}`);
        }else{
            setNum(valor+`${e}`);
        }
        
    }
  
    console.log(parseInt(num))
    function Ac(){
        setNum(0)
    }

    return(
        <div className=''>
            <Box m={5}/>
            <Container maxWidth='xs'>
                
                <div className='container'>
                    <h1 className='num' >{num}</h1>
                    <button onClick={()=>{
                        Ac()
                    }}>AC </button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='color--orange'>/</button>

                    <button className='color--gray'  onClick={
                        ()=>{
                            Calc(7)
                        }
                    }> 7</button>
                    <button className='color--gray'onClick={
                        ()=>{
                            Calc(8)
                        }
                    }>8</button>
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(9)
                        }
                    }>9</button>

                    <button className='color--orange' >x</button>
                    
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(4)
                        }
                    }>4</button>
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(5)
                        }
                    }>5</button>
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(6)
                        }
                    }>6</button>

                    <button className='color--orange' >-</button>

                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(1)
                        }
                    } >1</button>
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(2)
                        }
                    }>2</button>
                    <button className='color--gray' onClick={
                        ()=>{
                            Calc(3)
                        }
                    }>3</button>

                    <button className='color--orange' onClick={()=>{
                        
                    }
                    } >+</button>   
                    
                    <button className='color--gray extra'  >0</button>
                    <button className='color--gray'>,</button>
                    
                    
                    
                    
                    
                    <button className='color--orange' >=</button>
                </div>
            </Container>
        </div>

)}