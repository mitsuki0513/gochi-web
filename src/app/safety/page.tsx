"use client";

import Link from "next/link";

export default function SafetyCenterPage() {
  const rules = [
    {
      icon: "payments",
      title: "1. 飲食代金は100%企業負担（学生¥0）",
      desc: "店舗での決済は企業メンターが事前に済ませるか、その場で全額支払います。学生への割り勘要求や後日請求はシステム規約により厳格に禁止されています。",
    },
    {
      icon: "verified",
      title: "2. 公式審査済みの優良企業のみ参加",
      desc: "Gochiに登録している企業は、法人登記や企業ドメイン、採用実績などの厳正な審査を通過した企業・公認メンターのみです。",
    },
    {
      icon: "storefront",
      title: "3. 公開された認証飲食店・個室のみ",
      desc: "密室やカラオケ、企業オフィス内での食事会は禁止されています。すべてGochi運営が認定した飲食店（個室完備）にて開催されます。",
    },
    {
      icon: "no_accounts",
      title: "4. 個人連絡先交換・強引な勧誘の禁止",
      desc: "個人LINEやSNSアカウントの交換、食事会中の執拗な選考エントリー強要は禁止されています。やり取りはすべてGochiアプリ内チャットで完結します。",
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
            <h1 className="text-base font-bold text-[#121c2a]">セーフティセンター</h1>
          </div>

          <span className="text-xs text-[#006c49] font-bold bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full flex items-center gap-0.5">
            <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
            安全保証
          </span>
        </div>
      </header>

      {/* メインエリア */}
      <main className="flex-1 flex flex-col pt-24 pb-28 px-4 gap-4">
        {/* 保証バナー */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl text-white shadow-md flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
          </div>
          <h2 className="text-base font-extrabold leading-tight">
            大学生が安心してごちそうになれる理由
          </h2>
          <p className="text-xs text-white/90 leading-relaxed">
            Gochiは「食事を通じた健全なキャリア交流」を最優先に考え、厳しい安全ガイドラインを定めています。
          </p>
        </div>

        {/* 4つの安全基準 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
            安心・安全の4大基準
          </h3>

          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white shadow-xs border border-slate-100 flex flex-col gap-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-50 text-[#006c49] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-base">{rule.icon}</span>
                </span>
                <span className="text-xs font-bold text-[#121c2a]">{rule.title}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-9">{rule.desc}</p>
            </div>
          ))}
        </div>

        {/* トラブル通報窓口 */}
        <div className="bg-white p-4 rounded-2xl shadow-xs border border-rose-100 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-rose-500 text-lg">report</span>
            <span className="text-xs font-bold text-[#121c2a]">トラブル通報・24時間緊急相談</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            食事会中やマッチング成立後に規約違反（アルコール強要、遅刻、個人連絡先の執拗な要求など）が発生した場合は、直ちに通報してください。運営スタッフが迅速に対応します。
          </p>
          <button
            type="button"
            onClick={() => alert("通報フォームを開きました。専任スタッフが迅速に対応いたします。")}
            className="w-full h-11 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 text-xs font-bold hover:bg-rose-100 transition-colors"
          >
            運営へ違反を通報・相談する
          </button>
        </div>
      </main>
    </div>
  );
}
