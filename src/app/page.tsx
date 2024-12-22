"use client"
import Header from "./header";
import Main from "./main";
import Essentials from "./essentials";
import Footer from "./footer";
import Essentials2 from "./essential2";
import Essentials3 from "./essential3";
import Product from "./product";

export default function Home() {
  return (
    <>
    <Header/>
    <Main/>
    <Product/> 
    <Essentials3/>
    <Essentials2/>
    <Essentials/>
    <Footer/>
    
    </>
  );
}

