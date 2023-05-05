// Importing React, useState hook, useEffect hook, and Plotly library
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';

// Define the Chart component
function Chart() {
  // Declare a state variable called data, and initialize it to an empty array
  const [data, setData] = useState([]);

  // Use the useEffect hook to run the code inside it when the component mounts and unmounts
  useEffect(() => {
    // Declare a variable called interval, and assign to it a setInterval function call that will run every 5000ms
    const interval = setInterval(() => {
      // Declare a variable called newData, and assign to it an array of random numbers between 0 and 100, with a length between 10 and 20
      const newData = Array.from({ length: Math.floor(Math.random() * 11) + 10 }, () =>
        Math.floor(Math.random() * 101)
      );
      // Update the state variable data with the new data
      setData(newData);
    }, 5000);

    // Use the return statement to define a cleanup function that will run when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Render the Plotly chart with the data and layout properties
  return (
    <Plot
      data={[
        { y: data, type: 'scatter', name: 'Minimum temp' }, // First line
        { y: data.map((d) => d * 2), type: 'scatter', name: 'Actual temp' }, // Second line, with values doubled
        { y: data.map((d) => d * 3), type: 'scatter', name: 'Max temp' }, // Third line, with values tripled
      ]}
      layout={{ width: 1525, height: 500 }}
    />
  );
}

// Export the Chart component as the default export
export default Chart;