import React from 'react'

export  function RegistroOrden() {
    return (
        <div>
            <main>
            <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Registro orden</h3></div>
                                        <div class="card-body">
                                            <form>

                                                <div class='row'>
                                                    <div class="col-md-6">
                                                        <label for="Fecha">Fecha</label>
                                                        <input class="form-control" id="inputDate" type="time" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Fecha">Hora</label>
                                                        <input class="form-control" id="inputDate" type="time" />
                                                    </div>
                                                </div>
                                                
                                                <div class='row'>
                                                    <div class="col-md-3">
                                                        <br />
                                                        <input class="form-control" id="inputLargo" placeholder='Largo' type="number" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <br />
                                                        <input class="form-control" id="inputAncho" placeholder='Ancho' type="number" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <br />
                                                        <input class="form-control" id="inputAlto" placeholder='Alto' type="number" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <br />
                                                        <input class="form-control" id="inputPeso" placeholder='Peso' type="number" />
                                                    </div>
                                                </div>

                                                <div class='row'>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputDireccionRecogida" placeholder='Dirección recogida' type="text" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputCiudadRecogida" placeholder='Ciudad Recogida' type="text" />
                                                    </div>
                                                </div>
                                                
                                                <div class='row'>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputNombreDestinatario" placeholder='Nombre Destinatario' type="text" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputDiDestinatario" placeholder='Cédula/Nit destinatario' type="text" />
                                                    </div>
                                                </div>

                                                <div class='row'>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputDireccionEntrega" placeholder='Dirección de Entrega' type="text" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <br />
                                                        <input class="form-control" id="inputCiudadEntrega" placeholder='Ciudad de Entrega' type="text" />
                                                    </div>
                                                </div>
                                                <br />

                                                <div class="d-grid gap-2" >
                                                    <input class="btn btn-primary" id="CrearOrden" type="submit" value="Crear Orden" />
                                                </div>
                                            
                                            </form>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
            </main>
        </div>
      )
    }