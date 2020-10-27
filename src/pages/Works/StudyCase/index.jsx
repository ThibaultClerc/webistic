import React, { useState } from 'react';
import datafr from '../../../data/fr/index'
import dataen from '../../../data/en/index'
import { useParams } from "react-router-dom";

export default function StudyCase() {

  const [currentStudy, setCurrentStudy] = useState(null)

  let { studyID } = useParams()

  return (
    <div>
      <h1></h1>
      <p></p>
      <p></p>
    </div>
  )
}
