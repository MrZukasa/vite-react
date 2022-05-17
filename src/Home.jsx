import { data } from 'autoprefixer';
import { useState,useEffect } from 'react';
import BlogList from './BlogList'
import useFetch from './useFetch'


const Home = () => {
    //let name = 'Luigi';      //<-- variabile non reattiva
    const[name, setName] = useState('Luigi');      //<-- variabile reattiva
    //*questo hook restituisce due valori e dobbiamo quindi metterli in un array
    
    const handleClick = () => {
        console.log('hey');
    }
    const handleClickAgain = (name) => {
        console.log('hey ' + name);
    }
    
    const changeName = () => {
        if (name === 'Luigi') {
            setName('Todd');
        }
        else {
            setName('Luigi');
        }
    }
    // --------------------------------------------------------------------------

    //prendo quello che la mia funzione mi restituisce e lo dichiaro e uso qui
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    //*vecchia procedura di delete con il filter
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);             //restituisce un array filtrato
    //     setBlogs(newBlogs);
    // }
    // passo questi dati da Home a BlogList come props

    return (
        <div className="Home">
            <div className="h2" class="text-4xl">
                <p>Homepage</p>
            </div>

            {/* per stampare gli oggetti creati come blogs, uso il metodo javascript .map
                ogni elemento dell'array lo stampo dentro un div che chiamo preview e lo
                lego alla chiave blog.id cosi da renderlo univoco */}

            <div className="print">
                {error && <div class="flex items-center font-medium text-red-500 mt-2 mb-2">{error}</div>}
                {isPending && <div class="italic mt-3">Loading...</div>}    {/*render condizionale*/}
                <BlogList blogs={blogs}/>      {/*qui è dove passo le props caso in qui caricassi i dati a mano */}
                {/* { blogs && <BlogList blogs={blogs} handleDelete={handleDelete} /> } */}
            </div>
            
            <div className="container" class="mt-10">
            <div className="button">
                <button onClick={handleClick}>
                    <svg class="w-6 h-6 mr-auto inline-flex items-center" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                    </svg>
                    <span>Click me</span>
                </button>
            </div>

            <div className="button">
                <button onClick={()=>handleClickAgain('Mario')}>
                    <svg class="w-6 h-6 mr-auto inline-flex items-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                    </svg>
                    <span>Parameters</span>
                </button>
            </div>

            <div className="button">
                <button onClick={changeName}>
                <svg class="w-6 h-6 mr-auto inline-flex items-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                </svg>
                    <span>Change Name</span>
                </button>
            </div>
            <p>{name}</p>
            </div>
        </div>
    );
}
 
export default Home;

// una volta creata una funzione bisogna ricordandosi di non invocarla ma di richiamarla solamente
// all'interno delle parentesi graffe che sono il simbolo che lui si aspetta un valore dinamico, quindi 
// scriverla senza le parentesi tonde, altrimenti la richiama anche quando non si parte l'evento onclick

// ogni funzione ha come parametro nascosto sempre la e, quindi se si inserisce come unico argomento 
// o come argomento secondario è possibile avere ulteriori dettagli contenuto nell'oggetto event