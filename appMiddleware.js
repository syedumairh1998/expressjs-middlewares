import express from 'express'
const app = express()



// ======== application level middleware =========== //

const appMiddleware = (request, response, next) => {
    console.log('app middleware called')
    next()
}
app.use('/user', appMiddleware) //used particularly for this route
app.use(appMiddleware) //used for all routes but not for nested route

app.get('/user', (request, response) => {
    response.send('root user called')
})


// ======== application level middleware =========== //

app.listen(3000, () => console.log('Port listening at 3000'))
