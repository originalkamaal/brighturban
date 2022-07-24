import React, { useEffect, useRef } from 'react';
import _ from 'lodash';
import { useStepperContext } from '../../../contexts/stepperContext';
import allCatags from '../../../dumy_server/catagories.json';
import { useClickAway } from 'react-use';
import { useLocation } from 'react-router-dom';

export default function SelectCatagory(props) {


  const { allCats, allVerticals, allsubCats, minCats, bu, c, v, vId, searchInput, resVisible, vDef, vsearch, handleClick, setAllCats, setSearchInput, setAllsubcats, setAllverticals, setBU, setC, setV, setVId, setminCats, setVDef, setResVisible, setVsearch } = props;
  const { userData, setUserData } = useStepperContext();
  const location = useLocation();


  const capitalize = (str) => {
    const arr = str.split(" ");

    //loop through each element of the array and capitalize the first letter.


    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }

    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const str2 = arr.join(" ");
    return str2
  }

  //this to hide the search result on clicking outside of section
  const ref = useRef(null);
  useClickAway(ref, () => {
    setResVisible(false)
  });

  //pure function to get array of All Keys of an object
  const getArraysOfKey = (arr) => {
    let output = [];
    _.forOwn(arr, function (value, key) {
      output.push(key);
    });
    return output;
  }

  useEffect(() => {
    //displaying Business Unit on PageLoad...
    let allCats = getArraysOfKey(allCatags);
    setAllCats(allCats);
    setC([]);
    setV([]);

    //creating minified array for search result
    var output = [];
    for (var key in allCatags) {
      var levelOne = allCatags[key];
      if (levelOne instanceof Object) {
        for (var subkey in levelOne) {
          var levelTwo = levelOne[subkey];
          if (levelTwo instanceof Array) {
            for (var i = 0; i < levelTwo.length; i++) {
              var vertical = levelTwo[i];
              if (!vertical.hidden) {

                output.push({ bu: key.toLowerCase(), c: subkey.toLowerCase(), id: vertical.id, v_name: vertical.vName.toLowerCase(), vd_name: vertical.vdName.toLowerCase(), hidden: vertical.hidden });
              }
            }
          }
        }
      }
    }


    //minified array stored in minCats
    setminCats(output);

  }, [location]);



  //this function will display the SubCats on clicking cat
  const handleClickBu = (e) => {

    const subCatagory = allCatags[e];
    let allsubCats = getArraysOfKey(subCatagory);

    setAllverticals([]);
    setC('');
    setV('');
    setBU(e);
    setVId('');
    setAllsubcats(allsubCats);
  }

  //onclick category showing verticals by getting and setting the verticals to allVerticals
  const handleClickSubCat = async (e, main = '') => {

    if (bu.length > 0) {
      main = bu;
    }
    const subCatagory = await allCatags[main];
    const verticals = await subCatagory[e];
    await setV('');
    await setC(e);
    await setVId('');
    await setAllverticals(verticals);
  }

  const handleClickV = (v, vid) => {
    setV(v);
    setVId(vid);
    //todo : Fetch and set VDef
    //dummy def
  }


  //setting vsearch to show the result based on input
  const handleVSearch = (e) => {

    var q = e.target.value;
    q = q.trim();
    q = q.toLowerCase();
    if (q !== '') {
      var output = _.filter(minCats, (item) => {
        return (item.bu.includes(q) || item.c.includes(q) || item.vd_name.includes(q)) && item.hidden === false;

      });

      setVsearch(output);
    } else {
      setVsearch([]);
    }

  }

  const handleClickSearchRes = async (b, c, v, i) => {
    setSearchInput(b + ' / ' + c + ' / ' + v);
    b = capitalize(b);
    c = capitalize(c);
    v = capitalize(v);

    handleClickBu(b);
    setBU(b)

    await handleClickSubCat(c, b);
    handleClickV(v, i);
    //setBU(capitalize(b));

    //handleClickSubCat(capitalize(c));
    // handleClickV(capitalize(v));
  }

  const handleCloseSearch = () => {
    setSearchInput('');
    setBU([]);
    setC([]);
    setV([]);
    setVId('');
    setAllsubcats([]);
    setAllverticals([]);

  }

  return (
    <div className='w-full bg-white p-6'>
      <div className=''>
        <h1 className='text-lg font-bold'>Select The Vertical For Your Product</h1>
        <p className='text-sm text-gray-600'>You can use the Search or Browse options</p>
        <div ref={ref} className='relative flex items-center w-min'>
          <input placeholder='Search for Catagory or Vertical.' onChange={(e) => { handleVSearch(e); setResVisible(true); setSearchInput(e.target.value) }} type="text" className="h-11 w-[760px] text-gray-600 text-xs rounded-l-md border border-gray-200 outline-none p-2 my-3 capitalize" value={searchInput}></input>
          <button><i className='flex items-center justify-center h-11 w-11 text-white bx bx-search-alt-2 text-2xl rounded-r-md bg-blue-600'></i></button>
          {searchInput &&
            <button onClick={handleCloseSearch} className='absolute right-0 mr-14'><i className='text-2xl text-gray-400 bx bx-x'></i></button>
          }

          {vsearch.length > 0 && resVisible ?
            <div className='absolute top-0 -ml-1 mt-[60px] bg-white min-w-max w-[810px] border-2 rounded-md flex flex-col h-[300px] overflow-scroll'>
              {
                vsearch.map((vitem, index) => {

                  return <div key={index}
                    className={`hover:bg-blue-600 hover:text-white border-gray-200 w-full h-8 cursor-pointer p-2 block whitespace-nowrap border-b-2 capitalize text-xs text-gray-600`}
                    onClick={() => {
                      handleClickSearchRes(vitem.bu, vitem.c, vitem.vd_name, vitem.id);
                    }}
                  >
                    {vitem.bu + ' / ' + vitem.c + ' / ' + vitem.vd_name}</div>
                })
              }
            </div>
            : ''
          }
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='my-2 h-10 border-2 border-gray-200 shadow-sm flex items-center px-4 text-xs rounded-md'>
          {<p>Browse Verticals : {bu.length > 0 && bu}  {c.length > 0 && ('/ ' + c)} {v.length > 0 && ('/ ' + v)} </p>}
        </div>
        <div className='flex flex-row justify-between space-x-2'>
          {/* container */}
          <div className='h-[500px] flex flex-row justify-start space-x-2'>
            {/* Horizontal Vertical Browser */}
            <div className='h-full overflow-scroll w-auto text-xs  border-t-2 rounded-md shadow-md border-gray-200'>
              {/* Business Unit(BU) */}
              {allCats.map((cat, index) => {
                return <div onClick={() => handleClickBu(cat)} className={`${cat === bu ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200'} w-[275px] h-10 cursor-pointer border-l-2 p-2 block whitespace-nowrap border-b-2  `} key={index}>{cat}</div>
              })}

            </div>

            {allsubCats instanceof Array && allsubCats.length > 0 ?
              <div className='h-full overflow-scroll w-auto text-xs  border-t-2 rounded-md shadow-md border-gray-200'>
                {/* Catagory */}

                {allsubCats.map((cat, index) => {
                  return <div onClick={() => handleClickSubCat(cat, bu)} className={`${cat === c ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200'} w-[275px] h-10 cursor-pointer border-l-2 p-2 block whitespace-nowrap border-b-2  `} key={index}>{cat}</div>
                })}

              </div>
              : <div className='w-[275px] block whitespace-nowrap'></div>
            }

            {allVerticals instanceof Array && allVerticals.length > 0 ?
              <div className='h-full overflow-scroll w-auto text-xs  border-t-2 rounded-md shadow-md border-gray-200'>
                {/* Verticals */}
                {allVerticals.map((cat, index) => {
                  return (
                    !cat.hidden && <div onClick={() => handleClickV(cat.vdName, cat.id)} className={`${cat.vdName === v ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200'} w-[275px] h-10 cursor-pointer border-l-2 p-2 block whitespace-nowrap border-b-2  `} id={cat.id} key={index}>{cat.vdName}</div>
                  )
                })}
              </div>
              : <div className='w-[275px] block whitespace-nowrap'></div>
            }

          </div>
          {/* Go to Next Page */}

          {v.length === 0 && vId === '' ?

            <div className='flex flex-col text-gray-400 rounded-md shadow-md justify-center items-center h-[500px] w-full'>

              <i className='bx bxs-category-alt' ></i>
              <p>Select the Vertical you wish to sell</p>

            </div>
            :
            <div className='flex flex-col justify-center border-2 border-gray-200 text-gray-400 rounded-md shadow-md items-center h-[500px] w-full'>
              {/* Selected Vertical {bu} / {c} / {v} */}
              <div className='h-10 border-b-2 w-full flex justify-center items-center'>
                <p className='uppercase text-xs text-gray-500'>VERTICAL : </p>
                <p className='capitalize text-xs text-gray-900'>&nbsp;{v}</p>

              </div>
              <div className='h-full'>
                <p className='text-xs text-gray-900 p-5 text-center'>Radiation monitor involves the measurement of radiation dose or radionuclide contamination for reasons related to the assessment or control of exposure.</p>
                <div className='flex flex-col pt-20 w-full items-center h-full'>
                  <i className='text-teal-500 text-2xl bx bxs-check-circle'></i>
                  <p className='text-xs text-gray-900 p-2 text-center'>Please select a brand to start selling in this vertical.</p>
                  <button onClick={() => {
                    setUserData({ ...userData, category: v });
                    handleClick();
                  }} className='text-xs py-1.5 rounded-md px-2 text-center bg-blue-600 text-white' disabled={bu === '' ? 'disabled' : ''}>Select Brand</button>
                </div>
              </div>

            </div>}

        </div>
      </div>
    </div>
  );
}