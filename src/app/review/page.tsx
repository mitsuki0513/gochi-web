"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ReviewPage() {
  const router = useRouter();
  const [rating, setRating] = useState(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([
    "現場のリアルがわかった",
    "フランクで話しやすかった",
    "ご飯が最高に美味しかった",
  ]);
  const [comment, setComment] = useState(
    "佐藤さん、本日は美味しい焼肉をご馳走いただき本当にありがとうございました！AIマーケの最前線のお話や、若手のキャリアステップについて包み隠さず教えていただき、将来の解像度がぐっと上がりました！"
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tags = [
    "現場のリアルがわかった",
    "フランクで話しやすかった",
    "ご飯が最高に美味しかった",
    "キャリアの視野が広がった",
    "就活対策のアドバイスが参考になった",
    "社風の良さを実感した",
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      router.push("/");
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#121c2a]">
      {/* 固定ヘッダー */}
      <header className="fixed top-0 inset-x-0 max-w-md mx-auto z-40 bg-white/90 backdrop-blur-xl shadow-xs border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-9 text-[#121c2a] text-xs font-semibold tracking-tight">
          <span>21:15</span>
          <div className="flex items-center gap-1.5 text-base">
            <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-sm">wifi</span>
            <span className="material-symbols-outlined text-sm">battery_full</span>
          </div>
        </div>

        <div className="h-14 px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Link
              href="/checkin"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#121c2a] hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-base font-bold text-[#121c2a]">食事後レビュー</h1>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#865300] font-bold bg-amber-100 px-2 py-0.5 rounded-full">
              ごちそう完了
            </span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col pt-24 pb-28 px-4 gap-4">
        {/* サンクスバナー */}
        <div className="bg-gradient-to-br from-[#ff7043] via-[#fda625] to-[#865300] p-4 rounded-2xl text-white shadow-md flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-xs font-medium">
              🥩 渋谷KINTAN ごちそう会
            </span>
            <span className="text-xl">🎉</span>
          </div>
          <h2 className="text-lg font-extrabold leading-tight">ごちそうさまでした！</h2>
          <p className="text-xs text-white/90 leading-relaxed">
            楽しい食事会でしたね！メンターへの感謝のメッセージと感想を投稿しましょう。
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* 1. メンター評価 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                佐
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-[#121c2a]">佐藤 健一さん</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                    サイバーテック
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">新卒採用責任者 / 元BizDev</p>
              </div>
            </div>

            {/* スターレーティング */}
            <div className="flex flex-col items-center gap-1 py-2 bg-[#f8f9ff] rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-600">食事会の満足度</span>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-2xl transition-transform active:scale-125"
                  >
                    <span
                      className={`material-symbols-outlined text-3xl ${
                        star <= rating ? "text-[#fda625]" : "text-slate-300"
                      }`}
                      style={{ fontVariationSettings: star <= rating ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-[#ac3509]">
                {rating === 5
                  ? "大変満足（最高のごちそう体験！）"
                  : rating === 4
                  ? "満足（とても楽しかった）"
                  : "普通"}
              </span>
            </div>
          </div>

          {/* 2. 学び・良かった点タグ */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <label className="text-xs font-bold text-[#121c2a]">
              特に良かった点・学び（複数選択可）
            </label>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                      isSelected
                        ? "bg-orange-50 border border-[#ff7043] text-[#ac3509] font-bold"
                        : "bg-[#f8f9ff] text-slate-600 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    {isSelected ? `✓ ${tag}` : `＋ ${tag}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. 感謝メッセージ自由記述 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2">
            <label className="text-xs font-bold text-[#121c2a]">
              メンターへの感謝メッセージ
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              className="w-full p-3 bg-[#f8f9ff] text-xs rounded-xl border border-slate-200 focus:border-[#ff7043] focus:outline-none leading-relaxed"
            />
            <p className="text-[10px] text-slate-400">
              ※投稿したレビューはサイバーテック様およびGochi運営に共有され、今後のマッチング品質向上に活用されます。
            </p>
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full h-12 rounded-full font-bold text-sm shadow-md transition-all ${
              isSubmitted
                ? "bg-[#00b27b] text-white"
                : "bg-gradient-to-r from-[#ff7043] to-[#fda625] text-white active:scale-98 shadow-orange-500/20"
            }`}
          >
            {isSubmitted ? (
              <span className="flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-lg">check_circle</span>
                レビューを送信しました！ホームへ戻ります
              </span>
            ) : (
              "レビューを送信する（完了）"
            )}
          </button>
        </form>
      </main>
    </div>
  );
}
