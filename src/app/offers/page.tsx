"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Offer {
  id: string;
  companyName: string;
  companyTag: string;
  initials: string;
  bgClass: string;
  restaurant: string;
  location: string;
  img: string;
  mentorName: string;
  mentorRole: string;
  mentorNote: string;
  message: string;
  tags: string[];
  votes: number;
}

const INITIAL_OFFERS: Offer[] = [
  {
    id: "cybertech",
    companyName: "株式会社サイバーテック",
    companyTag: "東証プライム上場 / 急成長メガベンチャー / AIマーケ事業",
    initials: "CT",
    bgClass: "bg-[#ffdbd0]/60 text-[#ac3509]",
    restaurant: "熟成和牛焼肉 渋谷KINTAN",
    location: "渋谷駅 徒歩3分",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80",
    mentorName: "佐藤 健一",
    mentorRole: "新卒採用責任者",
    mentorNote: "元BizDevリーダー ＆ 若手現場マーケター2名同席",
    message:
      "「マーケ専攻の皆さん3名とお聞きし、当社の最新AIマーケ事業の立ち上げ秘話やリアルな若手キャリアについてお話ししたいです！肩肘張らず美味しい焼肉を食べましょう。」",
    tags: ["#個室確約", "#現場マーケター同席", "#カジュアル選考パスあり"],
    votes: 2, // あやか、けん が投票済み
  },
  {
    id: "cloudarc",
    companyName: "クラウド・アーク株式会社",
    companyTag: "FinTechユニコーン / シリーズC累計50億円調達",
    initials: "CA",
    bgClass: "bg-[#ffddb9]/70 text-[#865300]",
    restaurant: "渋谷セルリアンタワー 高級鉄板焼",
    location: "渋谷駅 徒歩5分",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80",
    mentorName: "高橋 優太",
    mentorRole: "マーケティング部長",
    mentorNote: "外資コンサル出身 / 20代マネージャー",
    message:
      "「マーケティング戦略や急成長スタートアップのリアルな泥臭さを、景色と料理を楽しみながら熱く語り合いましょう！」",
    tags: ["#高層階夜景", "#急成長SaaS", "#インターン直接オファー"],
    votes: 0,
  },
];

