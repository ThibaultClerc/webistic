import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function About() {
  return (
    <div className="container mt-5 pt-5 text-center">
      <h1 className="display-4"><FormattedMessage id="about.title"/></h1>
      <p><FormattedMessage id="about.description"/></p>
      <h1>HIHIHI</h1>
    </div>
  )
}
