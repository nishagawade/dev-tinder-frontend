import React from 'react'

const UserCard = ({user}) => {
    console.log("user", user)
    const {firstName, lastName , about} = user

      const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
     "http://localhost:3001/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };
    return (
        <div className="card bg-base-300 w-96 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{firstName + " " + lastName}</h2>
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button 
                    className="btn btn-primary"
                     onClick={() => handleSendRequest("ignored", _id)}
                    >Ignore</button>
                     <button className="btn btn-primary"
                        onClick={() => handleSendRequest("interested", _id)}
                     >Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard
