
export class Tarefa {
  _id: number;
  tituto: string = '';
  concluida: boolean;

  constructor(id: number, titulo: string, concluida: boolean) {
    this._id = id;
    this.tituto = titulo;
    this.concluida = concluida;
  }

  inserir(): void{
    this._id
  }
  listar(): void{

  }
  editar(): void{

  }
  remover(): void{

  }
}


