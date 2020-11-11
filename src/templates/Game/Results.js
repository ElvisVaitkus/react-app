import React from 'react'
  
const Result = ({ term , secretNum }) => { 
  let result; 
  if(term){ 
    if(secretNum > term){ 
      result = 'Mini lielaku skaitli'
    } 
    else if(secretNum < term){ 
      result ='Mini mazaku skaitli'
    } 
    else if(secretNum == term){ 
      result ='Tu atmineji skaitli'
    }
	else{
		result ='Skaitlis nav atminets'
	}
  } 
  return <h3>{result}</h3> 
} 
  
export default Result