import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './Home';
import Cuisine from './Cuisine';
import SearchPage from './SearchPage';
import Recipe from './Recipe';

import { AnimatePresence } from 'framer-motion';


function Pages() {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="/search/:text" element={<SearchPage />} />
                <Route path="/recipe/:id" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages;