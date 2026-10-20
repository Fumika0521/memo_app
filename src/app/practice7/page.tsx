'use client'

import { useState } from 'react'

export default function Practice7Page() {

// メンバーの型
type Member = {
  name: string
  position: string
  number: number
}

// 初期データ
const [members, setMembers] = useState<Record<string, Member>>({
  member1: { name: '荒木', position: 'ショート', number: 6 },
  member2: { name: '井端', position: 'セカンド', number: 2 },
  member3: { name: '福留', position: 'ライト', number: 1 },
})

// 🟡 問題①: メンバーを追加する関数を書いてみよう
const addQuantity = () => {
  setMembers (prev => ({
  ...prev,
  member4 :{name: '渡辺', position: 'ピッチャー', number: 4 }
}))
}

// 🟡 問題②: ポジションを変更する関数を書いてみよう

const updatePosition = (key: string, newPosition: string) => {
  setMembers(prev =>({
    ...prev,
    [key]:{...prev[key], position: newPosition}
  }))
}

// 🟡 問題③: メンバーを脱退(削除)させる関数を書いてみよう
const deleteMember = (key: string) => {
  setMembers (prev => 
    Object.fromEntries(
      Object.entries(prev).filter(([MemberKey]) => MemberKey !== key)
    )
  )
}

// 🟡 問題④: 人数を数える処理を書いてみよう

return (
  <div className="max-w-md mx-auto mt-10 space-y-6 p-6">
    <h2 className="font-bold">メンバー管理</h2>
    <ul>
      {Object.keys(members).map(key => (
        <li key={key} className="flex items-center justify-between">
          <span>
            {members[key].name} / {members[key].position} / #{members[key].number}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => updatePosition(key, 'ピッチャー')}
              className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
            >
              🔴 ポジション変更
            </button>
            <button
              onClick={() => deleteMember(key)}
              className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
            >
              🟢 削除
            </button>
          </div>
        </li>
      ))}
    </ul>
       <button
       onClick={addQuantity}
       className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
       >🟠メンバー追加ボタン</button>
    {/* 🟡 ここに追加ボタン・人数表示を追加してみよう */}
  </div>
)
}
