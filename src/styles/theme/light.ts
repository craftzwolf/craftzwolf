import MeLogoDark from '../../assets/dark.png'

export default {
    title: 'light',

    colors: {
        back_color_def: 'linear-gradient(90deg, rgba(224, 236, 241, 1) 100%, rgba(136, 136, 136, 1) 0%)',
        back_color_alt: "rgb(207, 212, 214)",
        back_color_blur: 'rgba(255, 255, 255, .1)',

        text_color_def: '#000000',
        text_color_alt: '#111111',

        icon_color_def: '#',
        icon_color_alt: "#",

        theme_icon_color_def: '#FFFFFF',
        theme_back_color_def: '#8D56CD',
        theme_back_color_alt: '#7045FB',
        
        anime_back_color: 'linear-gradient(90deg, rgba(224, 236, 241, 1) 100%, rgba(136, 136, 136, 1) 0%)',
        anime_bord_color: '#D0D4D6',
        anime_text_color: '#2E3944',
        anime_shadow_color: '-8px -8px 20px #E1E1E4, 8px 8px 20px #727276',
        anime_dropshadow_color: 'drop-shadow(-8px -8px 20px #727276) drop-shadow(5px 5px 5px #72727620) drop-shadow(15px 15px 15px #72727620)'
    },

    displays: {
        lua_display: 'block',
        sol_display: 'none',

        logo_dark_display: 'block',
        logo_light_display: 'none'
    },

    images: {
        logo_minpc: MeLogoDark,
    }
}