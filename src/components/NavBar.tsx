import { Navbar } from './styled'
import Switch from 'react-switch'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { BsMoonFill, BsSunFill, Github, BsList } from 'react-icons/bs'


interface NavbarProps { switchTheme(): void; }

const NavBar: React.FC <NavbarProps> = ({ switchTheme }) => {

    const title = useContext(ThemeContext)

    /* Toggle humburguer to hide | show menu */
    const [display, setDisplay] = useState(true)
    const buttonHumburguer = () => {
        setDisplay(!display)

        const gitIcon = document.getElementById('git')
        if(gitIcon) {gitIcon.style.display = display ? "none" : "inline-block"}
    }

    return (
        <Navbar>

            <div>
                <div className = "lside">
                    <div className = "logo">
                        <img className = "dark" />
                        <img className = "light" />
                    </div>
                    <div className = "link">
                    </div>
                </div>
                <div className = "rside"></div>
            </div>

            <div>
                <button className = "switch">
                    <Switch className = "theme"
                        onChange = { switchTheme }
                        checked = { title?.title == 'dark' }
                        checkedIcon = { <BsMoonFill className = 'icon_lua'/> }
                        uncheckedIcon = {<BsSunFill className = "icon_sol"/> }
                        handleDiameter = {2}
                        width = {40}
                        height = {40}
                    />
                </button>

                <button className = "bars" onClick = { () => buttonHumburguer ()}>
                    <div className = "actived"></div>
                    <span><BsList className = "humberguer"/></span>
                </button>
            </div>

        </Navbar>
    )
}

export default NavBar;
