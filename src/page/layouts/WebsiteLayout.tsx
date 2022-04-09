import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer className='text-center hi'>
        <div className='flex justify-around max-w-7xl m-auto '>
          <div>
            <img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757348/logo-dark_ksvqsf.png" className="block px-4 py w-[200px]" alt="" />
            <p>Rorem ipsum dolorconsectetur adipisicing</p>
            <p>elit, sed do eiusmod tempor incididunt ut</p>
            <p>labore et dolore magna aliqua. Ut enim ad</p>
            <p>minim veniaminventore veritatis et.orem</p>
            <p>ipsum dolorconsectetur adipisicing elit, sed</p>
            <p>do eiusmod tempor incididunt aneye.</p>
          </div>
          <div>
            <h2>CONTACT US</h2>
            <p>ADDRESS : 8638 Amarica Stranfod Mailbon Star</p>
            <p>EMAIL : cafenod@gmail.com</p>
            <p>PHONE : +7464 0187 3535 645</p>
            <p>FAX ID : +9 659459 49594</p>
          </div>
          <div>
            <h2>OPENING HOURS</h2>
            <p>Saturday
              9:00 - 18:00</p>
            <p>Sunday
              10:00 - 18:00</p>
            <p>Monday
              11:00 - 19:00</p>
            <p>Tuesday
              12:00 - 19:00</p>
            <p>Wednesday
              12:00 - 20:00</p>
            <p>Thursday
              13:00 - 18:00</p>
            <p>Friday
              Closed</p>
          </div>
          <div>
            <h2>RECENT NEWS</h2>
            <p>Integer Malesuada Odio Ac Magna</p>
            <p>Meatball Cupim Tenderloin Spare Ribs Picanha Jowl</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default WebsiteLayout