import React from 'react'

export const GlobalFiter = ({filter, setFilter})=>{
    return(
        <span>
            Szukaj: {' '}
            <input value = {filter || ''}
            onChange={e >setFilter(e.target.value)} />

        </span>

    )


}