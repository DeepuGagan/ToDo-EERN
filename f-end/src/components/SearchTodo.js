import React, { useState } from 'react'

const SearchTodo = ({ searchFunc }) => {
    const [search, setSearch] = useState('')
    const [showAll, setShowAll] = useState(false)
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search...." />
            <button onClick={() => { searchFunc(search); setSearch(''); setShowAll(true) }} >?</button>
            {
                showAll && <button onClick={() => { setShowAll(false); window.location.reload() }}>Show all</button>
            }
        </form>
    )
}

export default SearchTodo