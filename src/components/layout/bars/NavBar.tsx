import { Navbar } from './styled'
import Switch from 'react-switch'

import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { BsMoonFill, BsSunFill, BsGithub, BsList } from 'react-icons/bs'
import darkicon from '../../../assets/WOLFFANG02.png'
import lighicon from '../../../assets/WOLFFANG01.png'


interface NavbarProps { switchTheme(): void; }

const NavBar: React.FC <NavbarProps> = ({ switchTheme }) => {

    const [animate, setAnimate] = useState(false);
    const title = useContext(ThemeContext)

    /* switch animated */
    const switchAnimate = () => {
        setAnimate(true)
        setTimeout(() => setAnimate(false), 500)
    }

    const navigate = useNavigate();

    /* my routes functions */
    const buttonHome = () => { navigate('/') }
    const buttonWorks = () => { navigate('/works') }
    const buttonWallpaper = () => { navigate('/wallpaper') }
    const buttonPosts = () => { navigate('/posts') }

    /* */
    const enableButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const clickedButton = event.target as HTMLButtonElement;
        const parentElement = event.currentTarget.parentElement;

        if (parentElement){
            const buttons = parentElement.querySelectorAll('button')

            buttons.forEach((button: Element) => {
                button.classList.remove('active')
            })

            clickedButton.classList.add('active')
        }
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
                <button className = "logos"  onClick = { (event) =>{ enableButton(event); buttonHome () } }>
                    <img className = "dark_brand" src = { darkicon } />
                    <img className = "ligh_brand" src = { lighicon } />
                    <span className = "name">M.Fernando</span>
                </button>
            </div>

            <div className="cside">
                <div className = "links">
                    <button className = "nav" onClick = { (event) =>{ enableButton(event); buttonWorks () } }>works</button>
                    <button className = "nav" onClick = { (event) =>{ enableButton(event); buttonWallpaper () } }>wallpaper</button>
                    <button className = "nav" onClick = { (event) =>{ enableButton(event); buttonPosts () } }>posts</button>
                    <button className = "nav" >uses</button>
                    <button className = "nav" ><i className = "icon"><BsGithub /></i>source</button>
                </div>
            </div>

            <div className = "rside">
                <button>discover</button>
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
