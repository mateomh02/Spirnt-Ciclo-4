import React from 'react'

export function ListadoOrdenes() {
  return (
    <>
         <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4">DashBoard Recogida de Paquetes</h1>
                        <br />
                        <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                Gestion de Paquetes - Listado de Ordenes
                            </div>
                            <div class="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th># Servicio</th>
                                            <th>Fecha</th>
                                            <th>Ciudad Entrega</th>
                                            <th>Direccion Entrega</th>
                                            <th>Estado Entrega</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>123456</td>
                                            <td><input type="date" /></td>
                                            <td>Bogota</td>
                                            <td>Calle 48 # 34-65</td>
                                            <td>Guardado</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
    </>
  )
}
