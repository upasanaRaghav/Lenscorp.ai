import React from 'react';
import Header from '../components/navbar'; // Corrected import statement
import Main from "../components/main";
import About from "../components/aboutUs";
import CardSection from "../components/CardSection";

export default function Home() {
  return (
    <>
      <Header /> 
      <Main/>
      <About/>
<CardSection/>
     
    </>
  );
}
