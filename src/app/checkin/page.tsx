"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckinPage() {
  const router = useRouter();
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const handleCheckin = () => {
    setIsCheckedIn(true);
    setTimeout(() => {
      router.push("/review");
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#121c2a]">
      {/* 固定ヘッダー */}
      <header className="fixed top-0 inset-x-0 max-w-md mx-auto z-40 bg-white/90 backdrop-blur-xl shadow-xs border-b border-slate-100">
        <div className="flex items-center justify-between px-4 h-9 text-[#121c2a] text-xs font-semibold tracking-tight">
          <span>18:50</span>
          <div className="flex items-center gap-1.5 text-base">
            <span className="material-symbols-outlined text-sm">signal_cellular_4_bar</span>
            <span className="material-symbols-outlined text-sm">wifi</span>
            <span className="material-symbols-outlined text-sm">battery_full</span>
          </div>
        </div>

        <div className="h-14 px-3 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Link
              href="/chat"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#121c2a] hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
            </Link>
            <h1 className="text-base font-bold text-[#121c2a]">食事当日・チェックイン</h1>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs text-[#006c49] font-bold bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              決済保証済
            </span>
          </div>
        </div>
      </header>

      {/* メインスクロールエリア */}
      <main className="flex-1 flex flex-col pt-24 pb-28 px-4 gap-4">
        {/* 1. カウントダウン＆ステータスカード */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xs border border-slate-100">
          <div className="bg-gradient-to-r from-[#ff7043] to-[#fda625] px-4 py-2.5 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              <span className="text-xs font-bold tracking-wide">リアルタイム状況</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">schedule</span>
              <span>食事開始まで</span>
              <span className="text-sm font-extrabold ml-1">あと 10分</span>
            </div>
          </div>

          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-[#865300]">
                    全額ごちそう確定
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#6ffbbe]/30 text-[#006c49]">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                    企業決済済
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#121c2a]">KINTAN 渋谷店</h2>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <span className="material-symbols-outlined text-sm text-[#ff7043]">event</span>
                  本日 19:00 〜 21:00
                </p>
              </div>

              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-xs shrink-0 bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=200&auto=format&fit=crop&q=80"
                  alt="KINTAN"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* 店舗位置＆予約名情報 */}
            <div className="bg-[#f8f9ff] rounded-xl p-3 flex flex-col gap-1 border border-slate-100">
              <div className="flex items-start gap-1.5">
                <span className="material-symbols-outlined text-[#ff7043] text-base shrink-0 mt-0.5">
                  location_on
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-[#121c2a]">東京都渋谷区神南1-22-8 3F</p>
                  <p className="text-[11px] text-slate-500">渋谷駅ハチ公口から 徒歩5分（神南交差点手前）</p>
                </div>
              </div>
              <div className="pl-5 pt-1">
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-200/80 text-slate-700 font-bold">
                  予約名: サイバーテック 佐藤様
                </span>
              </div>
            </div>

            {/* ナビゲーションクイックボタン */}
            <div className="grid grid-cols-3 gap-2 pt-1">
              <button
                type="button"
                className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
              >
                <span className="material-symbols-outlined text-sm text-[#ff7043]">map</span>
                <span>Googleマップ</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
              >
                <span className="material-symbols-outlined text-sm text-[#fda625]">near_me</span>
                <span>ルート案内</span>
              </button>
              <a
                href="tel:0312345678"
                className="flex items-center justify-center gap-1 py-2 px-1 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-xs font-semibold"
              >
                <span className="material-symbols-outlined text-sm text-[#006c49]">call</span>
                <span>店舗に電話</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. チェックインアクションカード */}
        <div className="rounded-2xl p-4 bg-white shadow-xs border border-slate-100 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00b27b]"></span>
              <h3 className="text-sm font-bold text-[#121c2a]">チェックイン操作</h3>
            </div>
            <span className="inline-flex items-center gap-0.5 text-[10px] px-2 py-0.5 rounded-full bg-[#6ffbbe]/30 text-[#006c49] font-bold">
              <span className="material-symbols-outlined text-xs">my_location</span>
              GPS位置: 店舗範囲内 (12m)
            </span>
          </div>

          <button
            type="button"
            onClick={handleCheckin}
            disabled={isCheckedIn}
            className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all ${
              isCheckedIn
                ? "bg-[#00b27b]"
                : "bg-gradient-to-r from-[#ff7043] to-[#fda625] active:scale-98 shadow-orange-500/20"
            }`}
          >
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              table_restaurant
            </span>
            <span>
              {isCheckedIn
                ? "✓ 合流報告完了！食事をお楽しみください"
                : "席に着きました（合流完了を報告）"}
            </span>
          </button>

          <div className="flex items-center justify-between pt-1">
            <Link
              href="/chat"
              className="flex items-center gap-1 text-slate-600 hover:text-[#ff7043] text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-sm">chat_bubble</span>
              <span>グループチャットを開く</span>
            </Link>
            <button
              type="button"
              onClick={() => setShowEmergencyModal(true)}
              className="flex items-center gap-0.5 text-[#ac3509] hover:text-[#ff7043] text-xs font-semibold"
            >
              <span className="material-symbols-outlined text-sm">notification_important</span>
              <span>遅刻・緊急連絡をする</span>
            </button>
          </div>
        </div>

        {/* 3. 参加者の合流ステータス */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-bold text-[#121c2a]">参加者の合流ステータス</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                3 / 4名 到着
              </span>
            </div>
            <button
              type="button"
              className="flex items-center gap-0.5 text-xs text-[#ff7043] font-semibold"
            >
              <span className="material-symbols-outlined text-xs">refresh</span>
              更新
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {/* メンター */}
            <div className="rounded-2xl p-3.5 bg-white shadow-2xs border border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  佐
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#121c2a]">佐藤 健一</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                      企業側
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">サイバーテック 人事責任者</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-0.5 text-[10px] px-2 py-0.5 rounded-full bg-[#6ffbbe]/30 text-[#006c49] font-bold">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  店舗待機中
                </span>
                <p className="text-[9px] text-slate-400 mt-0.5">18:40着・奥の個室</p>
              </div>
            </div>

            {/* あなた */}
            <div className="rounded-2xl p-3.5 bg-white shadow-2xs border border-orange-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-[#ff7043] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  り
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#121c2a]">あなた</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-[#ac3509] font-bold">
                      幹事・学生
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">慶應義塾大学 3年</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-0.5 text-[10px] px-2 py-0.5 rounded-full bg-[#6ffbbe]/30 text-[#006c49] font-bold">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  到着済
                </span>
                <p className="text-[9px] text-slate-400 mt-0.5">18:48 店舗到着</p>
              </div>
            </div>

            {/* メンバー2 */}
            <div className="rounded-2xl p-3.5 bg-white shadow-2xs border border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-rose-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  あ
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#121c2a]">あやか</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      学生
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">早稲田大学 3年</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-0.5 text-[10px] px-2 py-0.5 rounded-full bg-[#6ffbbe]/30 text-[#006c49] font-bold">
                  <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  席に合流済
                </span>
                <p className="text-[9px] text-slate-400 mt-0.5">18:45 到着</p>
              </div>
            </div>

            {/* メンバー3 */}
            <div className="rounded-2xl p-3.5 bg-white shadow-2xs border border-slate-100 flex items-center justify-between gap-3 opacity-80">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  け
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#121c2a]">けん</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                      学生
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">慶應義塾大学 3年</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-0.5 text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-[#865300] font-bold">
                  <span className="material-symbols-outlined text-xs animate-spin">sync</span>
                  移動中
                </span>
                <p className="text-[9px] text-slate-400 mt-0.5">あと3分で到着</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 安全保証バナー */}
        <div className="bg-[#eff4ff] p-3 rounded-2xl flex items-start gap-2.5 border border-blue-100">
          <span className="material-symbols-outlined text-[#006c49] text-base shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
            shield
          </span>
          <div className="text-[11px] text-slate-600 leading-snug">
            飲食代金はサイバーテック様より全額決済済です。学生側の追加負担は一切ありません。食事中のトラブルや規約違反はいつでも通報可能です。
          </div>
        </div>
      </main>

      {/* 緊急連絡モーダル */}
      {showEmergencyModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-sm bg-white rounded-3xl p-5 shadow-2xl flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[#121c2a]">遅刻・緊急連絡</h3>
            <p className="text-xs text-slate-500">
              遅れる場合はグループチャットに到着見込み時間を連絡してください。
            </p>
            <div className="flex flex-col gap-2">
              {["5分ほど遅れます", "10分ほど遅れます", "電車遅延のため15分遅れます"].map(
                (template) => (
                  <button
                    key={template}
                    type="button"
                    onClick={() => {
                      alert(`「${template}」をチャットに送信しました`);
                      setShowEmergencyModal(false);
                    }}
                    className="p-2.5 text-xs text-left rounded-xl bg-slate-50 hover:bg-orange-50 hover:text-[#ff7043] border border-slate-200"
                  >
                    {template}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => setShowEmergencyModal(false)}
              className="mt-1 w-full h-10 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold"
            >
              閉じる
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
