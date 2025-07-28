import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { 
    PageAbout, 
    PageWork, 
    PageWallpaper,
    PagePosts,
    PageUses
} from './pages'




const Router: React.FC = () => {
    return (
        <Routes>
            <Route path = "/craftzwolf" element = {<PageAbout />} />
            <Route path = "/works" element={<PageWork />} />
            <Route path = "/wallpaper" element={<PageWallpaper />} />
            <Route path = "/posts" element={<PagePosts />} />

            <Route path = "/uses" element={<PageUses />} />
            <Route path='*' element={<Navigate to="/craftzwolf" />} />

        </Routes>
    )
}

export default Router;
