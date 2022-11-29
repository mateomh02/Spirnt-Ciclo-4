import React from 'react'

export function Registro() {
  return (
    <>
        <body class="bg-dark">
            <div id="layoutAuthentication">
                <div id="layoutAuthentication_content">
                    <main>
                        <div>
                            <div class="row justify-content-center">
                                <div class="col-lg-5">
                                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                                        <div class="card-header"><h3 class="text-center font-weight-light my-4">Registro de Usuario</h3></div>
                                            <div class="card-body">
                                                <form>
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="inputEmail" type="text" placeholder="Nombre" />
                                                        <label for="inputEmail">Nombre</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="inputEmail" type="text" placeholder="Usuario" />
                                                        <label for="inputEmail">Usuario</label>
                                                    </div>
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="inputEmail" type="password" placeholder="Contraseña" />
                                                        <label for="inputEmail">Contraseña</label>
                                                    </div>                                                                                        
                                                    <div class="form-floating mb-3">
                                                        <input class="form-control" id="inputPassword" type="email" placeholder="Email" />
                                                        <label for="inputPassword">Email</label>
                                                    </div>
                                                    <div class="d-grid gap-2" >
                                                        <input class="btn btn-primary" id="inputPassword" type="submit" value="Registrarse" />
                                                    </div>
                                        
                                                </form>
                                        
                                            </div>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                <div id="layoutAuthentication_footer">
                    <footer class="py-4 bg-light mt-auto">
                         <div class="container-fluid px-4">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Derechos Reservados &copy; Equipo 9 NRC 2136</div>
                            <div>
                                <a href="#">Política de Privacidad</a>
                                <a href="#">Términos & Condiciones</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
        <script src="js/scripts.js"></script>
    </body>
    
    </>
  )
}
