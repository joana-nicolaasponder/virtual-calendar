import express from 'express'
import request from 'superagent'

import 'dotenv/config'
const router = express.Router()

router.get('/', async (req, res) => {
  const response = await request
    .get('https://api.thecatapi.com/v1/images/search?limit=30')

    .set('Authorization', `Bearer${process.env.IMAGEDB_API_TOKEN}`)
  // console.log(response.body)
  res.json(response.body)
})

export default router
