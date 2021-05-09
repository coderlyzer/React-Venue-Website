import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.582705894656!2d0.0014754160463082541!3d51.50252477963432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a81c5507b387%3A0x183f693c66bc31aa!2sThe%20Millennium%20Dome%20Millennium%20Way%2C%20London%20SE10%200BB!5e0!3m2!1sen!2suk!4v1620555553146!5m2!1sen!2suk"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
