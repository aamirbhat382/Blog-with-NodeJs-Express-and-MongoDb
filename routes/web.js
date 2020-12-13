const homeController = require("../app/http/Controllers/homeController")


function init(app) {
    app.get('/', homeController().index)
    app.get("/contact", (_req, res) => {
        res.render("contact")
    })
    app.get("/:id", homeController().id)
}

module.exports = init