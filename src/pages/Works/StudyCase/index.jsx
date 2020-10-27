import React, { useState, useEffect } from 'react';
import projects from '../../../data/index'
import { useParams } from "react-router-dom";
import { translationHOC } from '../../../HOC/translationHOC';

function StudyCase({language}) {

  const [currentStudy, setCurrentStudy] = useState(null)

  let { studyID } = useParams()

  useEffect(() => {
    if (language.currentLanguage === 'fr') {
      setCurrentStudy(projects.fr.find(element => element.id === studyID))
    } else {
      setCurrentStudy(projects.en.find(element => element.id === studyID))
    }
  }, [language])

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


export default translationHOC(StudyCase)