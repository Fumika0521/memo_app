'use client'

import { useState } from 'react'

export default function Practice5Page() {

// practice4のショッピングカートと同じ構造
type Product = {
  name : string
  price : number
  quantity : number
}

const [product, setProduct] = useState<Record<string, Product>>({
  product1 : {name:'りんご', price:100, quantity:1},
  product2 : {name:'バナナ', price:80, quantity:2},
  product3 : {name:'みかん', price:60, quantity:3}
})

// 個数を1増やす(practice4と同じ)
const addQuantity = (key : string) => {
  setProduct(prev =>({
    ...prev,
    [key]:{...prev[key], quantity:prev[key].quantity+1}
  }))
}

// 商品を削除する
// Object.entries(prev)でprevを[key, value]の配列に変換 →
// 削除したいkey以外だけfilterで残す →
// Object.fromEntriesで配列からまたオブジェクトに戻す
const deleteProduct = (key : string) => {
  setProduct(prev =>
    Object.fromEntries(
      Object.entries(prev).filter(([productKey]) => productKey !== key)
    )
  )
}

const total = Object.keys(product).reduce((合計, key) => {
  return 合計 + product[key].price * product[key].quantity
}, 0)

return (
  <div className="max-w-md mx-auto mt-10 space-y-6 p-6">
    <h2 className="font-bold">ショッピングカート(削除ボタン練習)</h2>
    <ul>
      {Object.keys(product).map(key => (
        <li key={key}>
          {product[key].name} / {product[key].price}円 / {product[key].quantity}個
          <button
            onClick={() => addQuantity(key)}
            className="ml-2 rounded-lg bg-blue-500 text-white px-2 py-0.5 text-sm"
          >
            🔵 追加
          </button>
          <button
            onClick={() => deleteProduct(key)}
            className="ml-2 rounded-lg bg-red-500 text-white px-2 py-0.5 text-sm"
          >
            ❌ 削除
          </button>
        </li>
      ))}
    </ul>
    <p>合計金額：{total}円</p>
  </div>
)
}
