import 'styled-components'

declare module 'styled-components' {

    export interface DefaultTheme {
        title: string;

        colors: {
            back_color_def: string;
            back_color_alt: string;
            back_color_blur: string;

            text_color_def: string;
            text_color_alt: string;

            icon_color_def: string;
            icon_color_alt: string;

            theme_icon_color_def: string;
            theme_back_color_def: string;
            theme_back_color_alt: string;

            anime_back_color: string;
            anime_bord_color: string;
            anime_text_color: string;
            anime_shadow_color: string;
            anime_dropshadow_color: string;
        }

        displays: {
            lua_display: string;
            sol_display: string;

            logo_dark_display: string;
            logo_light_display: string;
        }

        images: {
            logo_minpc: string;
        }
    }
}