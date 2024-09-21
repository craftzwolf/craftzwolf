import { Navbar } from './styled'
import Switch from 'react-switch'

import { useState, useContext } from 'react'
//import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { BsMoonFill, BsSunFill, BsGithub, BsList } from 'react-icons/bs'
import darkicon from '../../../assets/WOLFFANG01.png'
import lighicon from '../../../assets/WOLFFANG02.png'


interface NavbarProps { switchTheme(): void; }

const NavBar: React.FC <NavbarProps> = ({ switchTheme }) => {

    const [animate, setAnimate] = useState(false);
    const title = useContext(ThemeContext)

    /* switch animated */
    const switchAnimate = () => {
        setAnimate(true)
        setTimeout(() => setAnimate(false), 500)
    }


    /* Toggle humburguer to hide | show menu */
    const [display, setDisplay] = useState(true)
    const buttonHumburguer = () => {
        setDisplay(!display)

        const gitIcon = document.getElementById('git')
        if(gitIcon) {gitIcon.style.display = display ? "none" : "inline-block"}
    }

    return (
        <Navbar>

            <div className = "lside">
                <button className = "logos">
                    <img className = "dark_brand" src = { darkicon } />
                    <img className = "ligh_brand" src = { lighicon } />
                    <span className = "name">Meireles Fernando</span>
                </button>

                <div className = "links">
                    <button className = "nav">works</button>
                    <button className = "nav">wallpaper</button>
                    <button className = "nav">posts</button>
                    <button className = "nav">uses</button>
                    <button className = "nav"><i className = "icon"><BsGithub /></i>source</button>
                </div>
            </div>

            <div className = "rside">
                <button className = {`switch ${animate ? 'animate' : ''}`} onClick = { switchAnimate }>
                    <Switch className = "theme"
                        onChange = { switchTheme }
                        checked = { title?.title == 'dark' }
                        checkedIcon = { <BsMoonFill className = 'icon_lua'/> }
                        uncheckedIcon = {<BsSunFill className = "icon_sol"/> }
                        handleDiameter = {2}
                        width = {35}
                        height = {35}
                    />
                </button>

                <button className = "bars" onClick = { () => buttonHumburguer ()}>
                    <div className = "actived"></div>
                    <span><BsList className = "hamburger"/></span>
                </button>
            </div>

        </Navbar>
    )
}

export default NavBar;
