import whiteLogo from '../images/purrfectWords.png';
import colorLogo from '../images/purrfectLogo.png';

const Nav = ({ authToken, minimal, showModal, setShowModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
            </div>
            {!authToken && !minimal && <button 
                className='nav-button'
                onClick={handleClick}
                disabled={showModal}
            >Log in</button>}
        </nav>
    )
}
export default Nav