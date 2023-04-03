import React, {useState, useEffect} from 'react'

const Statistics = () => {
    const [total, setTotal] = useState(0);
    const [korea, setKorea] = useState(0);
    const [micro, setMicro] = useState(0);

    const fetchTotal = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta");
        const ttl = await response.json();
        setTotal(ttl.total);
    }

    const fetchKorea = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_country=south_korea");
        const koreattl = await response.json();
        setKorea(koreattl.total);
    }

    const fetchMicro = async() => {
        const response = await fetch("https://api.openbrewerydb.org/v1/breweries/meta?by_type=micro");
        const microNum = await response.json();
        setMicro(microNum.total);
        // console.log(micro)
    }


    useEffect(()=>{
        fetchTotal();
        fetchKorea();
        fetchMicro();
    },[])

  return (
    <div className='staa-ctn'>
        <li className='btn button-3'> 
        <p>Total Breweries: </p>
        <p>{total} </p>
        </li>

        <li className='btn button-3'> 
        <p>Total in Korea: </p>
        <p>{korea}</p>
        </li>

        <li className='btn button-3'>  
        <p>Total micro breweries: </p>
        <p>{micro}</p>
        </li>
    </div>
  )
}

export default Statistics