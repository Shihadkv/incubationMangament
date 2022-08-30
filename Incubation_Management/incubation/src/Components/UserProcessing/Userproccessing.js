import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from 'react-loader-spinner'

function Userproccessing() {
    return (
        <div>
             
            <h1 style={{ marginTop: '3%' }} align='center' >THANK TOU FOR YOUR RESPONSE</h1>
            <div className='d-flex justify-content-center mt-3'>
                <Bars
                    height="100"
                    width="100"
                    color='grey'
                    ariaLabel='loading'
                />
            </div>
            

            <h1 style={{ marginTop: '3%', color: '' }} align='center' >YOUR REQUEST HAS BEEN PROCCESSED</h1>

        </div>
    )
}

export default Userproccessing


