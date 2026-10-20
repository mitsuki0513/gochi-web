"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ジャンルデータ
const GENRES = [
  {
    id: "yakiniku",
    name: "焼肉",
    en: "Yakiniku",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "sushi",
    name: "寿司",
    en: "Sushi",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "izakaya",
    name: "居酒屋",
    en: "Izakaya",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "italian",
    name: "イタリアン",
    en: "Italian",
    img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "ramen",
    name: "ラーメン",
    en: "Ramen",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "teishoku",
    name: "定食・和食",
    en: "Teishoku",
    img: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=300&auto=format&fit=crop&q=80",
  },
];

// 注目企業データ
const COMPANIES = [
  {
    id: "ct",
    initials: "CT",
    name: "サイバーテック株式会社",
    tag: "IT・Web",
    rating: 4.9,
    reviews: 142,
    bgClass: "bg-[#ffdbd0]/60 text-[#ac3509]",
  },
  {
    id: "mc",
    initials: "MC",
    name: "ミライコンサルティング",
    tag: "総合コンサル",
    rating: 4.8,
    reviews: 89,
    bgClass: "bg-[#ffddb9]/70 text-[#865300]",
  },
  {
    id: "fd",
    initials: "FD",
    name: "フューチャーデザイン",
    tag: "広告・クリエイティブ",
    rating: 5.0,
    reviews: 64,
    bgClass: "bg-[#6ffbbe]/40 text-[#006c49]",
  },
];

