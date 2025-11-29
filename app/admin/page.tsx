"use client";

import { useState, useEffect } from "react";
import { Save, Lock, RefreshCw } from "lucide-react";

export default function AdminPage() {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  // --- YOUR KEYS ---
  const BIN_ID = "692b254c43b1c97be9cd0b42"; 
  const API_KEY = "$2a$10$2sXRZd4DhW33xy5UlJV8TuBFKYX2nuxQ5zKAOF/qbptARHuM9i25u";

  const checkAuth = () => {
    if (password === "roadhouse2025") setAuthorized(true);
    else alert("ACCESS DENIED");
  };

  const fetchData = () => {
    if (!authorized) return;
    setLoading(true);
    fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { "X-Master-Key": API_KEY }
    })
    .then(res => res.json())
    .then(json => {
        setData(json.record);
        setLoading(false);
    })
    .catch(err => {
        alert("Connection Error");
        setLoading(false);
    });
  };

  useEffect(() => {
    if (authorized) fetchData();
  }, [authorized]);

  const handleSave = async () => {
    setLoading(true);
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(data)
    });
    setLoading(false);
    alert("SYSTEM UPDATED SUCCESSFULLY");
  };

  if (!authorized) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center p-6">
        <Lock className="text-[#ff5722] mb-4" size={48} />
        <h1 className="text-white font-[family-name:var(--font-blackops)] text-2xl mb-6">COMMAND UPLINK</h1>
        <input 
          type="password" 
          placeholder="ENTER CODE" 
          className="bg-neutral-900 border border-white/20 p-4 text-white text-center tracking-widest mb-4 outline-none focus:border-[#ff5722] w-full max-w-xs rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={checkAuth} className="bg-[#ff5722] text-black font-bold px-8 py-3 uppercase w-full max-w-xs rounded">
          Unlock Console
        </button>
      </div>
    );
  }

  if (!data) return <div className="h-screen bg-black text-white flex items-center justify-center animate-pulse">ESTABLISHING LINK...</div>;

  return (
    <div className="min-h-screen bg-[#050505] p-6 text-white font-mono pb-24">
      <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
        <h1 className="text-2xl text-[#ff5722] font-bold font-[family-name:var(--font-blackops)]">ADMIN CONSOLE</h1>
        <button onClick={fetchData} className="p-2 bg-white/10 rounded-full"><RefreshCw size={20} /></button>
      </div>

      {/* TOP CUSTOMERS EDITOR */}
      <div className="mb-12 bg-neutral-900/50 p-4 rounded border border-white/10">
        <h2 className="text-sm text-neutral-400 mb-4 tracking-widest uppercase">Loyalty Leaderboard</h2>
        {data.topCustomers.map((user: any, i: number) => (
          <div key={i} className="flex gap-2 mb-3 items-center">
            <span className="w-6 text-neutral-500 font-bold">#{i+1}</span>
            <div className="flex-1 space-y-1">
                <input 
                value={user.name} 
                placeholder="Name"
                onChange={(e) => {
                    const newData = {...data};
                    newData.topCustomers[i].name = e.target.value;
                    setData(newData);
                }}
                className="bg-black border border-white/20 p-2 w-full text-white text-sm rounded"
                />
                <div className="flex gap-2">
                    <input 
                        type="number"
                        value={user.points} 
                        placeholder="Points"
                        onChange={(e) => {
                            const newData = {...data};
                            newData.topCustomers[i].points = e.target.value;
                            setData(newData);
                        }}
                        className="bg-black border border-white/20 p-2 w-1/2 text-[#ff5722] text-sm rounded"
                    />
                    <input 
                        value={user.title} 
                        placeholder="Rank"
                        onChange={(e) => {
                            const newData = {...data};
                            newData.topCustomers[i].title = e.target.value;
                            setData(newData);
                        }}
                        className="bg-black border border-white/20 p-2 w-1/2 text-neutral-400 text-sm rounded"
                    />
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOP PRODUCTS EDITOR */}
      <div className="mb-12 bg-neutral-900/50 p-4 rounded border border-white/10">
        <h2 className="text-sm text-neutral-400 mb-4 tracking-widest uppercase">Popular Dishes</h2>
        {data.topProducts.map((item: any, i: number) => (
          <div key={i} className="flex gap-2 mb-3 items-center">
            <span className="w-6 text-neutral-500 font-bold">#{i+1}</span>
            <div className="flex-1 flex gap-2">
                <input 
                value={item.name} 
                onChange={(e) => {
                    const newData = {...data};
                    newData.topProducts[i].name = e.target.value;
                    setData(newData);
                }}
                className="bg-black border border-white/20 p-2 flex-1 text-white text-sm rounded"
                />
                <input 
                type="number"
                value={item.sold} 
                onChange={(e) => {
                    const newData = {...data};
                    newData.topProducts[i].sold = e.target.value;
                    setData(newData);
                }}
                className="bg-black border border-white/20 p-2 w-20 text-[#ff5722] text-sm rounded"
                />
            </div>
          </div>
        ))}
      </div>

      {/* SAVE BUTTON */}
      <button 
        onClick={handleSave} 
        disabled={loading}
        className="fixed bottom-6 right-6 left-6 bg-[#ff5722] text-black font-bold p-4 rounded shadow-[0_0_20px_#ff5722] flex items-center justify-center gap-2 uppercase tracking-wider"
      >
        <Save size={24} />
        {loading ? "SAVING..." : "SAVE CHANGES"}
      </button>
    </div>
  );
}
