import React from 'react'
import CountAndTitle from '../cards/CountAndTitle'

const ListingStats = ({ data }) => {
    return (
        <div className='z-0 w-full flex mb-3 flex-row flex-wrap items-center justify-start py-3 px-10'>
            {data.map((card, i) => {
                return (<>
                    <CountAndTitle value={card.value} title={card.title} about={card.info} />
                </>)
            })}
        </div>
    )
}

export default ListingStats