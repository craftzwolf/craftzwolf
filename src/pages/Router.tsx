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
            <Route path = "/" element = {<PageAbout />} />
            <Route path = "/craftzwolf/works" element={<PageWork />} />
            <Route path = "/craftzwolf/wallpaper" element={<PageWallpaper />} />
            <Route path = "/craftzwolf/posts" element={<PagePosts />} />

            <Route path = "/craftzwolf/uses" element={<PageUses />} />
            <Route path='*' element={<Navigate to="/" />} />

        </Routes>
    )
}

export default Router;
