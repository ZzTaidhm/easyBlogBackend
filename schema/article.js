let Sequelize = require('sequelize');
let sequelizeDB = require('../config/db');

const article = sequelizeDB.define('article', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    //文章标题
    title:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
    },
    //作者
    author:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'author'
    },
    //内容
    content:{
        type: Sequelize.STRING,
        allowNull: false,
        field:'content'
    },
    //文章分类
    category:{
        type: Sequelize.STRING,
        allowNull: false,
        field: 'category'
    },
    // 创建时间
    createdAt:{
        type: Sequelize.DATE
    },
    // 更新时间
    updatedAt:{
        type: Sequelize.DATE
    }
},{
    // 不添加时间戳属性 (updatedAt, createdAt)
    timestamps: true,
    // 将自动设置所有属性的字段选项为下划线命名方式。
    // 不会覆盖已经定义的字段选项
    underscored: true,
    // 禁用修改表名; 默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数。 如果你不想这样，请设置以下内容
    freezeTableName: true,
    // 定义表的名称
    tableName: 'article',
    // 启用乐观锁定。 启用时，sequelize将向模型添加版本计数属性，
    // 并在保存过时的实例时引发OptimisticLockingError错误。
    // 设置为true或具有要用于启用的属性名称的字符串。
    version: true
});

article.sync({
    alter: true
}).then(() => console.log('article Completed!'));

module.exports = article;

