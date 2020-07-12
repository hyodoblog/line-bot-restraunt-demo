import * as express from 'express'
import handlerEvent from '../handlers/linePay'

const router: express.Router = express.Router()

router.get('/', async (req, res) => {
  handlerEvent(req)
    .then(() => {
      res.status(200).end()
    })
    .catch((err) => {
      console.error(err)
      res.status(500).end()
    })
})

export = router
