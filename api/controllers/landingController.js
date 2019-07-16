export default class LandingController {
    static register(app){
        app.post('/', (req, res) => {
            res.cookie('User', `${req.body.username}`);
            res.status(200).send({message: 'Submission successful.'})
        })
    }
}