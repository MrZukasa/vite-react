import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitles] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [response, setResponse] = useState();
    const history = useHistory();

    //creo la funzione che raccoglie i dati dal menu e li spara dentro il json
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setResponse('Blog added successfully!!');
            setTimeout(()=>{history.push('/')},3000);                 //per simulare qualcosa di realistico in termini di attesa
        })        
    }

    return (
        <div className="create">
            <p class="text-4xl items-center">Add a new Blog</p>
            <form class="mt-5" onSubmit={handleSubmit}>
                <div class="flex mt-5 items-center">
                    <label>Blog title:</label>
                    <input type="text" value={title} onChange={(e)=> setTitles(e.target.value)} required class="inline-flex ml-7 max-w-md bg-gray-100 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-red-400" />
                    {/* value e onChange sono una sorta di binding a doppia azione */}
                </div>
                <div class="flex mt-5">
                    <label>Blog body:</label>
                    <textarea type="text" value={body} onChange={(e)=> setBody(e.target.value)} required class="inline-flex ml-6 max-w-md bg-gray-100 appearance-none border-2 border-red-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-red-400 h-80" />
                </div>
                <div class="flex mt-5 items-center">
                    <label>Blog author:</label>
                    <select value={author} onChange={(e)=> setAuthor(e.target.value)} class="inline-flex max-w-md ml-3 bg-gray-100 border-2 border-red-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-red-400">
                        <option value="Mario">Mario</option>
                        <option value="Luigi">Luigi</option>
                        <option value="Luigi">Yoshi</option>
                    </select>
                </div>
                <div class="flex mt-5 bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded max-w-fit">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-auto inline-flex items-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>Add Blog</span>
                    </button>
                </div>
                <div class="italic mt-5 justify-center flex text-xl text-red-400">{response}</div>
            </form>
        </div>
    );
}
 
export default Create;