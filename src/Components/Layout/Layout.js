import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main style={{ minHeight: "70vh" }}>
        {children}
        <h2 style={{textAlign:"center",padding:"10px",color:"gray" }}>Include a range of bicycle types such as mountain bikes, road bikes, city bikes, and electric bikes.</h2>
        <img
          src="https://cdn.pixabay.com/photo/2014/07/05/16/44/biker-384921_1280.jpg"
          style={{
            width: "650px",
            borderRight: "100px",
            marginLeft: "100px",
            marginBottom: "20px",
          }}
        />
        <h1></h1>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
