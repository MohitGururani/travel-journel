import React from 'react'
import data from './data'
import Card from './components/Card'
import Nav from './components/Nav'

export default function MainContent(){
    const dataSet = data.map(x =>{
        return <Card 
                    key={x.title}
                    title={x.title}
                    location={x.location}
                    googleMapsUrl={x.googleMapsUrl}
                    startDate={x.startDate}
                    endDate={x.endDate}
                    description={x.description}
                    imageUrl={x.imageUrl}
                />
    })
    return (
        <>
            <Nav/>
            <div className='main'>
                {dataSet}
            </div>
            
        </>
    )
}