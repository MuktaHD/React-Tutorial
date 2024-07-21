import React,{useState} from 'react'
import './ReactTabular.css'

function ReactTabular(){
    
    const content = [
        ['It supports server-side rendering.',
           ' It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.',
           ' It follows unidirectional data binding or data flow.',
            'It uses reusable or composable UI components for developing the view.'],
        ['Keys help react identify which elements were added, changed or removed.', 'Keys should be given to array elements for providing a unique identity for each element.','Without keys, React does not understand the order or uniqueness of each element.','With keys, React has an idea of which particular element was deleted, edited, and added.','Keys are generally used for displaying a list of data coming from an API.'],
        ['Use of Virtual DOM to improve efficiency.', 'SEO friendly.', 'Reusable components.']
    ]
    const [contentIndex, setContentIndex] = useState(2)
    console.log(contentIndex);
   return(
        <div className='container1'>
        <h3>What is React?</h3>
        <p> 
        React is a front-end and open-source JavaScript library which is useful in developing user interfaces specifically for applications with a single page. It is helpful in building complex and reusable user interface(UI) 
        components of mobile and web applications as it follows the component-based approach.</p>
        <button onClick={()=>setContentIndex(0)}>Features </button>
        <button onClick={()=>setContentIndex(1)}>Importance of keys</button>
        <button onClick={()=>setContentIndex(2)}>Advantages</button>
            <ul>
                {content[contentIndex].map((ele, index)=>(
                    <li key={index}>{ele}</li>
                ))}
            </ul>
        </div>
    )
}


export default ReactTabular