import './css/header.css';
import { Login } from './login';
import { NotFound } from './notFound';
import {Layout} from './layout';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export function Header() {
    return (
        <div className="head">
            <BrowserRouter>
                <Routes>
                    <Route path= '/' element={<Layout/>}>
                        <Route path='login' element={<Login/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}