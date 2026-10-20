"use client";

import { useState } from "react";
import Link from "next/link";

export default function BusinessDashboardPage() {
  const [sentOfferIds, setSentOfferIds] = useState<number[]>([]);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleSendOffer = (id: number, groupName: string) => {
    setSentOfferIds((prev) => [...prev, id]);
    showToast(`🎉「${groupName}」へごちそうオファーを送信しました！`);
  };

  const studentGroups = [
    {
      id: 1,
      group: "早稲田大学 2年女子 3人組",
      area: "高田馬場・新宿",
      target: "🥟 本格中華・点心",
      budget: "¥3,000 /人",
      careerTheme: "広告・マーケティング業界のリアルな若手実務について",
      applied: sentOfferIds.includes(1),
    },
    {
      id: 2,
      group: "慶應義塾大学 3年男子 2人組",
      area: "三田・田町・品川",
      target: "🥩 ガッツリ肉料理・ステーキ",
      budget: "¥4,000 /人",
      careerTheme: "総合コンサルやITメガベンチャーのインターン・選考対策",
      applied: sentOfferIds.includes(2),
    },
    {
      id: 3,
      group: "東大・東工大 理系院生 2人組",
      area: "秋葉原・神田・御茶ノ水",
      target: "🍣 寿司・海鮮居酒屋",
      budget: "¥3,500 /人",
      careerTheme: "AIエンジニアの最前線開発とスタートアップでの新規事業立ち上げ",
      applied: sentOfferIds.includes(3),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#121c2a]">
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#121c2a] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-xl flex items-center gap-1.5 animate-fade-in">
          <span className="material-symbols-outlined text-sm text-[#fda625]">check_circle</span>
          {toastMsg}
        </div>
      )}

      {/* 固定ヘッダー */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-xs">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#ff7043] to-[#fda625] flex items-center justify-center text-white text-base">
                🍽️
              </div>
              <span className="text-lg font-black text-[#121c2a] tracking-tight">Gochi</span>
            </Link>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
              for Business
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* 学生版切り替えリンク */}
            <Link
              href="/"
              className="text-xs font-bold text-[#ac3509] bg-orange-50 hover:bg-orange-100 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">school</span>
              <span>学生版ホームへ</span>
            </Link>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                佐
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-[#121c2a]">佐藤 健一</span>
                <span className="text-[10px] text-slate-500">サイバーテック</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* メインエリア */}
      <main className="flex-1 max-w-5xl w-full mx-auto pt-20 pb-20 px-4 flex flex-col gap-6">
        {/* ウェルカムバナー */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-[#ac3509] text-[10px] font-bold uppercase">
                企業管理画面
              </span>
              <span className="text-slate-400 text-xs">リアルタイム同期中</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-[#121c2a]">企業ダッシュボード</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              お疲れさまです、佐藤さん。今週の学生交流と食事会ステータスを確認しましょう。
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#6ffbbe]/30 text-[#006c49] text-xs font-bold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              認証企業アカウント
            </span>
          </div>
        </div>

        {/* 4大KPIカード */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">今月の参加食事会</span>
            <div className="my-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#121c2a]">1</span>
              <span className="text-xs text-slate-400">回</span>
            </div>
            <div className="text-[10px] text-[#006c49] font-bold flex items-center gap-0.5">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              枠消化: 1/2回
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">成立したマッチング</span>
            <div className="my-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#121c2a]">2</span>
              <span className="text-xs text-slate-400">組</span>
            </div>
            <div className="text-[10px] text-[#ff7043] font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff7043] animate-pulse"></span>
              今週開催予定 1組
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">食事代総支出</span>
            <div className="my-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#121c2a]">¥12,000</span>
            </div>
            <div className="text-[10px] text-[#006c49] font-bold">
              平均 ¥3,000 /人（予算内）
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col justify-between">
            <span className="text-xs text-slate-500 font-medium">学生からの評価</span>
            <div className="my-2 flex items-baseline gap-1">
              <span className="text-2xl font-black text-[#121c2a]">4.9</span>
              <span className="text-xs text-slate-400">/ 5.0</span>
            </div>
            <div className="text-[10px] text-[#865300] font-bold">
              満足度 100%（★5最多）
            </div>
          </div>
        </div>

        {/* 進行中の食事会（直近の予定） */}
        <section className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ff7043] text-xl">event_available</span>
              <h2 className="text-base font-bold text-[#121c2a]">進行中の食事会（直近の予定）</h2>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-[#6ffbbe]/30 text-[#006c49] text-xs font-bold">
              事前決済完了済
            </span>
          </div>

          <div className="bg-[#f8f9ff] rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-xs bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=200&auto=format&fit=crop&q=80"
                  alt="KINTAN"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#121c2a]">熟成和牛焼肉 渋谷KINTAN</span>
                  <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
                    個室予約済
                  </span>
                </div>
                <p className="text-xs text-[#ac3509] font-bold mt-0.5">来週金曜 11/1 19:00〜21:00</p>
                <p className="text-xs text-slate-500">参加者: 慶應・早稲田 マーケ志望3人組 ＆ 佐藤健一</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <Link
                href="/chat"
                className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#ff7043] text-xs font-bold text-center transition-colors"
              >
                チャットを開く
              </Link>
              <Link
                href="/checkin"
                className="flex-1 md:flex-none px-4 py-2 rounded-xl bg-[#ff7043] text-white text-xs font-bold text-center shadow-xs hover:brightness-105 transition-all"
              >
                当日チェックイン確認
              </Link>
            </div>
          </div>
        </section>

        {/* 募集中の学生グループ一覧（オファー送信可能） */}
        <section className="bg-white rounded-2xl p-5 shadow-xs border border-slate-100 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ac3509] text-xl">person_search</span>
              <h2 className="text-base font-bold text-[#121c2a]">
                募集中の学生グループ（オファー可能）
              </h2>
            </div>
            <span className="text-xs text-slate-400">新着順 3件</span>
          </div>

          <div className="flex flex-col gap-3">
            {studentGroups.map((group) => (
              <div
                key={group.id}
                className="p-4 rounded-2xl bg-[#f8f9ff] border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-orange-200 transition-colors"
              >
                <div className="flex flex-col gap-1.5 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-[#121c2a]">{group.group}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                      📍 {group.area}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-[#ac3509] font-bold">
                      希望: {group.target}
                    </span>
                    <span className="text-[10px] text-slate-400">予算目安: {group.budget}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    💬 <span className="font-semibold">相談テーマ:</span> {group.careerTheme}
                  </p>
                </div>

                <div className="shrink-0">
                  {group.applied ? (
                    <span className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-200 text-slate-500 text-xs font-bold">
                      <span className="material-symbols-outlined text-sm">check</span>
                      オファー送信済み
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleSendOffer(group.id, group.group)}
                      className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff7043] to-[#fda625] text-white text-xs font-bold shadow-xs active:scale-95 transition-transform"
                    >
                      ごちそうオファーを送る
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
