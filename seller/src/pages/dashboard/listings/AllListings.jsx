import React from 'react'
import FullWidth from '../../../components/containers/FullWidth';
import BulkActions from '../../../components/listings/BulkActions'
import ListingFilter from '../../../components/listings/ListingFilter';
import ListingStats from '../../../components/listings/ListingStats'
import ActiveProductsList from '../../../components/listings/ActiveProductsList';
import Breadcum from '../../../components/ui/Breadcum';
import PageHeading from '../../../components/ui/PageHeading';


const AllListings = () => {

  const data = [
    { value: '989', title: 'active listings', info: 'Active selling listing, but may be not visible to customers due to kjhasf sakjfh ksad hk lorem50kajslkfdjlkasf klsjfa lfjs akfljsl fsjfksdfjksaf lsajf lkjsdf lkjs fksajflksajflks lkfj slkfjsklfjlsajdl k' },
    { value: '989', title: 'ready for activation', info: 'Active selling listing, but may be not visible to customers due to' },
    { value: '989', title: 'blocked listings', info: 'Active selling listing, but may be not visible to customers due to' },
    { value: '989', title: 'inactive listings', info: 'Active selling listing, but may be not visible to customers due to' },
    { value: '989', title: 'archived listings', info: 'Active selling listing, but may be not visible to customers due to' }

  ];
  return (
    <>
      <Breadcum links={[{ path: '/listings', text: 'All Listings' }]} />
      <PageHeading title='All Listings'>
        <div className='hidden md:flex flex-row h-12 items-center space-x-2'>
          <div className='flex flex-row items-center h-10'>
            <input type='text' className='h-full p-3 w-56 focus:outline-none text-gray-500 text-sm shadow-sm rounded-l-sm' placeholder='Search for Title, SKU Id, UID' />
            <button type='text' className='h-full w-10 shadow-sm'><i className='flex items-center justify-center h-full w-10 text-white bx bx-search-alt-2 text-2xl rounded-r-sm bg-blue-600'></i></button>
          </div>
          <button className='p-2 px-3.5 rounded-sm bg-blue-600 h-10 text-white uppercase text-sm'>Add New Listings</button>
        </div>
      </PageHeading>
      <ListingStats data={data} />
      <FullWidth>
        <BulkActions />
        <ListingFilter />
        <ActiveProductsList />
      </FullWidth>

    </>
  )
}

export default AllListings