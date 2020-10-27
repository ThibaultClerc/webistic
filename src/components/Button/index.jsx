import React, { useState, useEffect } from 'react';
import { translationHOC } from '../../HOC/translationHOC';

function Button({language}) {

  const handleClick = () => {
    if (language.currentLanguage === 'fr') {
      language.en()
    } else {
      language.fr()
    }
  }

  return (
    <>
    {language.currentLanguage === 'en' && <button onClick={handleClick}>FR</button>}
    {language.currentLanguage === 'fr' && <button onClick={handleClick}>ENG</button>}
    </>
  )
}

export default translationHOC(Button)