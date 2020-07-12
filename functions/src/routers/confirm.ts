import * as express from 'express'
import { config, Line } from '../line.config'
import handlerEvent from '../handlers/linePay'

const router: express.Router = express.Router()

router.get('/', async (req, res) => {
  await handlerEvent(req)
  res.status(200)
})

router.post('/', Line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handlerEvent))
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
