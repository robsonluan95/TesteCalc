import React,{ useState } from "react";
import Container from '@mui/material/Container';
import { Box } from '@mui/system';
import './style.css'

export default function Calculadora(){
    const [num, setNum]= useState(0);
    const [numAntigo,setNumAntigo]=useState()
    const [operacao,setOperacao]=useState()

    function Calc(e){
        let valor=num;
        if (num==0){
            setNum(parseInt(`${e}`));
        }else{
            setNum(parseInt(valor+`${e}`));
        }
        
    }
  
    function Ac(){
        setNum(0)
    }

    function operacaoR(e){
        setOperacao(e)
        setNumAntigo(num)
        setNum(0)
        

    }
    
    function resul(){
        

        if (operacao==='/'){
            
            if (num===0){
                setNum(numAntigo)
            }else{
                let resultado=0;
                resultado=(parseInt(numAntigo)/parseInt(num)).toFixed(2)
                setNum(resultado)
            }
            
        }else if( operacao==='%'){
            let resultado=0;
            resultado=(parseInt(numAntigo)/100).toFixed(2)
            setNum(resultado)

        }else if( operacao==='-'){
            let resultado=0;
            resultado=numAntigo-num
            setNum(resultado)

        }else if( operacao==='+'){
            let resultado=0;
            resultado=numAntigo+num
            setNum(resultado)

        }else if( operacao==='x'){
            let resultado=0;
            resultado=numAntigo*num
            setNum(resultado)

        }else{
            setNumAntigo(0)
            setNum(0)
        }
        
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

                    <button  onClick={
                        ()=>{
                            operacaoR('%')
                        }
                    }
                    >%</button>
                    <button className='color--orange' 
                     onClick={
                        ()=>{
                            operacaoR('/')
                        }
                    }>/</button>

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

                    <button className='color--orange' onClick={
                        ()=>{
                            operacaoR('x')
                        }
                    }  >x</button>
                    
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

                    <button className='color--orange' onClick={
                        ()=>{
                            operacaoR("-")
                        }
                    }  >-</button>

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

                    <button className='color--orange' onClick={
                        ()=>{
                            operacaoR("+")
                        }
                    
                    } >+</button>   
                    
                    <button className='color--gray extra' onClick={
                        ()=>{
                            Calc(0)
                            
                        }
                    } >0</button>
                    <button className='color--gray'>,</button>
                    
                    
                    
                    
                    
                    <button className='color--orange' onClick={
                        ()=>{
                            resul()
                        }
                    }  >=</button>
                </div>
            </Container>
        </div>

)}