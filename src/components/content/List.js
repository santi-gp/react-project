const list = [
    {
        title: 'The Empire Strikes Back',
        url: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back',
        author: 'George Lucas',
        year: 1980,
        points: '538 375 067',
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
function List() {
    return (
        <div>
            {list.map(function (item) {
                //function(item,index) y key={index}
                return (
                    <div key={item.objectID}>
                        <div>
                            <a href={item.url}><span>Title: </span>{item.title}</a>
                        </div>
                        <div><span>Directed by: </span>{item.author}</div>
                        <div><span>Year: </span>{item.year}</div>
                        <div><span>Box office: </span>{item.points}</div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default List
