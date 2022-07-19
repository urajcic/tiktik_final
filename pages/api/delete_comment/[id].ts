// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
 
import { client } from '../../../utils/client';
 



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    //   res.status(200).json({ name: 'response success' })
    console.log("Pokrenuo server")
    if (req.method === "PUT") {
        const { postId, commentId } = req.body;
        const { id }: any = req.query;
        console.log("Server post:", id)
      
        const data =  await client.patch(id).unset([`comments[_key=="${commentId}"]`]).commit()
      
     
      
            
        console.log("usao server", data.comments.length);
        res.status(200).json(data)
    }

}
