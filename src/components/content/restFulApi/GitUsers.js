import React, { useEffect, useState } from 'react'
import axios from "axios"
function GitUsers() {
    const [data, setData] = useState([]);
    //const [searchItem,setSearchItem] = useState("");
    const [isLoad, SetIsLoad] = useState(true);
    useEffect(() => {
        //axios.get("https://api.github.com/search/users?q=greg")
        axios.get("https://rickandmortyapi.com/api/character/?page=1")
            .then(resp => {
                //console.log(resp.data.items)
                setData(resp.data.results)
                SetIsLoad(false);
            });
    }, []);
    const listUser = data.map((user) =>
        <li key={user.id} className="flex-row ai-center my-2">
            <img width={64} height={64} src={user.image} alt="Generic placeholder" />
            <div className='ml-1'>
                <h5>Nombre: {user.name}</h5>
                <p>Género: {user.gender}</p>            
            </div>
        </li>
    )
    return (
        <>
            <h3 className='txt-center mb-2 color-1'>Rick and Morty</h3>
            {isLoad}
            {listUser}
        </>
    )
}

export default GitUsers
