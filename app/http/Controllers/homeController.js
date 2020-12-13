const Articals = require("../../modules/airtical")

function homeController() {
    return {
        index: (req, res) => {
            Articals.find().then((artical) => {
                // console.log(artical)
                return res.render('home', { articals: artical })
            })

        },
        id: (req, res) => {
            const id = req.params.id
            Articals.findById(req.params.id).then((artical) => {
                // console.log(artical)
                return res.render("artical", { artical: artical })
            })

        }
    }
}

module.exports = homeController