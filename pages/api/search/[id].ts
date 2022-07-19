import type { NextApiRequest, NextApiResponse } from 'next';

import { searchPostsQuery } from '../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { search } = req.query;
    const { id } = req.query;
    console.log("Server side get id", id)
    console.log("Server side search", search)

     
    const videosQuery = searchPostsQuery(id);

    const videos = await client.fetch(videosQuery);

    res.status(200).json(videos);
  }
}