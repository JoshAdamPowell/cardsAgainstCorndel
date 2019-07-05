
export default class TestController {
    static register(app){
        app.get('/test', (req, res) => {
            res.json({"hello" : "world"});
        })
    }
}