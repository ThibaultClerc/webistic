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
    {language.currentLanguage === 'en' && <button onClick={handleClick} style={{background: `url()`}}>FR</button>}
    {language.currentLanguage === 'fr' && <button onClick={handleClick} className="Button">ENG</button>}
    </>
  )
}

export default translationHOC(Button)