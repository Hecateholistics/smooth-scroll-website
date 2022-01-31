import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/index';
import SigninPage from '../pages/signin';

export default () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin/" element={<SigninPage />} />
            { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}
            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);