export default class LandingController {
    static register(app){
        app.get('/', (req, res) => {
            res.cookie(username, req.body.username)
        })
    }
}