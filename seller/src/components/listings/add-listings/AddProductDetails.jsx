import React, { useEffect } from 'react'
import { useStepperContext } from '../../../contexts/stepperContext'


const AddProductDetails = () => {
  const { userData, setUserData } = useStepperContext();
  useEffect(() => {

    setUserData({ ...userData, brand: 'kamaal' });
  }, [])
  return (
    <div>AddProductDetails</div>
  )
}

export default AddProductDetails