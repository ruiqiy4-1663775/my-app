import { useState } from "react";

const Details = ({ content, clearSelected }) => {
    return (
        // Could put a grid box here to make it responsive
        // The width of this should be the same as the width of the table
        // add some animation on this potentially
      <div>
    {/* //     <h1>{song.title}</h1>
    //     <p>{song.artist}</p>
    //     <p>{song.year}</p> */}
        <button onClick={clearSelected}>Back to table</button>
      </div>
    );
  };

function Res({data}) {
    const [selectedRow, setSelectedRow] = useState(null);
    const headers = [...new Set(data.flatMap(Object.keys))];
    if (selectedRow) {
        return (
            <Details content={selectedRow} clearSelected={() => setSelectedRow(null)}></Details>
        )
    }
    return (
        <div className="overflow-x-auto">
            <div className="table min-w-max">
                <div className="table-header-group ">
                    <div className="table-row"> {/* Add a onclick here to open a modal */}
                        <div className="table-cell text-left ">Song</div>
                        <div className="table-cell text-left ">Artist</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {data.map((row, rowIndex) => (
                        <div className="table-row" key={rowIndex}>
                            {headers.map((key, cellIndex) =>
                                <div className="table-cell " key={cellIndex}> {row[key]} </div>
                            )}    
                        </div>
                    ))}
                    <div className="table-row">
                        <div className="table-cell ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell text-left ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell text-left ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell text-left ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                        <div className="table-cell text-left ">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell ">Witchy Woman</div>
                        <div className="table-cell ">The Eagles</div>
                        <div className="table-cell ">1972</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                    </div>
                    <div className="table-row min-w-fit">
                        <div className="table-cell ">Shining Star</div>
                        <div className="table-cell ">Earth, Wind, and Fire</div>
                        <div className="table-cell ">1975</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                        <div className="table-cell text-left ">Year</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Res;