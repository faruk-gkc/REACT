import React from 'react'
import CharactersItem from './CharactersItem'
import Spinner from '../ui/Spinner'

const CharactersGrid = ( {isLoading, items} ) => {
    return isLoading ? 
    <Spinner /> : 
    <section className="cards">
        {items.map( (item) => (
            <CharactersItem key={item.char_id} item={item} />            
        ))}
    </section>
}

export default CharactersGrid
