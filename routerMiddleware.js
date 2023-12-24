import experess from 'express'
const router = experess.Router()
import getStudent from './studentController.js'



const routerMiddleware = (request, response, next) => {
    console.log('router middleware called')
    next()
}
router.use('/get', routerMiddleware) //used particularly for this route
router.use(routerMiddleware) //used for all routes but not for nested route

router.get('/get', getStudent)

export default router
