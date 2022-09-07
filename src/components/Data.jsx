import React from 'react'
import { Nav, Navbar, Button, Dropdown, DropdownButton} from "react-bootstrap";
import "../styles/index.css"

export default function Data() {
    console.log(localStorage.getItem("a"))
  return (
    <Navbar bg="warning" variant="dark" style={{backgroundColor: "white"}}>
        <h1>Propreity Files</h1>
    </Navbar>
  )
}

