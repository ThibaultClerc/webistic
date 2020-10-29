import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import projects from '../../data/index';
import { FormattedMessage } from 'react-intl'

export default function Works() {
  const [studyCases, setStudyCases] = useState(null)

  let match = useRouteMatch();

  useEffect(() => {
    setStudyCases(projects)
  }, [])

  return (
    <div className="container mt-5 pt-5 text-center ">
      <h1 className="display-4 mb-3"><FormattedMessage id="works.title"/></h1>
      <h4 className="font-weight-light mb-5"><FormattedMessage id="works.description"/></h4>
      <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3 justify-content-center"> 
        {!studyCases && <p>loading...</p>} 
        {studyCases && studyCases.fr.map(data => 
          <Link to={`${match.url}/${data.id}`} key={Math.random()} className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden text-decoration-none">
            <div className="my-3 py-3">
              <h2 className="display-2 text-white text-decoration-none">{data.title}</h2>
            </div>
          </Link>
        )}
      </div> 
    </div>
  );
}
