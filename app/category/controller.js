module.exports = {
    index : async (req, res) => {
        try {
            res.render('index', {
                title : 'Express Js'
            })
        } catch (error) {
            console.log(err);
        }
    }
}