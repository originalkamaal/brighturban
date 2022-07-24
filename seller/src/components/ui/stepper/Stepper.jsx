import React, { useState, useEffect, useRef } from "react";
import { useStepperContext } from '../../../contexts/stepperContext'



const Stepper = ({ steps, currentStep }) => {

  const { userData, setUserData } = useStepperContext();

  const [newStep, setNewStep] = useState([]);
  const stepsRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      }

      //step completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepsRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepsRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySubtitle = (index, userData) => {
    switch (index) {
      case 0:
        return <div className="absolute top-0 mt-16 uppercase text-xs font-semibold text-gray-800 whitespace-nowrap"> {userData.category}</div>

      case 1:
        return <div className="absolute top-0 mt-16 uppercase text-xs font-semibold text-gray-800 whitespace-nowrap"> {userData.brand}</div>

      default:
    }
  }



  const stepsDisplay = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-10 w-10 flex items-center justify-center py-3  ${step.selected
              ? "bg-blue-600 text-white font-bold border border-blue-600 "
              : ""
              }`}
          >
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute top-0 hidden md:block  text-center mt-12 md:w-32 text-xs font-medium uppercase ${step.highlighted ? "text-gray-900" : "text-gray-400"
              }`}
          >
            {step.description}
          </div>
          {
            index === 0 ?
              (userData.category && <div className="absolute top-0 mt-16 hidden md:block uppercase text-[8px] font-semibold text-gray-800 whitespace-nowrap"> {userData.category}</div>) :
              index === 1 ? (userData.brand && <div className="absolute top-0 mt-16 hidden md:block uppercase text-[8px] font-semibold text-gray-800 whitespace-nowrap"> {userData.brand}</div>) : ''
          }
        </div>
        <div
          className={`flex-auto border-t-2 mx-8 hidden md:block transition duration-500 ease-in-out  ${step.completed ? "border-blue-600" : "border-gray-300 "
            }  `}
        ></div>
      </div>
    );
  });



  return (
    <div className="md:mx-4 md:p-4 flex justify-between items-center">
      {stepsDisplay}
    </div>
  );
};
export default Stepper;