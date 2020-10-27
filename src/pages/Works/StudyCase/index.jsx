import React, { useState, useEffect } from 'react';
import projects from '../../../data/index'
import { useParams } from "react-router-dom";

export default function StudyCase() {

  const [currentStudy, setCurrentStudy] = useState(null)

  let { studyID } = useParams()

  useEffect(() => {
    setCurrentStudy(projects.fr.find(element => element.id === studyID))
  }, [])

  console.log(projects.fr)

  return (
    <>
    {!currentStudy && <p>loading</p>}
    {currentStudy && 
      <div>
        <h1>{currentStudy.title}</h1>
        <p>{currentStudy.year}</p>
        <p>{currentStudy.description}</p>
      </div>
    }
    </>
  )
}
