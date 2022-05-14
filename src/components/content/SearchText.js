import React, { useState } from 'react';

function SearchText() {
    const stories = [
        {
            title: 'The Empire Strikes Back',
            url: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back',
            author: 'George Lucas',
            year: 1980,
            points: '538 375 067 ',
            objectID: 0,
        },
        {
            title: 'Terminator 2: Judgment Day',
            url: 'https://www.theterminatorfans.com/terminator-2-judgment-day',
            author: 'James Cameron',
            year: 1991,
            points: '520 881 154',
            objectID: 1,
        },
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const searchedStories = stories.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h3>Mis Películas</h3>
            <Search onSearch={handleSearch} />
            <hr />
            <List list={searchedStories} />
        </div>
    );
};

const Search = props => (
    <div className='mt-1'>
        <label htmlFor="search">Buscar: </label>
        <input id="search" type="text" onChange={props.onSearch} />
    </div>
);

const List = props =>
    props.list.map(item => (
        <div key={item.objectID}>
            <div className='flex-row mt-1'>
                <span>Título: &nbsp;</span>
                <a className='color-2' href={item.url}>{item.title}</a>
            </div>
            <div><span>Director: </span>{item.author}</div>
            <div><span>Año: </span>{item.year}</div>
            <div className='mb-1'><span>Recaudación: </span>{item.points} &#36;</div>
            <hr />
        </div>
    ));

export default SearchText;
