"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CUISINES = [
  { id: "yakiniku", name: "焼肉・熟成肉", icon: "outdoor_grill" },
  { id: "sushi", name: "寿司・海鮮", icon: "set_meal" },
  { id: "italian", name: "イタリアン", icon: "local_pizza" },
  { id: "korean", name: "韓国料理", icon: "ramen_dining" },
  { id: "bistro", name: "ビストロ・バル", icon: "wine_bar" },
  { id: "izakaya", name: "居酒屋・和食", icon: "storefront" },
];

const AREAS = [
  "渋谷・原宿・表参道",
  "新宿",
  "六本木・麻布",
  "銀座・丸の内",
  "恵比寿・代官山",
  "池袋",
];

const THEMES = [
  "メガベンチャーと大手SaaSの違い",
  "若手の裁量権やリアルな働き方",
  "就活相談というよりフランクにキャリアの話",
  "マーケティング実務のぶっちゃけ話",
  "エンジニア・デザイナーの評価基準",
];

export default function CreateInvitePage() {
  const router = useRouter();
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>(["yakiniku", "italian"]);
  const [selectedArea, setSelectedArea] = useState<string>("渋谷・原宿・表参道");
  const [selectedBudget, setSelectedBudget] = useState<string>("3,000〜4,000円");
  const [selectedThemes, setSelectedThemes] = useState<string[]>([
    "メガベンチャーと大手SaaSの違い",
    "若手の裁量権やリアルな働き方",
  ]);
  const [guidelineAgreed, setGuidelineAgreed] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const toggleCuisine = (id: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleTheme = (theme: string) => {
    setSelectedThemes((prev) =>
      prev.includes(theme) ? prev.filter((item) => item !== theme) : [...prev, theme]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guidelineAgreed) {
      alert("安心・安全ガイドラインへの同意が必要です");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/offers");
      }, 1200);
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
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#ff7043] to-[#fda625] flex items-center justify-center text-white text-sm">
                🍽️
              </div>
              <h1 className="text-base font-bold text-[#121c2a]">食事募集を作成</h1>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#006c49] font-bold bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              安全保証
            </span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 flex flex-col pt-24 pb-32 px-4 gap-4">
        {/* ステッパー */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-0.5 bg-slate-100 z-0"></div>
            <div className="absolute left-8 w-1/4 top-1/2 -translate-y-1/2 h-0.5 bg-[#ff7043] z-0"></div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-[#ff7043] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                1
              </div>
              <span className="text-[11px] font-bold text-[#ac3509]">条件入力</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium">
                2
              </div>
              <span className="text-[11px] text-slate-400 font-medium">確認</span>
            </div>

            <div className="flex flex-col items-center gap-1 z-10">
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-medium">
                3
              </div>
              <span className="text-[11px] text-slate-400 font-medium">公開</span>
            </div>
          </div>
        </div>

        {/* ガイドバナー */}
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-white p-4 rounded-2xl flex flex-col gap-2.5 shadow-xs border border-orange-100">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-orange-100 text-[#ac3509] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                restaurant_menu
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-bold text-[#121c2a] leading-tight">
                友達と行きたいご飯をリクエストしよう
              </h2>
              <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                条件を設定して投稿するだけで、興味を持った公認企業からごちそうオファーが届きます
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-2 border-t border-orange-200/40">
            <div className="bg-white/90 rounded-xl py-1.5 px-2 text-center shadow-2xs">
              <div className="text-[10px] text-slate-500">平均オファー到着</div>
              <div className="text-xs font-bold text-[#ac3509]">約3.5時間</div>
            </div>
            <div className="bg-white/90 rounded-xl py-1.5 px-2 text-center shadow-2xs">
              <div className="text-[10px] text-slate-500">マッチ率</div>
              <div className="text-xs font-bold text-[#ac3509]">94%</div>
            </div>
            <div className="bg-white/90 rounded-xl py-1.5 px-2 text-center shadow-2xs">
              <div className="text-[10px] text-slate-500">学生の飲食代</div>
              <div className="text-xs font-bold text-[#006c49]">完全¥0</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* 1. 参加グループ */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-orange-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">groups</span>
                <span className="text-sm font-bold text-[#121c2a]">参加グループ</span>
              </div>
              <span className="text-[11px] text-[#006c49] font-bold bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span className="material-symbols-outlined text-xs">check_circle</span>
                確定済
              </span>
            </div>

            <div className="bg-[#f8f9ff] p-3 rounded-xl flex items-center justify-between border border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-[#ff7043] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    私
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#fda625] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    友A
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00b27b] text-white flex items-center justify-center text-[10px] font-bold ring-2 ring-white">
                    友B
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#121c2a]">慶應・早稲田 マーケ志望3人組</div>
                  <div className="text-[10px] text-slate-500">参加メンバー：計3名（26卒）</div>
                </div>
              </div>
              <button
                type="button"
                className="text-xs text-[#ac3509] font-bold flex items-center shrink-0"
              >
                変更
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>

          {/* 2. 料理ジャンル選択 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#121c2a] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">restaurant</span>
                食べたい料理ジャンル
              </label>
              <span className="text-[11px] text-[#ac3509] font-bold bg-orange-100 px-2 py-0.5 rounded-full">
                複数選択可
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {CUISINES.map((item) => {
                const isSelected = selectedCuisines.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleCuisine(item.id)}
                    className={`p-2.5 rounded-xl font-bold text-xs flex flex-col items-center gap-1 transition-all ${
                      isSelected
                        ? "border border-[#ff7043] bg-orange-50 text-[#ac3509] shadow-2xs"
                        : "bg-[#f8f9ff] text-slate-700 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. 希望エリア */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#121c2a] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">location_on</span>
                希望エリア
              </label>
              <span className="text-[11px] text-[#ac3509] font-bold bg-orange-100 px-2 py-0.5 rounded-full">
                必須
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {AREAS.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => setSelectedArea(area)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedArea === area
                      ? "bg-[#ff7043] text-white shadow-xs"
                      : "bg-[#f8f9ff] text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>

          {/* 4. 希望日程 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#121c2a] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">calendar_today</span>
                希望日程・時間帯
              </label>
              <span className="text-[11px] text-[#ac3509] font-bold bg-orange-100 px-2 py-0.5 rounded-full">
                第2希望まで
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="p-3 bg-[#f8f9ff] rounded-xl flex items-center justify-between border border-orange-200">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold bg-[#ac3509] text-white px-2 py-0.5 rounded">
                    第1希望
                  </span>
                  <span className="text-xs font-bold text-[#121c2a]">来週金曜 11/1 19:00〜</span>
                </div>
                <span className="material-symbols-outlined text-[#ac3509] text-base">check_circle</span>
              </div>

              <div className="p-3 bg-[#f8f9ff] rounded-xl flex items-center justify-between border border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-medium bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                    第2希望
                  </span>
                  <span className="text-xs font-medium text-[#121c2a]">来週水曜 11/6 19:30〜</span>
                </div>
                <button type="button" className="text-[#ac3509] text-xs font-bold">
                  変更
                </button>
              </div>
            </div>
          </div>

          {/* 5. 1人あたりの希望予算帯 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#121c2a] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">payments</span>
                1人あたりの希望予算帯
              </label>
              <span className="text-[11px] text-[#865300] font-bold">企業側が全額負担</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {["約2,000円", "3,000〜4,000円", "5,000円以上"].map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => setSelectedBudget(budget)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedBudget === budget
                      ? "bg-[#ff7043] text-white shadow-xs"
                      : "bg-[#f8f9ff] text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <span className="material-symbols-outlined text-[#006c49] text-xs">check</span>
              ※目安金額です。当日の飲食代は全額企業様のご馳走（学生自己負担¥0）となります。
            </p>
          </div>

          {/* 6. 相談テーマ */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-[#121c2a] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#ac3509] text-lg">chat</span>
                企業に話してみたいこと・相談テーマ
              </label>
              <span className="text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                任意
              </span>
            </div>
            <p className="text-xs text-slate-500">興味のあるテーマを選択するとマッチング率が上がります</p>

            <div className="flex flex-wrap gap-1.5">
              {THEMES.map((theme) => {
                const isSelected = selectedThemes.includes(theme);
                return (
                  <button
                    key={theme}
                    type="button"
                    onClick={() => toggleTheme(theme)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-orange-50 text-[#ac3509] border border-[#ff7043] font-semibold"
                        : "bg-[#f8f9ff] text-slate-700 hover:bg-slate-100 border border-transparent"
                    }`}
                  >
                    {theme}
                  </button>
                );
              })}
            </div>

            <textarea
              className="w-full bg-[#f8f9ff] text-[#121c2a] text-xs rounded-xl p-3 outline-none border border-slate-200 focus:border-[#ff7043] leading-relaxed mt-1"
              rows={3}
              defaultValue="マーケティングやIT業界に興味がある大学3年男女3人組です！業界のリアルなお話を聞きながら美味しいご飯を食べたいです！"
            />
          </div>

          {/* 7. 安心・安全ガイドライン同意 */}
          <div className="bg-white p-4 rounded-2xl shadow-xs border border-slate-100">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={guidelineAgreed}
                onChange={(e) => setGuidelineAgreed(e.target.checked)}
                className="mt-1 w-4 h-4 rounded accent-[#ff7043] shrink-0 cursor-pointer"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1 text-xs font-bold text-[#121c2a]">
                  <span className="material-symbols-outlined text-[#006c49] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                  安心・安全ガイドラインに同意する
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                  公開された飲食店での食事、アルコール強要の禁止、就活勧誘マナーの厳守に同意します。
                </p>
              </div>
            </label>
          </div>

          {/* 固定ボトム送信バー */}
          <div className="fixed bottom-0 inset-x-0 max-w-md mx-auto bg-white/95 backdrop-blur-md px-4 pt-3 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-100 z-40">
            <div className="flex items-center justify-between mb-2 px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00b27b] animate-pulse"></span>
                <span className="text-[11px] text-slate-600 font-medium">
                  飲食代は企業全額負担（学生¥0）
                </span>
              </div>
              <div className="text-[11px] text-slate-500 flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-[#006c49]">lock</span>
                <span>オファー成立まで完全匿名</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full h-12 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all ${
                isSuccess
                  ? "bg-[#00b27b] text-white"
                  : "bg-gradient-to-r from-[#ff7043] to-[#fda625] text-white hover:brightness-105 active:scale-98 shadow-orange-500/20"
              }`}
            >
              {isSubmitting ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">
                    progress_activity
                  </span>
                  <span>募集を投稿中...</span>
                </>
              ) : isSuccess ? (
                <>
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  <span>投稿が完了しました！オファー一覧へ</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-lg">send</span>
                  <span>この内容で食事リクエストを投稿する（無料）</span>
                </>
              )}
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-1">
              オファーが届くまで企業に個人情報は公開されません
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
