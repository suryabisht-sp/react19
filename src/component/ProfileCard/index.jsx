import React from 'react'

const ProfileCard = (props) => {
    const {name, gender, greeting, children}= props
  return (
<>
<div className="title-box">
          <div>
            <span>from Profile card: </span>
            {name}
          </div>
          <div>
            <span>Gender: </span> {gender}
          </div>
          <div>
            <span>Message: </span> {greeting}
          </div>
          <span>Children's Message: {children}</span>
        </div>

</>  )
}

export default ProfileCard