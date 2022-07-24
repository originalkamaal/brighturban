import React from 'react'
import Breadcum from '../../../components/ui/Breadcum'
import PageHeading from '../../../components/ui/PageHeading'
import SingleListingInit from '../../../components/listings/add-listings/SingleListingInit';


function AddSingleListing() {
    return (
        <>
            <Breadcum links={[{ path: '/listings', text: 'Listings' }, { path: '/listings/addNewListings', text: 'Add Listings' }, { path: '/listings/addNewListings/single', text: 'Single Listing' }]} />
            <PageHeading title='Add Single Listing'>

            </PageHeading>

            <SingleListingInit />
        </>

    )
}

export default AddSingleListing