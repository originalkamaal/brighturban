import React from 'react'
import CountAndTitile from '../cards/CountAndTitile'

const ListingStats = ({ data }) => {
    return (
        <div className='z-0 w-full flex mb-3 flex-row flex-wrap items-center justify-start p-3'>
            {data.map((card, i) => {
                return (<>
                    <CountAndTitile value={card.value} title={card.title} about={card.info} />
                </>)
            })}
        </div>
    )
}

export default ListingStats