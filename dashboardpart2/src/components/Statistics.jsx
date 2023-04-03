import React, {useState, useEffect} from 'react'

const Statistics = () => {
    const [california, setCalifornia] = useState(0);
    const [colorado, setColorado] = useState(0);
    const [oregon, setOregon] = useState(0);
    const [washington, setwashington] = useState(0);
    const [newyork, setNewYork] = useState(0);
    const [pennsylvania, setPennsylvania] = useState(0);

    // https://api.openbrewerydb.org/v1/breweries/meta?by_state=california

    const fetchCalifornia = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=california");
        const californiaNum = await response.json();
        setCalifornia(californiaNum.total);
    }

    const fetchColorado = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=colorado");
        const coloradoNum = await response.json();
        setColorado(coloradoNum.total);
    }

    const fetchOregon = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=oregon");
        const oregonNum = await response.json();
        setOregon(oregonNum.total);
    }

    const fetchWashington = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=washington");
        const washingtonNum = await response.json();
        setwashington(washingtonNum.total);
    }

    const fetchNewyork = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=new_york");
        const newyorkNum = await response.json();
        setNewYork(newyorkNum.total);
    }

    const fetchPennsylvania = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_state=pennsylvania");
        const pennsylvaniaNum = await response.json();
        setPennsylvania(pennsylvaniaNum.total);
    }

    useEffect(()=>{
        fetchCalifornia();
        fetchColorado();
        fetchOregon();
        fetchWashington();
        fetchNewyork();
        fetchPennsylvania();
    },[])

  return (
    <div className='staa-ctn'>
        <li className='btn button-3'> 
            <p>Number of Breweries: </p>
            <p>Total {california} in California </p>
        </li>

        <li className='btn button-3'> 
            <p>Number of Breweries: </p>
            <p>Total {washington} in Washington </p>
        </li>

        <li className='btn button-3'> 
            <p>Number of Breweries: </p>
            <p>Total {colorado} in Colorado</p>
        </li>

        <li className='btn button-3'> 
            <p>Number of Breweries: </p>
            <p>Total {newyork} in New York</p>
        </li>

        <li className='btn button-3'>  
            <p>Number of Breweries: </p>
            <p>Total {pennsylvania} in Pennsylvania</p>
        </li>

        <li className='btn button-3'>  
            <p>Number of Breweries: </p>
            <p>Total {oregon} in Oregon</p>
        </li>

    </div>
  )
}

export default Statistics