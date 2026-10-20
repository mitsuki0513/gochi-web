"use client";

import Link from "next/link";

export default function MyPage() {
  const history = [
    {
      id: 1,
      restaurant: "熟成和牛焼肉 渋谷KINTAN",
      date: "2026/11/01（予定）",
      company: "株式会社サイバーテック",
      mentor: "佐藤 健一さん",
      status: "マッチング確定",
      statusBg: "bg-orange-100 text-[#ac3509]",
    },
    {
      id: 2,
      restaurant: "築地 鮮魚個室割烹 江戸前",
      date: "2026/10/12",
      company: "ミライコンサルティング",
      mentor: "加藤 浩二さん",
      status: "食事完了（★5）",
      statusBg: "bg-emerald-100 text-[#006c49]",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#121c2a]">
      {/* 固定ヘッダー */}
      <header className="fixed top-0 inset-x-0 max-w-md mx-auto z-40 bg-white/90 backdrop-blur-xl shadow-xs border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-9 text-[#121c2a] text-xs font-semibold tracking-tight">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-base">
            <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-sm">wifi</span>
            <span className="material-symbols-outlined text-sm">battery_full</span>
          </div>
        </div>

        <div className="h-14 px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Link
              href="/"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#121c2a] hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-base font-bold text-[#121c2a]">マイページ</h1>
          </div>

          <Link
            href="/business"
            className="text-xs font-bold text-[#ac3509] bg-orange-50 hover:bg-orange-100 px-2.5 py-1 rounded-full transition-colors flex items-center gap-0.5"
          >
            <span>👔 企業版へ</span>
          </Link>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col pt-24 pb-28 px-4 gap-4">
        {/* プロフィールカード */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 text-white flex items-center justify-center text-xl font-bold shadow-xs">
              🎓
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-extrabold text-[#121c2a]">りょうた</span>
                <span className="text-[10px] bg-[#6ffbbe]/30 text-[#006c49] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified
                  </span>
                  学生認証済
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">慶應義塾大学 経済学部 3年（26卒）</p>
              <p className="text-[11px] text-slate-400">志望業界: IT・Web / マーケティング</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
            <div className="p-2 bg-[#f8f9ff] rounded-xl">
              <div className="text-[10px] text-slate-500">ごちそう経験</div>
              <div className="text-sm font-bold text-[#ac3509]">2回</div>
            </div>
            <div className="p-2 bg-[#f8f9ff] rounded-xl">
              <div className="text-[10px] text-slate-500">参加グループ</div>
              <div className="text-sm font-bold text-[#121c2a]">1組</div>
            </div>
            <div className="p-2 bg-[#f8f9ff] rounded-xl">
              <div className="text-[10px] text-slate-500">レビュー評価</div>
              <div className="text-sm font-bold text-[#006c49]">★5.0</div>
            </div>
          </div>
        </div>

        {/* 参加中グループ */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#121c2a] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#ff7043]">groups</span>
              所属グループ
            </span>
            <span className="text-[10px] text-slate-400">メンバー3名</span>
          </div>
          <div className="p-3 bg-[#f8f9ff] rounded-xl flex items-center justify-between border border-slate-100">
            <div>
              <div className="text-xs font-bold text-[#121c2a]">慶應・早稲田 マーケ志望3人組</div>
              <div className="text-[10px] text-slate-500">メンバー: りょうた（幹事）、あやか、けん</div>
            </div>
            <span className="text-xs text-[#006c49] font-bold">募集中</span>
          </div>
        </div>

        {/* ごちそう履歴 */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#121c2a] flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#fda625]">history_edu</span>
              ごちそう履歴
            </span>
            <span className="text-[10px] text-slate-400">累計 2回</span>
          </div>

          <div className="flex flex-col gap-2">
            {history.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-[#f8f9ff] border border-slate-100 flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#121c2a]">{item.restaurant}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.statusBg}`}>
                    {item.status}
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 flex items-center justify-between mt-0.5">
                  <span>ごちそう企業: {item.company}</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 安心・安全メニュー */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex flex-col gap-2">
          <span className="text-xs font-bold text-[#121c2a] flex items-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#006c49]">shield</span>
            安全・サポート
          </span>
          <div className="flex flex-col divide-y divide-slate-100 text-xs">
            <Link
              href="/safety"
              className="py-2.5 flex items-center justify-between text-slate-700 hover:text-[#ff7043]"
            >
              <span>セーフティセンター・利用規約</span>
              <span className="material-symbols-outlined text-sm text-slate-400">chevron_right</span>
            </Link>
            <div className="py-2.5 flex items-center justify-between text-slate-700">
              <span>大学メールアドレス認証</span>
              <span className="text-[#006c49] font-bold">認証済み ✓</span>
            </div>
            <div className="py-2.5 flex items-center justify-between text-slate-700">
              <span>緊急通報窓口・相談</span>
              <span className="text-slate-400">24時間対応</span>
            </div>
          </div>
        </div>
      </main>

      {/* 固定ボトムナビ */}
      <nav className="fixed bottom-0 inset-x-0 max-w-md mx-auto z-40 bg-white/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-100 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          <Link href="/" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-[#ff7043]">
            <span className="material-symbols-outlined text-2xl">home</span>
            <span className="text-[10px] mt-0.5">ホーム</span>
          </Link>
          <Link href="/create" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-[#ff7043]">
            <span className="material-symbols-outlined text-2xl">add_circle</span>
            <span className="text-[10px] mt-0.5">募集</span>
          </Link>
          <Link href="/offers" className="flex flex-col items-center justify-center w-14 h-full text-slate-400 hover:text-[#ff7043] relative">
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            <span className="text-[10px] mt-0.5">マッチ</span>
          </Link>
          <Link href="/mypage" className="flex flex-col items-center justify-center w-14 h-full text-[#ff7043] font-bold">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
            <span className="text-[10px] mt-0.5">マイページ</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
