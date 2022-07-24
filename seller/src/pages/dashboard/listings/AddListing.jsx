import React from 'react'
import NewListingMethods from '../../../components/listings/NewListingMethods'
import Breadcum from '../../../components/ui/Breadcum'
import PageHeading from '../../../components/ui/PageHeading'


const AddSingleListing = () => {
  return (
    <>
      {/* Breadcum links to help user move arround */}
      <Breadcum links={[
        { path: '/listings', text: 'Listings' },
        { path: '/listings/addNewListings', text: 'Add Listings' }
      ]} />
      
      <PageHeading title='Add New Listings'/>
      <NewListingMethods/>


    </>
  )
}

export default AddSingleListing