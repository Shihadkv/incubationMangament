import React from 'react'
import Header from '../Components/AdminHeader/Header/Header'
import Siderbar from '../Components/AdminHeader/SideBar/SideBar'
import BookingSlot from '../Components/BookingSlot/BookingSlot'



function Adminslot() {
  return (
    <>
            <Header />
            <div style={{ display: "flex" }}>
                <Siderbar />
                <BookingSlot/>
            </div>
        </>
  )
}

export default Adminslot