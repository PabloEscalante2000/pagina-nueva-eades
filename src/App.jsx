import './App.css'
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import {content1,content2,content3,content4,content5, content6, content7} from './data/BlogContentData'
import { UserContext } from './components/UserContext';
//import TestPage from './pages/TestPage'
import BloqueTest from './components/BloqueTest'
import { testAnsiedad,testDepresion,testTLP} from './data/TestData';
import WhIcon from './components/WhIcon';
import React, { Suspense } from 'react';
import TestHome from './pages/TestHome';

const InicioPage = React.lazy(() => import('./pages/InicioPage'))
const QuienesSomosPage = React.lazy(() => import('./pages/QuienesSomosPage'))
const Footer = React.lazy(() => import('./components/Footer'))
const ServiciosPage = React.lazy(() => import('./pages/ServiciosPage'))
const Blog = React.lazy(() => import('./pages/BlogPage'))
const BlogContent = React.lazy(() => import('./pages/BlogContent'))

function App() {

  return (
    <>
    <BrowserRouter>
    <UserContext>
    <WhIcon/>
      <Routes>
        <Route path='/inicio' element={
          <Suspense fallback={<div>Cargando...</div>}>
            <InicioPage/>
          </Suspense>
        }></Route>
        <Route path='/quienes-somos' element={
          <Suspense fallback={<div>Cargando...</div>}>
            <QuienesSomosPage/>
          </Suspense>
        }></Route>
        <Route path='/servicios' element={
          <Suspense fallback={<div>Cargando...</div>}>
            <ServiciosPage/>
          </Suspense>
        }></Route>
        <Route path='/blog' element={
          <Suspense fallback={<div>Cargando...</div>}>
            <Blog/>
          </Suspense>
        }></Route>
          <Route path='/blog/mas-alla-de-la-drepresion' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content1}/>
            </Suspense>
          }/>
          <Route path='/blog/una-aproximacion-al-tlp' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content2}/>
            </Suspense>}
          />
          <Route path='/blog/ataque-de-panico' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content3}/>
            </Suspense>
          }/>
          <Route path='/blog/agotamiento-emocional' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content4}/>
            </Suspense>
          }/>  
          <Route path='/blog/transtorno-de-personalidad' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content5}/>
            </Suspense>
          }/>
          <Route path='/blog/primer-congreso-interancional-eades' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content6}/>
            </Suspense>
          }/>
          <Route path='/blog/terapia-para-la-ansiedad' element={
            <Suspense fallback={<div>Cargando...</div>}>
              <BlogContent content={content7}/>
            </Suspense>
          }/>   
        <Route path='*' element={<Navigate to="/inicio"/>}></Route>
        <Route path='/test/' element={<TestHome/>}/>
        <Route path='/test/test-de-ansiedad' element={<BloqueTest test={testAnsiedad} tipo={"ansiedad"}/>}/>
        <Route path='/test/test-de-depresion' element={<BloqueTest test={testDepresion} tipo={"depresión"}/>}/>
        <Route path='/test/test-de-transtorno-de-la-personalidad-tlp' element={<BloqueTest test={testTLP} tipo={"tlp"}/>}/>
      </Routes>
      <Suspense fallback={<div>Cargando...</div>}>
        <Footer/>
      </Suspense>
      </UserContext>
    </BrowserRouter>
    </>
  )
}

export default App
