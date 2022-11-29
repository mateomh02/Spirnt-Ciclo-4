import React from 'react'
import {Login} from './Login'
import {ListadoOrdenes} from './ListadoOrdenes'
import { Registro } from './Registro';
import { RegistroOrden } from './RegistroOrden';
import { ActualizacionOrden } from './ActualizacionOrden';
import { NavBar } from './NavBar';

export function SideNav() {
    const user = false;

  return (
    <>
        <NavBar/>
         <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">Usuario</div>
                            <a class="nav-link collapsed" href="./ListadoOrdenes.jsx" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Listado de Ordenes
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Creación de Ordenes
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Actualización de Ordenes
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Elaborado por:</div>
                        NCR 2254 Equipo 9
                        <br/>
                        -The best Team-
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">

            {/* {user ? <ListadoOrdenes/> : <Login/> }  */}

            {/* <ActualizacionOrden/> */}
               <br />
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Derechos Reservados &copy; Grupo 9 UniNorte</div>
                            <div>
                                <a href="#">Política de Privacidad</a>
                                &middot;
                                <a href="#">Términos & Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </>
  )
}
