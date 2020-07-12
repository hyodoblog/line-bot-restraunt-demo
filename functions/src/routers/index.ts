import * as express from 'express'
import { config, Line } from '../line.config'
import lineEvent from '../handlers/lineEvent'

const router: express.Router = express.Router()

router.get('/', (_, res) => {
  console.log('Hello World')
  res.send('Hello World!')
})

router.post('/', Line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(lineEvent))
    .then((result) => {
      console.log(result)
      res.status(200).end()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

export = router
