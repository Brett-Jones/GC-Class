

interface Places {
    id: number;
    name: string;
    firstTime: boolean;
}

interface PlacesListProps{
    places: Places[];
}

function PlacesList( { places }: PlacesListProps){
    return(
        <div>
            <h2> List of Places:</h2>
            <ul>
                {places.map((places) => (
                    <li key={places.id}></li>
                ))}
            </ul>
        </div>
    )
}


export default Places;



