import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import StudyCase from './StudyCase';
import projects from '../../data/index'

export default function Works() {
  const [studyCases, setStudyCases] = useState(null)

  let match = useRouteMatch();

  useEffect(() => {
    setStudyCases(projects)
  }, [])

  console.log("projects :", projects)
  

  return (
    <div>
      <ul>
        {!studyCases && <p>loading...</p>}
        {studyCases && studyCases.fr.map(data => 
          <li>
            <Link to={`${match.url}/${data.id}`} key={Math.random()}>{data.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
