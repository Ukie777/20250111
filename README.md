##架構圖
+-------------------+        +-------------------+
|                   |        |                   |
|   前端 (Frontend) |        |   後端 (Backend)  |
|                   |        |                   |
| - index.html      |        | - index.js        |
| - app.js          |        |                   |
|                   |        |                   |
+---------+---------+        +---------+---------+
          |                            |
          |                            |
          |                            |
          |                            |
          |                            |
          |                            |
          |                            |
          |                            |
+---------v---------+        +---------v---------+
|                   |        |                   |
|   使用者 (User)   |        |   資料庫 (Database)|
|                   |        |                   |
|                   |        | - MongoDB         |
|                   |        |                   |
+-------------------+        +-------------------+

##流程圖
[使用者]
    |
    v
[在網頁上輸入訂單資訊，點擊 "Place Order" 按鈕]
    |
    v
[前端 (app.js) 發送 POST 請求至 /orders]
    |
    v
[後端 (index.js) 接收請求，將訂單儲存至 MongoDB]
    |
    v
[使用者點擊查詢按鈕]
    |
    v
[前端 (app.js) 發送 GET 請求至 /orders?customerName=查詢條件]
    |
    v
[後端回傳符合條件的訂單資料]
    |
    v
[前端 (app.js) 顯示查詢結果]
    |
    v
[使用者點擊刪除按鈕]
    |
    v
[前端 (app.js) 發送 DELETE 請求至 /orders/:id]
    |
    v
[後端刪除指定的訂單]


##api

1.新增訂單

URL： /orders
方法： POST
請求範例：
json
複製程式碼
{
  "customerName": "John Doe",
  "items": [
    { "name": "Apple", "quantity": 3, "price": 10 }
  ],
  "totalAmount": 30
}
回應範例：
json
複製程式碼
{
  "_id": "60d0fe4f5311236168a109ca",
  "customerName": "John Doe",
  "items": [
    { "name": "Apple", "quantity": 3, "price": 10 }
  ],
  "totalAmount": 30,
  "orderDate": "2025-01-09T10:15:30.000Z",
  "status": "pending"
}


2.查詢訂單

URL： /orders?customerName=John
方法： GET
回應範例：
json
複製程式碼
[
  {
    "_id": "60d0fe4f5311236168a109ca",
    "customerName": "John Doe",
    "items": [
      { "name": "Apple", "quantity": 3, "price": 10 }
    ],
    "totalAmount": 30,
    "orderDate": "2025-01-09T10:15:30.000Z",
    "status": "pending"
  }
]

3.刪除訂單

URL： /orders/:id
方法： DELETE
回應範例：
json
複製程式碼
{
  "message": "Order deleted successfully",
  "orderId": "60d0fe4f5311236168a109ca"
}

4.更新訂單狀態

URL： /orders/:id
方法： PUT
請求範例：
json
複製程式碼
{
  "status": "completed"
}
回應範例：
json
複製程式碼
{
  "_id": "60d0fe4f5311236168a109ca",
  "customerName": "John Doe",
  "items": [
    { "name": "Apple", "quantity": 3, "price": 10 }
  ],
  "totalAmount": 30,
  "orderDate": "2025-01-09T10:15:30.000Z",
  "status": "completed"
}
