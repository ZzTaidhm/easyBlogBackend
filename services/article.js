const Article = require('../schema/article');

class ArticleService {
    /**
     * 新增文章
     */
    static async createArticle(data){
        return await Article.create({
            title: data.title, //标题
            author: data.author,  //作者
            content: data.content,  //文章内容
            category: data.category //文章分类
        })
    }

    /**
     * 查询文章详情
     */
    static async getArticleDetail(id){
        return await Article.findOne({
            where: {
                id
            }
        })
    }

    /**
     * 获取文章列表
     */
    static async getArticleList(){
        return await Article.findAll();
    }
}

module.exports = ArticleService;