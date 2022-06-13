import React, { useRef, useEffect } from "react";
import "./App.css";

/* 
  [
  [1,2,3,4,5,6,7,8,9,10],
  [11,12,13,14,15,16,17,18,19,20],
  [21,22,23,24,25,26,27,28,29,30],
  [31,32,33,34,35,36,37,38,39,40],
  [41,42,43,44,45,46,47,48,49,50],
  [51,52,53,54,55,56,57,58,59,60],
  [61,62,63,64,65,66,67,68,69,70],
  [71,72,73,74,75,76,77,78,79,80],
  [81,82,83,84,85,86,87,88,89,90],
  [91,92,93,94,95,96,97,98,99,100]
  ]
  */

const Row: React.FC<{ size: number , key:number}> = ({ size , key }) => {
  // const isGray = true;
  
  const isEven = (i = 0) => {
      // return ((key % 2 === 0) && (i % 2 === 0)) ? true : false;
      return i % 2 === 0;
    };
    
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {new Array(size).fill(1).map((_, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            height: "60px",
            width: "60px",
            alignContent: "center",
            justifyContent: "center",
            border: "0.5px solid #3a3a3a",
            // backgroundColor: isGray? "#b3b3b3" : "#fff" ,
            backgroundColor: isEven(i) ? "#fff" : "#b3b3b3",
            color: isEven(i) ? "#b3b3b3": "#fff" ,
          }}
        >
          <p>{i + 1}</p>
        </div>
      ))}
    </div>
  );
};

const Matrix: React.FC<{ size: number }> = ({ size }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "0.5px solid #3a3a3a",
      }}
    >
      {new Array(size).fill(1).map((_, i) => (
        <Row size={size} key={i} />
      ))}
    </div>
  );
};

export const App = () => {
  return (
    <div
      className="app"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Matrix size={12} />
    </div>
  );
};
