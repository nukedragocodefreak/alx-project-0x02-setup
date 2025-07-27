import Link from "next/link";
import React from "react";

const Header = () =>{
    return(
      <header style={{ padding: "10px", background: "#eee" }}>
      <nav>
        <Link href="/home" style={{ marginRight: "10px" }}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
      </header>
    );
}

export default Header;