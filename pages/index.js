import React, { useState } from 'react';

function Home(props){
    const api = props.slip
    const refresh = () => {
        window.location.reload(false)
    }
     
    
    return(
        <div className="mt-10 m-4">
        <h2 className="font-bold text-2xl text-center mb-6 underline">Random Quote!</h2>
        <br/>
        <p className="text-2xl text-center border rounded-lg bg-gray-400 py-8">"{api.advice}"</p>
        <br/>
        <div className="text-center mt-8">
        <button className="bg-black text-white px-3 py-2" onClick={refresh}>Next</button>
        </div>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    return {
        props: data
       
    }
}


export default Home;