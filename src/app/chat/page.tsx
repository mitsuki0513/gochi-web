"use client";

import { useState } from "react";
import Link from "next/link";

interface Message {
  id: number;
  sender: "mentor" | "me" | "member";
  name: string;
  avatarText: string;
  avatarBg: string;
  text: string;
  time: string;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    sender: "mentor",
    name: "佐藤 健一（サイバーテック 採用責任者）",
    avatarText: "佐",
    avatarBg: "bg-orange-500",
    text: "はじめまして！サイバーテックの佐藤です。投票ありがとうございます！金曜日の渋谷KINTAN、個室で予約完了しました。当日は気軽になんでも聞いてくださいね！",
    time: "14:20",
  },
  {
    id: 2,
    sender: "member",
    name: "あやか",
    avatarText: "あ",
    avatarBg: "bg-rose-400",
    text: "佐藤さん、はじめまして！予約ありがとうございます！熟成焼肉すごく楽しみです！IT業界のマーケティング実務についてたくさんお伺いしたいです✨",
    time: "14:25",
  },
  {
    id: 3,
    sender: "member",
    name: "けん",
    avatarText: "け",
    avatarBg: "bg-blue-400",
    text: "よろしくお願いします！若手で活躍されているマーケターの方も同席されるとのことで、リアルな働き方を聞けるのを楽しみにしてます！",
    time: "14:28",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg: Message = {
      id: Date.now(),
      sender: "me",
      name: "りょうた（自分）",
      avatarText: "り",
      avatarBg: "bg-[#ff7043]",
      text: inputText,
      time: "14:32",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText("");

    // メンターからの自動返信シミュレーション
    setTimeout(() => {
      const mentorReply: Message = {
        id: Date.now() + 1,
        sender: "mentor",
        name: "佐藤 健一（サイバーテック 採用責任者）",
        avatarText: "佐",
        avatarBg: "bg-orange-500",
        text: "りょうたさん、メッセージありがとうございます！現場のマーケターも気合を入れて準備してますので、お楽しみに！",
        time: "14:33",
      };
      setMessages((prev) => [...prev, mentorReply]);
    }, 1200);
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
              href="/offers"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#121c2a] hover:bg-slate-100 transition-colors"
            >
              <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
            </Link>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-[#121c2a]">サイバーテック食事会</span>
                <span className="material-symbols-outlined text-[#006c49] text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified
                </span>
              </div>
              <span className="text-[10px] text-slate-500">メンバー4名（メンター1名・学生3名）</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[11px] font-bold text-[#006c49] bg-[#6ffbbe]/30 px-2 py-0.5 rounded-full">
              確定済
            </span>
          </div>
        </div>

        {/* 食事会確定バナー（タップで当日チェックイン画面へ） */}
        <Link
          href="/checkin"
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 flex items-center justify-between text-xs hover:brightness-105 transition-all"
        >
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-sm">event</span>
            <span className="font-semibold">来週金曜 11/1 19:00〜 @渋谷KINTAN</span>
          </div>
          <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded font-bold flex items-center gap-0.5">
            当日チェックイン
            <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </span>
        </Link>
      </header>

      {/* メッセージリスト */}
      <main className="flex-1 flex flex-col pt-32 pb-24 px-4 gap-3 overflow-y-auto">
        <div className="text-center my-2">
          <span className="text-[10px] text-slate-400 bg-slate-200/60 px-2.5 py-1 rounded-full">
            今日 14:15 マッチングが成立しました 🎉
          </span>
        </div>

        {messages.map((msg) => {
          if (msg.sender === "me") {
            return (
              <div key={msg.id} className="flex flex-col items-end gap-1">
                <div className="max-w-[78%] bg-[#ff7043] text-white p-3 rounded-2xl rounded-tr-xs text-xs shadow-xs leading-relaxed">
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400 mr-1">{msg.time}</span>
              </div>
            );
          }

          return (
            <div key={msg.id} className="flex items-start gap-2 max-w-[85%]">
              <div
                className={`w-7 h-7 rounded-full text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-2xs ${msg.avatarBg}`}
              >
                {msg.avatarText}
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-[10px] text-slate-500 font-medium truncate">
                  {msg.name}
                </span>
                <div className="bg-white text-[#121c2a] p-3 rounded-2xl rounded-tl-xs text-xs shadow-xs border border-slate-100 leading-relaxed">
                  {msg.text}
                </div>
                <span className="text-[9px] text-slate-400">{msg.time}</span>
              </div>
            </div>
          );
        })}
      </main>

      {/* 固定ボトム入力バー */}
      <div className="fixed bottom-0 inset-x-0 max-w-md mx-auto bg-white/95 backdrop-blur-md px-3 py-2 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-100 z-40">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="メッセージを入力..."
            className="flex-1 h-10 px-3.5 bg-[#f8f9ff] text-xs rounded-full border border-slate-200 focus:outline-none focus:border-[#ff7043] focus:ring-1 focus:ring-[#ff7043]"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              inputText.trim()
                ? "bg-[#ff7043] text-white shadow-xs active:scale-95"
                : "bg-slate-100 text-slate-300"
            }`}
          >
            <span className="material-symbols-outlined text-lg">send</span>
          </button>
        </form>
      </div>
    </div>
  );
}
