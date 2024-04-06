import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { IUsuario, IUsuarioESenha, IUsuarioLogado } from "@nx-monorepo/comum";

import { getCollection } from "../util/get-collection";

export const authRouter = Router();

authRouter.post('/login', async (req: Request, res: Response, next: NextFunction) => {

  const usuario: IUsuarioESenha = req.body;

  // TO BE DONE: validar entradas!!!!!

  const resultado = await getCollection<IUsuario>(
    req.app,
    'usuarios',
  ).findOne(usuario);

  if (resultado) {
    const sessao: IUsuarioLogado = {
      usuario: resultado,
    };
    res.json(sessao);
  } else {
    return next(new Error(`Login e/ou senha errados`));
  }

});
