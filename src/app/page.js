'use client'
import React, { useState } from "react";
import Calculator from "../../components/calculator";
import Nav from "../../components/nav";
import Homeloan from "../../components/homeloancalculator";
import BusinesLoan from "../../components/businesloan";
  

export default function Home() {
    const [showPersonalLoan, setShowPersonalLoan] = useState(true);
    const [showHomeLoan, setShowHomeLoan] = useState(false);
    const [showBusinesLoan , setShowBusinesLoan] = useState(false);
      


    const setPersonalLoan =()=>{
      setShowPersonalLoan(true)
      setShowHomeLoan(false)
      setShowBusinesLoan(false)
    }  
   const setHomeLoan = ()=>{
    setShowHomeLoan(true)
    setShowBusinesLoan(false)
    setShowPersonalLoan(false)

   }

   const setBusinessLoan = ()=>{
    setShowBusinesLoan(true)
    setShowHomeLoan(false)
    setShowPersonalLoan(false)
   }
    
  
  return (
    <>
    <Nav/>
    {showPersonalLoan ? 
    <Calculator setPersonalLoan = {setPersonalLoan} setHomeLoan = {setHomeLoan} setBusinessLoan = {setBusinessLoan} />
    :
    ''
    }
     {showHomeLoan ?
     <Homeloan  setHomeLoan = {setHomeLoan} setPersonalLoan = {setPersonalLoan}  setBusinessLoan = {setBusinessLoan}  />
     :
     ''
    }
    {showBusinesLoan ?
   <BusinesLoan   setBusinessLoan = {setBusinessLoan} setPersonalLoan = {setPersonalLoan} setHomeLoan = {setHomeLoan}  /> 
     :
     ''  
  }



   
  </>
    
    )
  
  }


