"use client"
import React, { useEffect, useState } from 'react'
// import FlickeringGrid from '../magicui/flickering-grid'
import DotPattern from '../magicui/dot-pattern'

function ShootingStarBackground() {
    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    // useEffect(() => {
    //     const handleMouseMove = (event: MouseEvent) => {
    //         setMousePosition({
    //             x: event.clientX,
    //             y: event.clientY,
    //         })
    //     }
    //     window.addEventListener('mousemove', handleMouseMove)
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //     }
    // }, [])
    return (
        <div className='main-bg fixed inset-0 z-0 overflow-hidden  '>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {/* <div id='pointer' className=' absolute rounded-full opacity-10 blur-[80px] z-2 ' style={{ width: '700px', height: '700px', backgroundColor: '#1D4ED8', top: mousePosition.y - 350, left: mousePosition.x - 350 }}></div> */}
            {/* <FlickeringGrid
                className="fixed z-0 inset-0"
                squareSize={2}
                gridGap={45}
                color="#2dd4bf"
                maxOpacity={0.5}
                flickerChance={0.4}
            /> */}
            <DotPattern
                className="fixed inset-0"
                quantity={200}
                ease={20}
                color='#14b8a6'
                refresh />
        </div>
    )
}

export default ShootingStarBackground