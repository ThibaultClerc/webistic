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
            <Link to={`${match.url}/${data.id}-study-case`} key={Math.random()}>{data.title}</Link>
          </li>
        )}
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:studyID`}>
          <StudyCase />
        </Route>
      </Switch>
    </div>
  );
}
