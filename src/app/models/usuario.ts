export class Usuario {
    constructor(
        public apellidos: string,
        public nombres: string,
        public email: string,
        public password: string,
        public telefono: string,
        public direccion: string,
        public rol:any
    ) { }
}


export class LoginStatus {
    constructor(
        public codigo: string,
        public mensaje: string
    ) { }
}
