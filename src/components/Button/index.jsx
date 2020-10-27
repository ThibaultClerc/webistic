import { translationHOC } from '../../HOC/translationHOC';
import { Link } from 'react-router-dom'
import './style.css'
import EnglishFlag from '../../assets/img/eng.png'
import FrenchFlag from '../../assets/img/fr.png'

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
    {language.currentLanguage === 'en' && <Link onClick={handleClick} className="d-flex justify-content-end pr-3 pt-3"><img className="flag" src={FrenchFlag}/></Link>}
    {language.currentLanguage === 'fr' && <Link onClick={handleClick} className="d-flex justify-content-end pr-3 pt-3"><img className="flag" src={EnglishFlag}/></Link>}
    </>
  )
}

export default translationHOC(Button)