'use client'

import { useState } from 'react'

export default function Practice6Page() {

// 生徒の型
type Student = {
  name: string
  score: number
}

// 初期データ
const [students, setStudents] = useState<Record<string, Student>>({
  student1: { name: '田中', score: 80 },
  student2: { name: '佐藤', score: 65 },
  student3: { name: '鈴木', score: 92 },
})

// 🟡 問題①: 生徒を追加する関数を書いてみよう
const addQuantity = () =>{
  setStudents(prev => ({
  ...prev,
  student4:{ name: '高橋', score: 50 }
  }))
}

// 🟡 問題②: 点数を更新する関数を書いてみよう
const updateScore = (key : string) => {
  setStudents (prev => ({
    ...prev,
    [key]:{...prev[key],score:prev[key].score+5}
  })
  )
}

// 🟡 問題③: 生徒を削除する関数を書いてみよう
const deleteStudent = (key : string) =>{
  setStudents (prev =>
    Object.fromEntries(
      Object.entries(prev).filter(([studentKey]) => studentKey !== key)
    )
  )}

// 🟡 問題④: 平均点を出す処理を書いてみよう
const totalScore = Object.keys(students).reduce((合計, key) => {
  return 合計 + students[key].score},0)

const average = totalScore / Object.keys(students).length

return (
  <div className="max-w-md mx-auto mt-10 space-y-6 p-6">
    <h2 className="font-bold">成績管理</h2>
    <ul>
      {Object.keys(students).map(key => (
        <li key={key}>
          {students[key].name} / {students[key].score}点
        <button
         onClick={() =>updateScore(key)}
        className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
    >
      🟡 点数を更新ボタン
    </button>
    <button
    onClick={() => deleteStudent(key)}
    className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
    >
     🔵生徒を削除ボタン 
    </button>

    </li>
      )
      )}
    </ul>
    <button
      onClick={addQuantity}
      className="rounded-xl bg-gray-900 text-white px-4 py-2 text-sm"
    >
      🟣 生徒を追加
    </button>

    {/* 🟡 ここに人数表示・平均点表示を追加してみよう */}
  <p>平均={average}</p>
  <p>人数={Object.keys(students).length}人</p>
  </div>
)}
