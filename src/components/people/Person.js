import React from 'react'

function Person ({ eachPerson, person}) {
  console.log(eachPerson)
  return (
    <>
      { eachPerson  &&
        <div>
          <h2>Name: {eachPerson.name}</h2>
          <p>Age: {eachPerson.age}</p>
          <p>Gender: {eachPerson.gender}</p>
        </div>} {!eachPerson && person && <p>"Not Found"</p> }
    </>
  )
}

export default Person