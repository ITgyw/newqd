import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Select from '@/pages/Select'
const Bookshelf = lazy(() => import('@/pages/Bookshelf'));
const Find = lazy(() => import('@/pages/Find'));
const Mine = lazy(() => import('@/pages/Mine'));
import Male from '../pages/Select/Male';
const Female = lazy(() => import('@/pages/Select/Female'))
const More = lazy(() => import('@/pages/More'))
const Search = lazy(() => import('@/pages/Search'))
const RouterConfig = () => {
    return (
        <Suspense fallback={null}>
            <Routes>
                {/* redirect 重定向 */}
                <Route path="/" element={<Navigate to="/select/male" replace={true} />} />
                <Route path="/select" element={<Select />}>
                    <Route path="/select/male" element={<Male />} />
                    <Route path="/select/female" element={<Female />} />
                </Route>
                <Route path="/bookshelf" element={<Bookshelf />} />
                <Route path="/find" element={<Find />} />
                <Route path="/mine" element={<Mine />} />
                <Route path="/more/:id" element={<More />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </Suspense>

    )
}

export default RouterConfig