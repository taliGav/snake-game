import React, { useRef, useEffect, MouseEventHandler } from "react";
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



// const updateTile: <{ ev: MouseEvent, rowNum: Number, colNum: number, color: string }> = ({ ev, rowNum, colNum, color = "#AEDBCE" }) => { console.log('ev', ev) }

// find out how to catch one tile and change background color


const Tile: React.FC<{
  size: number, rowNum: number, colNum: number, idx: number,
  // onClick: MouseEventHandler;
}>
  = ({ rowNum, colNum
    //  onClick 
  }) => {

    //change element background color on click
    const tileClickedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      // isBgcWhite() ? tileBgColorRef.current.style.backgroundColor = "#AEDBCE" : tileBgColorRef.current.style.backgroundColor = "#fff";
      if (tileClickedRef.current) {
        tileClickedRef.current.className = "tile clicked";
        // tileBgColorRef.current.style.backgroundColor = "#AEDBCE";
      }
    }
      , [tileClickedRef]);


    const isTileClicked = false

    // const isBgcWhite = () => {
    //   if ((rowNum % 2 === 0) && (colNum % 2 === 0)) return "#fff"

    //   else if ((colNum % 2 !== 0) && (rowNum % 2 !== 0)) return "#fff"

    //   else return "#b3b3b3"
    // }

    const isBgcWhite = () => {
      if ((rowNum % 2 === 0) && (colNum % 2 === 0)) return true

      else if ((colNum % 2 !== 0) && (rowNum % 2 !== 0)) return true

      else return false
    }


    return (
      <div className="tile" ref={tileClickedRef}

        /* onClick={() => console.log("clicked")} */
        onClick={(ev) => console.log(ev.target, "clicked")}

        // onClick={(event, isTileClicked) => { */}
        //   console.log(event.target, "clicked");
        //   console.log('isTileClicked' , isTileClicked)
        //   !isTileClicked
        //   console.log('isTileClicked' , isTileClicked)
        // }

        // onClick={updateTile}
        // key={i}
        id={'tile' + rowNum + colNum}

        style={{
          display: "flex",
          height: "60px",
          width: "60px",
          justifyContent: "center",
          alignItems: "center",
          border: "0.5px solid #3a3a3a",
          backgroundColor: isBgcWhite() ? "#fff" : "#b3b3b3",
          // backgroundColor: isTileClicked() ? "#AEDBCE" : isBgcWhite(),
          // color: isBgcWhite() ? "#b3b3b3" : "#fff",
        }}
      >
        {colNum}
      </div >
    );
  }


// <div
//         onClick={(ev) => updateTile(ev)}
//         // onClick={updateTile}
//         // onClick={console.log(ev)}
//         //  onClick={updateTile(ev, rowNum, colNum, color = "#AEDBCE")}
//         key={i}
//         id={'tile' + rowNum + i}
//         style={{
//           display: "flex",
//           height: "60px",
//           width: "60px",
//           alignContent: "center",
//           justifyContent: "center",
//           border: "0.5px solid #3a3a3a",
//           backgroundColor: isBgcWhite(i) ? "#fff" : "#b3b3b3",
//           color: isBgcWhite(i) ? "#b3b3b3" : "#fff",
//         }}
//       >
//         <p>{i + 1}</p>
//       </div>


// function getRowCol(event: MouseEvent) {
//   const { clientX, clientY } = event;
//   const { left, top } = event.currentTarget.getBoundingClientRect();
//   const x = clientX - left;
//   const y = clientY - top;
//   const row = Math.floor(y / 100);
//   const col = Math.floor(x / 100);
//   return { row, col };
// }



const Row: React.FC<{ size: number, rowNum: number }> = ({ size, rowNum }) => {

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
        <Tile size={size} key={i} idx={i} rowNum={rowNum} colNum={i + 1} />
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
        <Row size={size} key={i} rowNum={i + 1} />
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
