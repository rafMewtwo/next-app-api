import connection from '../../lib/connection';
import type { NextApiRequest, NextApiResponse } from 'next'

const collectionName = 'users';

export default async function findOne(req: NextApiRequest, res: NextApiResponse) {
  const r = await connection();

  const rx = await r.collection(collectionName).findOne({
    email:'ponciano.raf@gmail.com'
  });

  return res.status(200).json({ name: rx.name });
}
