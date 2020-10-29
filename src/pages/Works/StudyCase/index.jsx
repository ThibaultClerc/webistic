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
    <div className="container mt-5 pt-5">
    {!currentStudy && <p>loading</p>}
    {currentStudy && 
      <div>
        <h1 className="display-1 d-inline">{currentStudy.title}</h1><span className="h1 font-weight-light">• {currentStudy.year}</span>
        <h2>{currentStudy.subtitle}</h2>
        <p>{currentStudy.description}</p>
      </div>
    }
    </div>
  )
}


export default translationHOC(StudyCase)