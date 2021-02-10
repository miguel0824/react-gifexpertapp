import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';
export const GifExpertApp=()=>{
    //const categories=['SNK','One Punch','Black Clover'];
    const [ categories, setCategories] = useState(['Black Clover']);
    // const handdleApp=()=>{
    //     const agregar='algo';
    //     //setCategories([...categories,agregar]);
    //     setCategories(cats=>[...cats,agregar]);
    // };
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr/>
            
            <ol>
                {   
                    categories.map(c=>
                            (<GifGrid 
                                key={c}
                                category={c}
                                />)
                         )
                }
            </ol>
        </>
    )
    
}