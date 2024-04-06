import {
  NextFunction,
  Request,
  Response,
  Router,
} from "express";

import { IFavorito } from "@nx-monorepo/comum";

import { getCollection } from "../util/get-collection";

export const favoritoRouter = Router();

favoritoRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const favoritos: IFavorito[] = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).find().toArray();
  res.json(favoritos);
});

favoritoRouter.get('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;

  // TO BE DONE: validar entradas!!!!!

  const favorito: IFavorito = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOne({
    _id: _id,
  });
  res.json(favorito);
});

favoritoRouter.put('/:_id', async (req: Request, res: Response, next: NextFunction) => {
  const _id: number = +req.params._id;
  const favorito: IFavorito = req.body;

  // TO BE DONE: validar entradas!!!!!

  const resultado: IFavorito = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).findOneAndReplace({
    _id: _id,
  }, favorito);

  if (resultado) {
    res.json(favorito);
  } else {
    return next(new Error(`Favorito com ID ${_id} não encontrado!`));
  }

});

favoritoRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {

  const favorito: IFavorito = req.body;

  // TO BE DONE: validar entradas!!!!!

  const maxId = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).find().sort({ _id: -1 }).limit(1).toArray();
  const newId: number = (!maxId || maxId.length < 1) ? 1 : maxId[0]._id + 1;

  favorito._id = newId;

  const resultado = await getCollection<IFavorito>(
    req.app,
    'favoritos',
  ).insertOne(favorito);

  if (resultado.acknowledged) {
    res.json(favorito);
  } else {
    return next(new Error(`Não foi possível criar o favorito!`));
  }

});