export default function OffersPage() {
  const router = useRouter();
  const [offers, setOffers] = useState<Offer[]>(INITIAL_OFFERS);
  const [myVote, setMyVote] = useState<string | null>(null);
  const [isConfirming, setIsConfirming] = useState(false);

  const castVote = (id: string) => {
    setMyVote(id);
    setOffers((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          return { ...o, votes: o.id === "cybertech" ? 3 : 1 };
        } else {
          return { ...o, votes: o.id === "cybertech" ? 2 : 0 };
        }
      })
    );
  };

  const totalMembers = 3;
  const currentVotesCount = myVote ? 3 : 2;

  const handleConfirmMatch = () => {
    setIsConfirming(true);
    setTimeout(() => {
      router.push("/chat");
    }, 1000);
  };

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
            <h1 className="text-base font-bold text-[#121c2a]">オファー比較・投票</h1>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#006c49] font-bold bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              認証企業のみ
            </span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col pt-24 pb-32 px-4 gap-4">
        {/* セッション概要カード */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 text-[#ac3509] text-xs font-bold">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant
              </span>
              リバースオークション開催中
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 text-[11px] font-bold">
              <span className="material-symbols-outlined text-xs animate-pulse">timer</span>
              あと4時間32分
            </span>
          </div>

          <div>
            <h2 className="text-base font-extrabold text-[#121c2a]">渋谷 熟成和牛焼肉会</h2>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs text-[#ac3509]">group</span>
              慶應・早稲田 就活仲間（3名チーム）
            </p>
          </div>

          {/* グループ投票ステータス */}
          <div className="bg-[#f8f9ff] rounded-xl p-3 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[#121c2a] flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006c49]">how_to_vote</span>
                メンバー投票状況（3人中{currentVotesCount}人完了）
              </span>
              <span className="text-[11px] font-bold text-[#ac3509]">
                {currentVotesCount === 3 ? "全員完了！" : "過半数到達"}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* 自分 */}
              <div
                className={`rounded-xl p-2 flex flex-col items-center text-center border transition-all ${
                  myVote
                    ? "bg-white border-[#ff7043] shadow-xs"
                    : "bg-white border-amber-200"
                }`}
              >
                <div className="relative mb-1">
                  <div className="w-7 h-7 rounded-full bg-orange-100 text-[#ac3509] flex items-center justify-center font-bold text-xs">
                    り
                  </div>
                  {myVote ? (
                    <span
                      className="material-symbols-outlined absolute -bottom-1 -right-1 text-xs text-[#006c49] bg-white rounded-full"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  ) : (
                    <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#fda625] rounded-full flex items-center justify-center text-white text-[9px] font-bold">
                      !
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium text-[#121c2a]">りょうた（自分）</span>
                <span
                  className={`text-[9px] font-bold mt-0.5 truncate max-w-full ${
                    myVote ? "text-[#ac3509]" : "text-[#865300]"
                  }`}
                >
                  {myVote === "cybertech"
                    ? "サイバーテック"
                    : myVote === "cloudarc"
                    ? "クラウド・アーク"
                    : "未投票"}
                </span>
              </div>

              {/* メンバー2 */}
              <div className="bg-white rounded-xl p-2 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                <div className="relative mb-1">
                  <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-xs">
                    あ
                  </div>
                  <span
                    className="material-symbols-outlined absolute -bottom-1 -right-1 text-xs text-[#006c49] bg-white rounded-full"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#121c2a]">あやか</span>
                <span className="text-[9px] font-bold text-[#ac3509] mt-0.5 truncate max-w-full">
                  サイバーテック
                </span>
              </div>

              {/* メンバー3 */}
              <div className="bg-white rounded-xl p-2 flex flex-col items-center text-center border border-slate-100 shadow-2xs">
                <div className="relative mb-1">
                  <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                    け
                  </div>
                  <span
                    className="material-symbols-outlined absolute -bottom-1 -right-1 text-xs text-[#006c49] bg-white rounded-full"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                </div>
                <span className="text-[11px] font-medium text-[#121c2a]">けん</span>
                <span className="text-[9px] font-bold text-[#ac3509] mt-0.5 truncate max-w-full">
                  サイバーテック
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* オファー一覧見出し */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm font-bold text-[#121c2a]">
            <span className="material-symbols-outlined text-[#ff7043] text-lg">local_fire_department</span>
            <span>届いたごちそうオファー (2社)</span>
          </div>
          <span className="text-[11px] text-slate-500">投票してグループ決定</span>
        </div>

        {/* オファーカードリスト */}
        <div className="flex flex-col gap-4">
          {offers.map((offer) => {
            const isVotedByMe = myVote === offer.id;
            const isLeading = offer.votes >= 2;

            return (
              <div
                key={offer.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-xs border transition-all ${
                  isVotedByMe
                    ? "border-[#ff7043] ring-2 ring-[#ff7043]/15"
                    : isLeading
                    ? "border-orange-200"
                    : "border-slate-100"
                }`}
              >
                {/* 最多得票バッジ */}
                {isLeading && (
                  <div className="bg-[#ac3509] text-white px-3 py-1 flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">military_tech</span>
                      グループ最多得票オファー
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
                      現在 {offer.votes}/3 票
                    </span>
                  </div>
                )}

                {/* 店舗画像 & ごちそうタグ */}
                <div className="relative h-40 w-full bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={offer.img} alt={offer.restaurant} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#fda625] text-white text-[11px] font-bold shadow-xs">
                      <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                        redeem
                      </span>
                      全額ごちそう（学生 ¥0）
                    </span>
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs text-[#121c2a] text-[11px] font-semibold">
                      <span className="material-symbols-outlined text-xs text-[#006c49]">lock</span>
                      完全個室
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[10px] text-white/80 font-medium">提案レストラン</p>
                      <p className="text-sm font-bold text-white drop-shadow-xs">{offer.restaurant}</p>
                    </div>
                    <span className="text-[10px] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-white">
                      {offer.location}
                    </span>
                  </div>
                </div>

                {/* 企業・メンター詳細 */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-sm font-bold text-[#121c2a] truncate">
                          {offer.companyName}
                        </span>
                        <span
                          className="material-symbols-outlined text-[#006c49] text-sm shrink-0"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                          title="公式認証企業"
                        >
                          verified
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-1">{offer.companyTag}</p>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${offer.bgClass}`}
                    >
                      {offer.initials}
                    </div>
                  </div>

                  {/* メンタープロフィール */}
                  <div className="bg-[#f8f9ff] rounded-xl p-2.5 flex items-center gap-2.5 border border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      👨‍💼
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-[#121c2a]">{offer.mentorName}</span>
                        <span className="text-[10px] bg-slate-200/80 px-1.5 py-0.5 rounded text-slate-600">
                          {offer.mentorRole}
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 truncate">{offer.mentorNote}</p>
                    </div>
                  </div>

                  {/* 招待メッセージ */}
                  <div className="bg-orange-50/60 rounded-xl p-2.5 text-[#121c2a] text-xs border border-orange-100/60 italic leading-relaxed">
                    {offer.message}
                  </div>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-1">
                    {offer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 投票ボタン */}
                  <button
                    type="button"
                    onClick={() => castVote(offer.id)}
                    className={`w-full h-11 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      isVotedByMe
                        ? "bg-[#ff7043] text-white shadow-xs"
                        : "bg-[#f8f9ff] text-slate-700 hover:bg-orange-50 hover:text-[#ac3509] border border-slate-200"
                    }`}
                  >
                    <span
                      className="material-symbols-outlined text-base"
                      style={{ fontVariationSettings: isVotedByMe ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      thumb_up
                    </span>
                    <span>
                      {isVotedByMe
                        ? `投票中（現在 ${offer.votes} 票）`
                        : `このオファーに投票する（現在 ${offer.votes} 票）`}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* 固定ボトム決定バー */}
      <div className="fixed bottom-0 inset-x-0 max-w-md mx-auto bg-white/95 backdrop-blur-md px-4 pt-3 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-100 z-40">
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[11px] text-slate-600 font-medium">
            {myVote ? "🎉 メンバー全員の投票が完了しました！" : "あなたの1票で最終決定します"}
          </span>
          <span className="text-[11px] font-bold text-[#ac3509]">
            {myVote ? "マッチング成立可能" : "投票待ち"}
          </span>
        </div>

        <button
          onClick={handleConfirmMatch}
          disabled={!myVote || isConfirming}
          className={`w-full h-12 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
            myVote
              ? "bg-gradient-to-r from-[#ff7043] to-[#fda625] text-white active:scale-98 shadow-orange-500/25"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          {isConfirming ? (
            <>
              <span className="material-symbols-outlined text-lg animate-spin">
                progress_activity
              </span>
              <span>マッチングを確定中...</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-lg">celebration</span>
              <span>サイバーテックとの食事会を確定する</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
