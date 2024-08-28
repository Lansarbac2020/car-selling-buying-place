import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

function FeaturesList({ features = {} }) {
  // Check if features is not empty
  if (Object.keys(features).length === 0) {
    return <p>No features available</p>;
  }

  return (
    <div className='mt-6'>
      <div className='p-10 bg-white rounded-xl border shadow-md'>
        <h2 className='font-medium text-2xl'>Features</h2>
        <div className='mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {Object.entries(features).map(([key, value]) => (
            <div key={key} className='flex gap-2 items-center'>
              <FaCheckCircle className='text-lg rounded-full p-1 bg-white text-primary' />
              <h2>{key}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturesList;
