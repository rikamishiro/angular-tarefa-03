import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { ILivro } from "@nx-monorepo/comum";

import { getCollection } from "../util/get-collection";
import { AuthorizedRequest, verificarTokenJwt } from "../util/jwt";

export const livroRouter = Router();

livroRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const livro: ILivro[] = await getCollection<ILivro>(
    req.app,
    'favoritos',
  ).find().toArray();
  res.json(livro);
});

livroRouter.use(verificarTokenJwt);

livroRouter.get('/:_id', async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;


  const livro: ILivro = await getCollection<ILivro>(
    req.app,
    'livros',
  ).findOne({
    _id: _id,
  });
  res.json(livro);
});

livroRouter.put('/:_id', async (req: AuthorizedRequest, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const livro: ILivro = req.body;


  const resultado: ILivro = await getCollection<ILivro>(
    req.app,
    'livros',
  ).findOneAndReplace({
    _id: _id,
  }, livro);

  if (resultado) {
    res.json(livro);
  } else {
    return next(new Error(`Livro com ID ${_id} não encontrado!`));
  }

});

livroRouter.post('/', async (req: AuthorizedRequest, res: Response, next: NextFunction) => {

  const livro: ILivro = req.body;


  const maxId = await getCollection<ILivro>(
    req.app,
    'livros',
  ).find().sort({ _id: -1 }).limit(1).toArray();
  const newId: number = (!maxId || maxId.length < 1) ? 1 : maxId[0]._id + 1;

  livro._id = newId;

  const resultado = await getCollection<ILivro>(
    req.app,
    'livros',
  ).insertOne(livro);

  if (resultado.acknowledged) {
    res.json(livro);
  } else {
    return next(new Error(`Não foi possível adicionar livro!`));
  }

});
