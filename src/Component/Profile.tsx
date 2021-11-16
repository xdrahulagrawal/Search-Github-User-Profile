import React from 'react'
import '../assests/style.css'

const Profile = ({ name, image }: any) => {
    return (
        <>
            <div className='marginLeft'>
                <img src={image} alt={name} />
                <h3 className='profile-name'>{name}</h3>
            </div>

        </>
    )
}

export default Profile
