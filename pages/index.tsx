import React from 'react'
import { Button } from '@mui/material'
import NavBar from '../components/NavBar'

const Index = () => {
    return <>
        <NavBar/>
        <div className='center'>
            <h1>Welcome to music-store</h1>
            <h3>There are best tracks special for you!</h3>
            <Button>Kekw</Button>
        </div>
        
        <style jsx>
            {`
                .center{
                    margin-top: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                }
            `}
        </style>
    </>
}

export default Index