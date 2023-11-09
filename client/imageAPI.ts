import request from 'superagent'

export async function getImages() {
  const response = await request.get('/api/v1/images')
  // console.log(response)
  console.log('hi')
  return response.body
}
