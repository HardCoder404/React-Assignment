import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import HomePage from "../pages/dashboard/HomePage";
import NotFound from "../pages/notFoundPage/NotFound";
import Post from "../pages/posts/Post";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="posts" element={<Post />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
