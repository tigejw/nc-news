const {readEndpointsData, selectAllTopics, selectArticleByArticleId, selectAllArticles} = require("./model.js")

exports.getEndpoints = (req, res, next) => {
    readEndpointsData().then((endpointsData)=>{
        res.status(200).send({endpoints : endpointsData})
    })
    .catch((err)=>{
        next(err)
    })
}

exports.getTopics = (req, res, next) => {
    selectAllTopics().then((topicsData)=>{
        res.status(200).send({topics : topicsData})
    })
    .catch((err)=>{
        next(err)
    })
}

exports.getArticleByArticleId = (req, res, next) => {
    const {article_id} = req.params
    selectArticleByArticleId(article_id).then((article)=>{
        res.status(200).send({article : article})
    })
    .catch((err)=>{
        next(err)
    })
}

exports.getArticles = (req, res, next) => {
    selectAllArticles()
    .then((articlesData)=>{
        res.status(200).send({articles : articlesData})
    })
    .catch((err)=>{
        next(err)
    })
}