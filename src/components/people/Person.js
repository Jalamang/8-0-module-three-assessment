import React from 'react'

function Person ({ people }) {
  return (
    <>
      { people.length  ?
        (<div>
          <h2>Name: {people[0].name}</h2>
          <p>Age: {people[0].age}</p>
          <p>Gender: {people[0].gender}</p>
        </div>) : ( <p>Not Found</p>) }
    </>
  )
}

export default Person