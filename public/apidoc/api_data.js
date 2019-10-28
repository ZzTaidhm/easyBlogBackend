define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/article/create",
    "title": "创建文章",
    "description": "<p>创建文章</p>",
    "name": "____",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "author",
            "description": "<p>作者</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>类型</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"data\" : {\n        \"author\": \"333\"\n           \"category\": \"333\"\n           \"content\": \"333\"\n           \"createdAt\": \"2019-10-23T02:39:52.000Z\"\n           \"id\": 6\n           \"title\": \"333\"\n           \"updatedAt\": \"2019-10-23T02:39:52.000Z\"\n           \"version\": 0\n    }\n    \"msg\": \"创建文章成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3008/api/v1/article/create"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/api/v1/article/query",
    "title": "获取文章列表",
    "description": "<p>获取文章列表</p>",
    "name": "______",
    "group": "Article",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : 200,\n    \"data\" : [\n\n    ]\n    \"msg\": \"创建文章成功\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3008/api/v1/article/query"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Article"
  }
] });
