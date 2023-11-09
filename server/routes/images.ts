import express from 'express'
import request from 'superagent'

import 'dotenv/config'
const router = express.Router()
//console.log(process.env.IMAGEDB_API_TOKEN)

router.get('/', async (req, res) => {
  const response = await request
    .get('https://api.pexels.com/v1/search?query=nature')
    .set('Authorization', `${process.env.IMAGEDB_API_TOKEN}`)

  //console.log(response.body.photos)
  res.json(response.body.photos)
})

export default router
