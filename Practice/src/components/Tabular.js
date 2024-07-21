import React,{useState} from 'react'


function Tabular(){
    const content = [
        ['Ronaldo', 'Messi', 'Mbappe'],
        ['MSDhoni', 'Virat','Gambhir'],
        ['Katrina kaif', 'Kareena', 'Alia Bhat']
    ]
    const [contentIndex, setContentIndex] = useState(2)
    console.log(contentIndex);
   return(
        <>
        <button onClick={()=>setContentIndex(0)}>football</button>
        <button onClick={()=>setContentIndex(1)}>Cricket</button>
        <button onClick={()=>setContentIndex(2)}>Actress</button>
            <ul>
                {content[contentIndex].map((ele, index)=>(
                    <li key={index}>{ele}</li>
                ))}
            </ul>
        </>
    )
}


export default Tabular