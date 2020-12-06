import React, {useState} from "react";
import "./style.css";
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Home(){
const [search, setSearch] = useState("")
function handleInputChange(event){
    setSearch(event.target.value)
}
function handleSubmit(event){
    event.preventDefault()
    console.log(search)
}
    return(
        <div className="home">
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
    <Button onClick = {handleSubmit} variant="outline-secondary">Search</Button>
    </InputGroup.Prepend>
    <FormControl onChange={handleInputChange} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  <br />
        </div>
    )
};
export default Home;
