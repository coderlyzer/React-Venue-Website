import React from 'react'
import MyButton from '../utils/MyButton'
import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {
  const priceState = {
    prices: [10, 20, 30],
    position: ['Early-Bird', 'Late-Entry', 'Door-Entry'],
    desc: [
      'Adv plus booking fee',
      'On day booking plus booking fee',
      'Doors booking plus booking fee',
    ],
    linkto: [
      'https://www.ticketmaster.co.uk/section/music',
      'https://www.ticketmaster.co.uk/browse/hard-rock-metal-catid-200/music-rid-10001',
      'https://www.ticketmaster.co.uk/browse/hard-rock-metal-catid-200/music-rid-10001',
    ],
    delay: [500, 0, 500],
  }

  const showBoxes = () => {
    return priceState.prices.map((box, index) => (
      <Zoom
        key={index}
        className="pricing_item"
        delay={priceState.delay[index]}
      >
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>{priceState.prices[index]}</span>
            <span>{priceState.position[index]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[index]}</div>
          <div className="pricing_buttons">
            <MyButton
              text="Purchase"
              style={{
                color: '#fff',
              }}
              link={priceState.linkto[index]}
            />
          </div>
        </div>
      </Zoom>
    ))
  }

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  )
}

export default Pricing