// 学生グループ募集データ
const STUDENT_POSTS = [
  {
    id: 1,
    group: "早稲田 2年女子 3人",
    location: "高田馬場",
    budget: "希望予算 ¥3,000 /人",
    title: "🥟 高田馬場で本格中華食べたい！",
    desc: "テスト終わりにお腹いっぱい小籠包や餃子を食べながら、マーケや広告業界で働く社会人のリアルな日常を聞きたいです！",
  },
  {
    id: 2,
    group: "慶応 3年男子 2人",
    location: "三田・田町",
    budget: "希望予算 ¥4,000 /人",
    title: "🥩 三田でガッツリ肉を囲みたい！",
    desc: "ゼミ後にガッツリステーキか焼肉希望！サマーインターンや総合コンサルのケース面接のコツなどフランクにお話ししたいです。",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");
  const [bookmarked, setBookmarked] = useState<number[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    showToast(bookmarked.includes(id) ? "ブックマークを解除しました" : "ブックマークに保存しました！");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#121c2a]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-[#121c2a] text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg animate-fade-in flex items-center gap-1.5">
          <span className="material-symbols-outlined text-sm text-[#fda625]">info</span>
          {toastMessage}
        </div>
      )}

      {/* 固定ヘッダー */}
      <header className="fixed top-0 inset-x-0 max-w-md mx-auto z-40 bg-white/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        {/* iOS風ステータスバー */}
        <div className="flex items-center justify-between px-4 h-9 text-[#121c2a] text-xs font-semibold tracking-tight">
          <span>9:41</span>
          <div className="flex items-center gap-1.5 text-base">
            <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-sm">wifi</span>
            <span className="material-symbols-outlined text-sm">battery_full</span>
          </div>
        </div>

        {/* アプリバー */}
        <div className="h-14 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Gochiロゴマーク */}
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#ff7043] to-[#fda625] flex items-center justify-center shadow-sm">
              <span className="text-white text-lg">🍽️</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold text-[#121c2a] leading-none tracking-tight">
                Gochi
              </span>
              <span className="text-[10px] text-[#8d7169] uppercase font-bold tracking-wider mt-0.5">
                Home
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => showToast("新着の通知は1件です")}
              aria-label="通知"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#59413a] hover:text-[#ac3509] transition-colors relative"
              type="button"
            >
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#ff7043] ring-2 ring-white"></span>
            </button>
            <button
              onClick={() => showToast("マイページからプロフィールを編集できます")}
              aria-label="アカウント"
              className="w-9 h-9 rounded-full flex items-center justify-center p-0.5 ring-1 ring-slate-200"
              type="button"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-400 to-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-inner">
                🎓
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* メインスクロールエリア */}
      <main className="flex-1 flex flex-col pt-24 pb-28 px-4 gap-5">
        {/* 1. ヒーローバナー (募集作成CTA) */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff7043] via-[#fda625] to-[#865300] p-4 text-white shadow-xl">
          <div className="relative z-10 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium text-xs">
                <span className="material-symbols-outlined text-sm">celebration</span>
                大学生限定・無料ごはん
              </span>
              <span className="text-2xl animate-bounce">🍣</span>
            </div>

            <div className="flex flex-col mt-0.5">
              <h2 className="text-2xl font-extrabold tracking-tight leading-tight">
                今日、何食べる？
              </h2>
              <p className="text-xs text-white/90 mt-1 leading-relaxed">
                友達を誘って、行きたいお店や料理を募集しよう！憧れの先輩社員がごちそうしてくれます。
              </p>
            </div>

            <Link
              href="/create"
              className="mt-2 w-full h-12 rounded-xl bg-white text-[#ac3509] font-bold text-sm shadow-md flex items-center justify-center gap-2 transform active:scale-95 hover:bg-orange-50 transition-all"
            >
              <span className="material-symbols-outlined text-xl font-bold">add_circle</span>
              <span>＋ 友達と募集を作成する</span>
            </Link>
          </div>

          {/* 装飾用背景ブラー */}
          <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/15 blur-2xl pointer-events-none"></div>
          <div className="absolute -top-10 -left-6 w-32 h-32 rounded-full bg-orange-400/30 blur-xl pointer-events-none"></div>
        </section>

        {/* 2. 安心・安全のごちそう保証バナー */}
        <section className="rounded-2xl bg-[#6ffbbe]/20 border border-[#00b27b]/20 p-3.5 flex items-start gap-3 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#00b27b] flex items-center justify-center shrink-0 text-white shadow-xs">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-[#002113] font-bold">安心・安全のごちそう保証</span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#006c49]/10 text-[10px] text-[#006c49] font-bold">
                企業審査済み
              </span>
            </div>
            <p className="text-[11px] text-[#005236] mt-0.5 leading-snug">
              認証済み企業のみが全額ごちそう！執拗な就活勧誘や個人連絡先の交換は規約で厳重に禁止されています 🛡️
            </p>
          </div>
        </section>

        {/* 3. 進行中の募集ステータス (リアルタイムカード) */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#fda625] animate-pulse"></span>
              <h3 className="text-sm font-bold text-[#121c2a]">進行中の募集ステータス</h3>
            </div>
            <span className="text-[11px] text-[#8d7169]">リアルタイム更新</span>
          </div>

          <div className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 flex flex-col gap-3 relative overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-[#ffddb9] text-[#2b1700] text-xs font-bold">
                    承認待ち
                  </span>
                  <span className="text-xs text-[#59413a] flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    金曜 19:00〜
                  </span>
                </div>
                <p className="text-base font-bold text-[#121c2a] mt-1.5">
                  渋谷 熟成和牛焼肉
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex -space-x-1.5 overflow-hidden py-0.5">
                    <span className="inline-block h-6 w-6 rounded-full bg-rose-200 text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                      👩
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full bg-blue-200 text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                      👨
                    </span>
                    <span className="inline-block h-6 w-6 rounded-full bg-amber-200 text-[11px] font-bold flex items-center justify-center ring-2 ring-white">
                      👱‍♀️
                    </span>
                  </div>
                  <span className="text-xs text-[#59413a] font-medium">
                    参加メンバー: あなた含む 3名
                  </span>
                </div>
              </div>

              <span className="w-10 h-10 rounded-full bg-[#ffdbd0] flex items-center justify-center text-[#ac3509] shrink-0">
                <span className="material-symbols-outlined text-xl">restaurant</span>
              </span>
            </div>

            {/* 企業からの申請コールアウト */}
            <div className="p-2.5 rounded-xl bg-[#eff4ff] flex items-center justify-between gap-2 border border-blue-50">
              <div className="flex items-center gap-2 min-w-0">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7043] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff7043]"></span>
                </span>
                <p className="text-xs text-[#121c2a] truncate">
                  大手IT企業メンターから<span className="text-[#ac3509] font-bold">1件の申請</span>が届いています！
                </p>
              </div>
              <Link
                href="/offers"
                className="shrink-0 px-2.5 py-1 rounded-full bg-[#ff7043] text-white text-xs font-bold flex items-center gap-0.5 active:scale-95 transition-transform shadow-xs"
              >
                <span>確認</span>
                <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. 人気の料理ジャンル (カルーセル) */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ff7043] text-lg">local_fire_department</span>
              <h3 className="text-sm font-bold text-[#121c2a]">人気の料理ジャンル</h3>
            </div>
            <button
              onClick={() => showToast("全ジャンル一覧を表示")}
              className="text-xs text-[#ac3509] font-semibold"
            >
              すべて見る
            </button>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-1 -mx-4 px-4 no-scrollbar snap-x">
            {GENRES.map((g) => (
              <div
                key={g.id}
                onClick={() => showToast(`${g.name}の募集を検索します`)}
                className="snap-start shrink-0 flex flex-col items-center gap-1.5 w-20 cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-2xl bg-slate-200 overflow-hidden relative shadow-xs group-active:scale-95 group-hover:ring-2 group-hover:ring-[#ff7043] transition-all">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={g.name}
                    src={g.img}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-1">
                    <span className="text-white text-xs font-bold drop-shadow-xs">{g.name}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#59413a] font-medium">{g.en}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 参加中の注目企業 */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#865300] text-lg">domain</span>
              <h3 className="text-sm font-bold text-[#121c2a]">参加中の注目企業</h3>
            </div>
            <span className="text-[11px] text-[#8d7169]">全企業公認メンター</span>
          </div>

          <div className="flex flex-col gap-2">
            {COMPANIES.map((company) => (
              <div
                key={company.id}
                className="rounded-2xl bg-white p-3.5 shadow-sm border border-slate-100 flex items-center justify-between gap-3 hover:border-orange-100 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm ${company.bgClass}`}
                  >
                    {company.initials}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-[#121c2a] truncate">
                        {company.name}
                      </span>
                      <span
                        className="material-symbols-outlined text-[#006c49] text-sm shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                        title="認証済み企業"
                      >
                        verified
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="px-1.5 py-0.5 rounded-full bg-[#e6eeff] text-[10px] text-[#59413a] font-medium">
                        {company.tag}
                      </span>
                      <div className="flex items-center text-[#865300] text-xs font-bold">
                        <span
                          className="material-symbols-outlined text-xs"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                        <span className="ml-0.5">{company.rating}</span>
                        <span className="text-[#8d7169] text-[10px] font-normal ml-0.5">
                          ({company.reviews}件)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => showToast(`${company.name}の募集一覧を表示`)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-[#eff4ff] text-[#121c2a] text-xs font-semibold hover:bg-[#dee9fc] active:scale-95 transition-all"
                  type="button"
                >
                  募集を見る
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 近くの学生グループ募集 */}
        <section className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#ac3509] text-lg">diversity_3</span>
              <h3 className="text-sm font-bold text-[#121c2a]">近くの学生グループ募集</h3>
            </div>
            <button
              onClick={() => showToast("学生グループ一覧を表示")}
              className="text-xs text-[#ac3509] font-semibold"
            >
              もっと見る
            </button>
          </div>

          <div className="flex flex-col gap-2.5">
            {STUDENT_POSTS.map((post) => (
              <div
                key={post.id}
                className="rounded-2xl bg-white p-4 shadow-sm border border-slate-100 flex flex-col gap-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#e6eeff] text-xs font-bold text-[#121c2a]">
                      {post.group}
                    </span>
                    <span className="text-[11px] text-[#8d7169] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">location_on</span>
                      {post.location}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#006c49] font-bold bg-[#6ffbbe]/25 px-2 py-0.5 rounded-full">
                    {post.budget}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 mt-0.5">
                  <p className="text-sm font-bold text-[#121c2a]">{post.title}</p>
                  <button
                    onClick={() => toggleBookmark(post.id)}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      bookmarked.includes(post.id)
                        ? "bg-orange-100 text-[#ff7043]"
                        : "bg-slate-100 text-[#59413a] hover:bg-slate-200"
                    }`}
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-base"
                      style={{
                        fontVariationSettings: bookmarked.includes(post.id)
                          ? "'FILL' 1"
                          : "'FILL' 0",
                      }}
                    >
                      bookmark
                    </span>
                  </button>
                </div>

                <p className="text-xs text-[#59413a] leading-relaxed line-clamp-2">
                  {post.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. お知らせ・新着情報 */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8d7169] text-lg">campaign</span>
            <h3 className="text-sm font-bold text-[#121c2a]">お知らせ・新着情報</h3>
          </div>

          <div className="rounded-2xl bg-[#eff4ff] p-3.5 flex flex-col gap-2.5 border border-blue-50">
            <div className="flex items-start gap-2.5 pb-2 border-b border-blue-100/50">
              <span className="px-1.5 py-0.5 rounded bg-[#ff7043] text-white text-[10px] font-bold shrink-0">
                EVENT
              </span>
              <div className="flex flex-col min-w-0">
                <p className="text-xs font-semibold text-[#121c2a] truncate">
                  金曜夜のプレミアムマッチング枠が拡大しました！
                </p>
                <span className="text-[10px] text-[#8d7169] mt-0.5">本日 11:30</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="px-1.5 py-0.5 rounded bg-[#dee9fc] text-[#59413a] text-[10px] font-bold shrink-0">
                UPDATE
              </span>
              <div className="flex flex-col min-w-0">
                <p className="text-xs font-semibold text-[#121c2a] truncate">
                  安全ガイドラインを更新しました（飲食代金は100%企業負担）
                </p>
                <span className="text-[10px] text-[#8d7169] mt-0.5">昨日</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 固定ボトムナビゲーションバー */}
      <nav className="fixed bottom-0 inset-x-0 max-w-md mx-auto z-40 bg-white/95 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-100 pb-safe">
        <div className="flex items-center justify-around h-16 px-2">
          {/* ホーム */}
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === "home" ? "text-[#ff7043] font-bold" : "text-slate-400"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: activeTab === "home" ? "'FILL' 1" : "'FILL' 0" }}
            >
              home
            </span>
            <span className="text-[10px] mt-0.5">ホーム</span>
          </button>

          {/* さがす */}
          <button
            onClick={() => {
              setActiveTab("search");
              showToast("さがす画面へ切り替え");
            }}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === "search" ? "text-[#ff7043] font-bold" : "text-slate-400"
            }`}
          >
            <span className="material-symbols-outlined text-2xl">explore</span>
            <span className="text-[10px] mt-0.5">さがす</span>
          </button>

          {/* ＋ 募集作成 Floating CTA */}
          <div className="flex items-center justify-center w-14 h-full -mt-5">
            <Link
              href="/create"
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff7043] to-[#fda625] text-white shadow-[0_8px_20px_-4px_rgba(255,112,67,0.5)] flex items-center justify-center transform active:scale-90 transition-transform"
            >
              <span className="material-symbols-outlined text-2xl font-bold">restaurant</span>
            </Link>
          </div>

          {/* マッチ */}
          <Link
            href="/offers"
            className="flex flex-col items-center justify-center w-14 h-full transition-colors relative text-slate-400 hover:text-[#ff7043]"
          >
            <span className="material-symbols-outlined text-2xl">chat_bubble</span>
            <span className="absolute top-2 right-2.5 min-w-[16px] h-4 px-1 rounded-full bg-[#fda625] text-white text-[9px] flex items-center justify-center font-bold">
              2
            </span>
            <span className="text-[10px] mt-0.5">マッチ</span>
          </Link>

          {/* マイページ */}
          <button
            onClick={() => {
              setActiveTab("mypage");
              showToast("マイページを表示");
            }}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === "mypage" ? "text-[#ff7043] font-bold" : "text-slate-400"
            }`}
          >
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="text-[10px] mt-0.5">マイページ</span>
          </button>
        </div>
      </nav>

      {/* 募集作成モーダル */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          <div className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="text-base font-bold text-[#121c2a] flex items-center gap-1.5">
                <span>🍽️</span> 友達と募集を作成する
              </h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">
                  食べたい料理・ジャンル
                </label>
                <input
                  type="text"
                  placeholder="例: 渋谷の美味しい焼肉、海鮮居酒屋"
                  className="w-full h-11 px-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#ff7043] focus:ring-2 focus:ring-[#ff7043]/15"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">
                  参加人数（友達を含めた合計）
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["2人", "3人", "4人"].map((count, idx) => (
                    <button
                      key={count}
                      type="button"
                      className={`h-10 rounded-xl text-xs font-bold border ${
                        idx === 1
                          ? "bg-orange-50 border-[#ff7043] text-[#ac3509]"
                          : "border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-600 block mb-1">
                  希望エリア
                </label>
                <input
                  type="text"
                  placeholder="例: 渋谷・恵比寿・新宿"
                  className="w-full h-11 px-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-[#ff7043] focus:ring-2 focus:ring-[#ff7043]/15"
                />
              </div>
            </div>

            <button
              onClick={() => {
                setShowCreateModal(false);
                showToast("🎉 募集を公開しました！企業からのオファーをお待ちください");
              }}
              className="mt-2 w-full h-12 rounded-xl bg-gradient-to-r from-[#ff7043] to-[#fda625] text-white font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              募集を公開する（無料）
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
