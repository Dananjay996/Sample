import React from 'react'

import Modal from './Modal';

const Hero = () => {

    const [click,setClick] = React.useState(false);

    const changeHandler = () => {       
        //Handling the click event fired by clicking the button

        setClick(!click);
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white px-10 py-20">
      <div className="text-4xl font-bold mb-6">Welcome To our website!</div>

      <div className="text-lg mb-6">Learn more about our companies and services</div>
      <button onClick={changeHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Click here!</button>
    {click && 
        <Modal  isOpen={click} onClose={changeHandler} />
    }
    </div>
  )
}

export default Hero

