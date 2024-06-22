import React from 'react'

function EventHandlingEnd() {
    const defaultPrevent = (e) => {
        e.preventDefault();
        console.log('Default Prevented, Function called and not redirect to Google...')
    }
  return (
    <a href='https://www.google.com/' onClick={defaultPrevent}>Click Here</a>
  )
}

export default EventHandlingEnd