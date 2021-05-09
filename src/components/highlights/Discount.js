import React, { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton'

const Discount = () => {
  const end = 30
  const [start, setStart] = useState(0)

  const percentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1)
    }
  }

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1)
      }, 30)
    }
  }, [start])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              percentage()
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before the 20th June</h3>
            <p>
              This event is 16 and over. Any Ticket holder unable to present
              valid identification indicating that they are at least 16 years of
              age will not be admitted to this event, and will not be eligible
              for a refund.
            </p>

            <MyButton
              text="Purchase tickets"
              link="https://www.ticketmaster.co.uk/"
              size="small"
              style={{
                background: '#ffa800',
                color: '#fff',
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
