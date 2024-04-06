export interface IUsuario {

  _id: number;

  login: string;

  senha: string;

  nome: string;

  administrador: boolean;

}

export type IUsuarioESenha = Pick<IUsuario, 'login' | 'senha'>;
export interface IUsuarioLogado {

  usuario: IUsuario

}
