export default class GameController {
    static register(app){
        app.get('/game', (req, res) => {
            res.send(req.cookies);
        })
    }
}