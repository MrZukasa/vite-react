//importo la referenza all'altro hook
import { useState, useEffect } from "react";

//Creo il mio Hook personalizzato con del codice javascript
//gli hook devono cominciare tutti con la parola 'use'
const useFetch = (url) => {

    //se rendo un componente riutilizzabile che senso ha chiamare le variabili 'blog'
    //meglio rinominare tutto in maniera standard

    const [data, setData] = useState([
        // {title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id:1},
        // {title: 'Welcome party!', body: 'lorem ipsum...', author: 'Luigi', id:2},
        // {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Yoshi', id:3}
        //fetcho dal json database
    ]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    //useEffect Hook si triggera ad ogni render
    useEffect(() => {
        fetch(url)                      //qui passiamo l'url direttamente come parametro
            .then(res => {
                if(!res.ok){
                    throw Error('Failed to fetch the resource');
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    },[url]);
    //le parentesi servono a far partire l'evento solo al primo render, qui si possono inserire diverse Dipendencies
    //se dentro le parentesi metto una variabile, farò triggerare l'hook al cambio di quella variabile specifica
    return { data, isPending, error }
}

export default useFetch;