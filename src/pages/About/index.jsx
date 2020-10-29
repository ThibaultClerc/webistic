import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function About() {
  return (
    <div className="container mt-5 pt-5 text-center">
      <h1 className="display-4 mb-5"><FormattedMessage id="about.title"/></h1>
      <h4 className="font-weight-light"><FormattedMessage id="about.description"/></h4>
    </div>
  )
}
