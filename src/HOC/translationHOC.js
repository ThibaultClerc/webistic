import React from 'react';
import TranslationContext from '../context/Translation'

export const translationHOC = Component => props => (
  <TranslationContext.Consumer>
    {value => <Component {...props} language={value} />}
  </TranslationContext.Consumer>
);