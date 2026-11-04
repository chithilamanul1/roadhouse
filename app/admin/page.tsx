"use client";

import { useState, useEffect } from "react";
import { getMasterData, saveMasterData, uploadImage } from "@/lib/storage";
import { MENU_ITEMS, MENU_CATEGORIES } from "@/lib/menuData"; 
import { 
  Save, Lock, RefreshCw, Upload, Trash, Plus, RotateCcw, 
  Utensils, Camera, QrCode, Search, LogOut, CheckCircle2, 
  Printer, ExternalLink, Sparkles, AlertCircle, Layers
} from "lucide-react";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"MENU" | "GALLERY" | "QR">("MENU");
  const [data, setData] = useState<any>({ menu: [], gallery: [] });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Menu filters
  const [menuFilter, setMenuFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // QR Code Generator state
  const [selectedTable, setSelectedTable] = useState("1");
  const [siteUrl, setSiteUrl] = useState("https://roadhouse-chi.vercel.app");

  // Check persistent login session in browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("roadhouse_admin_session");
      if (savedAuth === "true") {
        setAuth(true);
      }
      if (window.location.origin) {
        setSiteUrl(window.location.origin);
      }
    }
  }, []);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pass === "roadhouse2025" || pass === "roadhouse") {
      setAuth(true);
      setErrorMsg("");
      if (typeof window !== "undefined") {
        sessionStorage.setItem("roadhouse_admin_session", "true");
      }
    } else {
      setErrorMsg("Incorrect admin password. Try again.");
    }
  };

  const handleLogout = () => {
    setAuth(false);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("roadhouse_admin_session");
    }
  };

  // Fetch initial data
  useEffect(() => {
    if (auth) {
      loadData();
    }
  }, [auth]);

  const loadData = async () => {
    setLoading(true);
    try {
      const master = await getMasterData();
      if (!master.menu || master.menu.length === 0) {
        master.menu = MENU_ITEMS;
      }
      setData(master);
    } catch (e) {
      console.error("Error loading master data:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await saveMasterData(data);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {
      alert("Error saving data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: "menu" | "gallery", index?: number) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const url = await uploadImage(file);
      if (target === "gallery") {
        setData({ ...data, gallery: [url, ...(data.gallery || [])] });
      } else if (target === "menu" && index !== undefined) {
        const updatedMenu = [...data.menu];
        updatedMenu[index].image = url;
        setData({ ...data, menu: updatedMenu });
      }
    } catch (err) {
      alert("Image upload failed. Please try a smaller image.");
    } finally {
      setUploading(false);
    }
  };

  const handleResetDefaults = () => {
    if (confirm("Reset menu back to official default items? Any custom items will be overwritten.")) {
      setData({ ...data, menu: MENU_ITEMS });
    }
  };

  // Filtered menu items
  const filteredMenu = (data.menu || []).filter((item: any) => {
    const matchesCategory = menuFilter === "all" || item.category === menuFilter;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Target URL for table QR code
  const qrTargetUrl = `${siteUrl}/menu?table=${encodeURIComponent(selectedTable)}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(qrTargetUrl)}&color=050505&bgcolor=ffffff&margin=10`;

  const handlePrintQR = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow popups to print the table QR card.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>RoadHouse - Table ${selectedTable} QR Code</title>
          <style>
            @page { size: auto; margin: 15mm; }
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 90vh;
              margin: 0;
              background: #fff;
              color: #000;
            }
            .card {
              border: 3px solid #ff5722;
              border-radius: 20px;
              padding: 40px;
              text-align: center;
              max-width: 380px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .brand {
              font-size: 32px;
              font-weight: 900;
              color: #ff5722;
              letter-spacing: 2px;
              margin: 0;
              text-transform: uppercase;
            }
            .subtitle {
              font-size: 13px;
              letter-spacing: 4px;
              text-transform: uppercase;
              color: #666;
              margin: 4px 0 24px 0;
            }
            .qr-frame {
              border: 2px dashed #ff5722;
              padding: 12px;
              border-radius: 16px;
              display: inline-block;
              margin-bottom: 20px;
            }
            .qr-img {
              width: 240px;
              height: 240px;
              display: block;
            }
            .table-badge {
              background: #ff5722;
              color: #fff;
              font-size: 24px;
              font-weight: 900;
              padding: 8px 24px;
              border-radius: 30px;
              display: inline-block;
              letter-spacing: 2px;
              margin-bottom: 14px;
            }
            .scan-text {
              font-size: 16px;
              font-weight: 700;
              margin: 0;
              color: #111;
            }
            .subtext {
              font-size: 12px;
              color: #777;
              margin-top: 6px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1 class="brand">ROADHOUSE</h1>
            <p class="subtitle">CAFÉ & RESTRO</p>
            <div class="qr-frame">
              <img class="qr-img" src="${qrImageUrl}" alt="Table ${selectedTable} QR Code" />
            </div>
            <div>
              <span class="table-badge">TABLE ${selectedTable}</span>
            </div>
            <p class="scan-text">SCAN WITH PHONE CAMERA TO ORDER</p>
            <p class="subtext">Browse our digital menu & order food right to your seat</p>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // ================= LOGIN SCREEN =================
  if (!auth) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-white">
        <form 
          onSubmit={handleLogin}
          className="bg-neutral-900/80 border border-white/10 p-8 rounded-2xl max-w-sm w-full backdrop-blur-md shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-[#ff5722]" />
          
          <div className="w-14 h-14 rounded-full bg-[#ff5722]/10 border border-[#ff5722]/30 flex items-center justify-center mx-auto mb-4 text-[#ff5722]">
            <Lock size={26} />
          </div>

          <h1 className="text-3xl font-[family-name:var(--font-blackops)] text-center text-white mb-1">
            ROADHOUSE
          </h1>
          <p className="text-xs font-mono text-center text-[#ff5722] uppercase tracking-[0.2em] mb-6">
            ADMIN PORTAL
          </p>

          {errorMsg && (
            <div className="mb-4 p-3 bg-red-950/50 border border-red-500/50 text-red-300 text-xs rounded-lg flex items-center gap-2">
              <AlertCircle size={16} className="shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-neutral-400 uppercase mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password..."
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="w-full bg-black/60 border border-white/10 p-3.5 rounded-lg text-white font-mono text-sm outline-none focus:border-[#ff5722] transition-colors"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff5722] hover:bg-white text-black font-bold p-3.5 rounded-lg font-mono text-sm uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(255,87,34,0.3)]"
            >
              Access Dashboard
            </button>
          </div>

          <p className="text-[11px] text-neutral-600 text-center font-mono mt-6">
            RoadHouse Seeduwa • Management Only
          </p>
        </form>
      </div>
    );
  }

  // ================= MAIN ADMIN DASHBOARD =================
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* TOP STATUS BAR (Matching user screenshot) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-neutral-900/60 border border-white/10 p-5 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#ff5722] animate-ping" />
            <div>
              <h1 className="text-2xl font-[family-name:var(--font-blackops)] text-white tracking-wide">
                ADMIN <span className="text-[#ff5722]">PANEL</span>
              </h1>
              <p className="text-xs font-mono text-neutral-400">
                RoadHouse Café & Restro • Seeduwa Live Operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {saveSuccess && (
              <span className="bg-[#25D366]/20 border border-[#25D366] text-[#25D366] text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Saved Live!
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={loading}
              className="px-5 py-2.5 bg-[#ff5722] text-black font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-white transition-all shadow-[0_0_15px_rgba(255,87,34,0.3)] disabled:opacity-50"
            >
              {loading ? <RefreshCw className="animate-spin" size={16} /> : <Save size={16} />}
              Save All Changes
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-white rounded-lg transition-colors"
              title="Log Out"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

        {/* STATS OVERVIEW CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl">
            <p className="text-[11px] font-mono text-neutral-500 uppercase">Total Menu Items</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-white mt-1">
              {(data.menu || []).length} Dishes
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl">
            <p className="text-[11px] font-mono text-neutral-500 uppercase">Categories</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-[#ff5722] mt-1">
              {MENU_CATEGORIES.length} Active
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl">
            <p className="text-[11px] font-mono text-neutral-500 uppercase">Gallery Photos</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-white mt-1">
              {(data.gallery || []).length} Uploaded
            </p>
          </div>
          <div className="bg-neutral-900/40 border border-white/5 p-4 rounded-xl">
            <p className="text-[11px] font-mono text-neutral-500 uppercase">Ordering Mode</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-[#25D366] mt-1">
              WhatsApp QR Active
            </p>
          </div>
        </div>

        {/* TAB NAVIGATION (Matching user screenshot) */}
        <div className="flex border-b border-white/10 gap-8">
          <button
            onClick={() => setActiveTab("MENU")}
            className={`pb-4 font-[family-name:var(--font-bebas)] text-xl tracking-wider flex items-center gap-2 transition-all border-b-2 -mb-[2px] ${
              activeTab === "MENU"
                ? "text-[#ff5722] border-[#ff5722]"
                : "text-neutral-500 border-transparent hover:text-neutral-300"
            }`}
          >
            <Utensils size={18} /> MENU MANAGER
          </button>

          <button
            onClick={() => setActiveTab("QR")}
            className={`pb-4 font-[family-name:var(--font-bebas)] text-xl tracking-wider flex items-center gap-2 transition-all border-b-2 -mb-[2px] ${
              activeTab === "QR"
                ? "text-[#ff5722] border-[#ff5722]"
                : "text-neutral-500 border-transparent hover:text-neutral-300"
            }`}
          >
            <QrCode size={18} /> TABLE QR ORDERING
          </button>

          <button
            onClick={() => setActiveTab("GALLERY")}
            className={`pb-4 font-[family-name:var(--font-bebas)] text-xl tracking-wider flex items-center gap-2 transition-all border-b-2 -mb-[2px] ${
              activeTab === "GALLERY"
                ? "text-[#ff5722] border-[#ff5722]"
                : "text-neutral-500 border-transparent hover:text-neutral-300"
            }`}
          >
            <Camera size={18} /> GALLERY MANAGER
          </button>
        </div>

        {/* ================= TAB 1: MENU MANAGER ================= */}
        {activeTab === "MENU" && (
          <div className="space-y-6">
            
            {/* Action Bar (Matching user screenshot dashed buttons) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  const newItem = {
                    id: `item-${Date.now()}`,
                    name: "New Delicious Dish",
                    category: "mains",
                    price: 1000,
                    description: "Freshly prepared with authentic Sri Lankan spices.",
                    image: "/images/real/real-patio-ambience.png",
                  };
                  setData({ ...data, menu: [newItem, ...(data.menu || [])] });
                }}
                className="p-5 border-2 border-dashed border-white/20 hover:border-[#ff5722] bg-neutral-900/40 text-neutral-300 hover:text-white rounded-xl flex items-center justify-center gap-2 font-[family-name:var(--font-bebas)] text-lg tracking-wider transition-all"
              >
                <Plus size={20} className="text-[#ff5722]" /> ADD BLANK ITEM
              </button>

              <button
                onClick={handleResetDefaults}
                className="p-5 border-2 border-dashed border-white/20 hover:border-[#ff5722] bg-neutral-900/40 text-neutral-300 hover:text-white rounded-xl flex items-center justify-center gap-2 font-[family-name:var(--font-bebas)] text-lg tracking-wider transition-all"
              >
                <RotateCcw size={20} className="text-[#ff5722]" /> LOAD DEFAULTS
              </button>
            </div>

            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between bg-neutral-900/40 p-4 rounded-xl border border-white/5">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-3.5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search dishes by name or ingredient..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#050505] pl-10 pr-4 py-2.5 rounded-lg border border-white/10 text-sm font-mono text-white placeholder:text-neutral-600 outline-none focus:border-[#ff5722]"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
                <button
                  onClick={() => setMenuFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    menuFilter === "all"
                      ? "bg-[#ff5722] text-black font-bold"
                      : "bg-white/5 text-neutral-400 hover:text-white"
                  }`}
                >
                  All ({data.menu?.length || 0})
                </button>
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setMenuFilter(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all ${
                      menuFilter === cat.id
                        ? "bg-[#ff5722] text-black font-bold"
                        : "bg-white/5 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu Items List (Matching user screenshot styling) */}
            <div className="space-y-4">
              {filteredMenu.map((item: any, i: number) => {
                const realIndex = data.menu.findIndex((m: any) => m.id === item.id);
                return (
                  <div
                    key={item.id || i}
                    className="bg-neutral-900/60 border border-white/10 hover:border-[#ff5722]/50 p-4 rounded-xl transition-all flex flex-col md:flex-row gap-4 items-start md:items-center"
                  >
                    {/* Item Image with upload button */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-black border border-white/10 shrink-0 group">
                      <img
                        src={item.image || "/images/real/real-signboard-day.png"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <label className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-[10px] font-mono text-[#ff5722]">
                        <Upload size={16} />
                        <span>Change</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, "menu", realIndex)}
                        />
                      </label>
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 space-y-2 w-full">
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                        <div className="sm:col-span-6">
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Dish Name</label>
                          <input
                            value={item.name}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].name = e.target.value;
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050505] p-2.5 rounded-lg border border-white/10 text-sm font-bold text-white outline-none focus:border-[#ff5722]"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Price (Rs.)</label>
                          <input
                            type="number"
                            value={item.price}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].price = Number(e.target.value);
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050505] p-2.5 rounded-lg border border-white/10 text-sm font-mono font-bold text-[#ff5722] outline-none focus:border-[#ff5722]"
                          />
                        </div>

                        <div className="sm:col-span-3">
                          <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Category</label>
                          <select
                            value={item.category}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].category = e.target.value;
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050505] p-2.5 rounded-lg border border-white/10 text-xs font-mono text-neutral-300 outline-none focus:border-[#ff5722]"
                          >
                            {MENU_CATEGORIES.map((cat) => (
                              <option key={cat.id} value={cat.id}>
                                {cat.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-neutral-500 uppercase mb-1">Description / Ingredients</label>
                        <input
                          value={item.description || ""}
                          onChange={(e) => {
                            const m = [...data.menu];
                            m[realIndex].description = e.target.value;
                            setData({ ...data, menu: m });
                          }}
                          className="w-full bg-[#050505] p-2 rounded-lg border border-white/10 text-xs text-neutral-400 outline-none focus:border-[#ff5722]"
                          placeholder="Short description of dish..."
                        />
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${item.name}" from menu?`)) {
                              const m = data.menu.filter((_: any, idx: number) => idx !== realIndex);
                              setData({ ...data, menu: m });
                            }
                          }}
                          className="text-[#ff5722] hover:text-red-400 text-xs flex items-center gap-1 font-mono transition-colors"
                        >
                          <Trash size={14} /> DELETE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ================= TAB 2: TABLE QR GENERATOR ================= */}
        {activeTab === "QR" && (
          <div className="bg-neutral-900/60 border border-white/10 p-8 rounded-2xl shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-[family-name:var(--font-blackops)] text-white">
                  TABLE QR CODE <span className="text-[#ff5722]">ORDERING</span>
                </h2>
                <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                  Print QR code tent cards and place them on your dining tables. When customers scan with their phones, it opens the digital menu pre-set to their exact table so they can order food instantly!
                </p>
              </div>

              <button
                onClick={handlePrintQR}
                className="px-6 py-3 bg-[#ff5722] text-black font-black text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-white shadow-[0_0_20px_rgba(255,87,34,0.4)] transition-all"
              >
                <Printer size={16} /> Print Table Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#ff5722] mb-2 font-bold">
                    1. Choose Table Number
                  </label>
                  <select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="w-full bg-[#050505] border border-white/20 text-white font-bold p-3.5 rounded-lg text-base outline-none focus:border-[#ff5722]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                      <option key={num} value={String(num)}>
                        Table {num}
                      </option>
                    ))}
                    <option value="Bar">Bar Counter</option>
                    <option value="Outdoor 1">Outdoor Table 1</option>
                    <option value="Outdoor 2">Outdoor Table 2</option>
                    <option value="Lounge">Lounge Area</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1">
                    2. Scanned Target URL
                  </label>
                  <div className="p-3 bg-[#050505] border border-white/10 rounded-lg text-xs font-mono text-[#ff5722] break-all">
                    {qrTargetUrl}
                  </div>
                </div>

                <div className="p-4 bg-[#050505] border border-[#ff5722]/30 rounded-xl space-y-2 text-xs text-neutral-300">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#ff5722]" /> How it works:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-neutral-400">
                    <li>Customer sits down at <strong>Table {selectedTable}</strong>.</li>
                    <li>They scan this QR with their camera.</li>
                    <li>The menu opens with <em>Table {selectedTable}</em> already selected.</li>
                    <li>They add dishes &amp; tap &quot;Send to Kitchen&quot; via WhatsApp.</li>
                  </ol>
                </div>

                <div className="flex gap-3">
                  <a
                    href={qrTargetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink size={14} /> Test Link in New Tab
                  </a>
                </div>
              </div>

              {/* Right: Preview Card */}
              <div className="flex justify-center">
                <div className="bg-white text-black p-8 rounded-2xl shadow-2xl text-center max-w-xs w-full border-4 border-[#ff5722]">
                  <h3 className="font-[family-name:var(--font-blackops)] text-2xl tracking-wider text-[#ff5722] mb-0.5">
                    ROADHOUSE
                  </h3>
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-600 mb-4 font-bold">
                    CAFÉ &amp; RESTRO
                  </p>

                  <div className="bg-neutral-50 p-3 rounded-xl inline-block border border-neutral-200 shadow-inner mb-4">
                    <img
                      src={qrImageUrl}
                      alt={`Table ${selectedTable} QR Code`}
                      className="w-48 h-48 object-contain"
                    />
                  </div>

                  <div className="mb-3">
                    <span className="bg-[#ff5722] text-black font-black font-mono text-lg px-4 py-1 rounded-full uppercase tracking-wider inline-block">
                      TABLE {selectedTable}
                    </span>
                  </div>

                  <p className="font-bold text-xs text-neutral-800">
                    Scan with camera to order
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">
                    Food &amp; drinks delivered straight to your table
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: PHOTO GALLERY ================= */}
        {activeTab === "GALLERY" && (
          <div className="space-y-6">
            <label className="w-full py-10 border-2 border-dashed border-[#ff5722]/40 bg-neutral-900/40 text-neutral-300 hover:border-[#ff5722] hover:text-white flex flex-col items-center justify-center gap-2 rounded-2xl cursor-pointer transition-all shadow-md">
              {uploading ? (
                <RefreshCw className="animate-spin text-[#ff5722]" size={36} />
              ) : (
                <Upload size={36} className="text-[#ff5722]" />
              )}
              <span className="font-bold font-[family-name:var(--font-bebas)] text-xl tracking-wider text-white">
                UPLOAD NEW RESTAURANT PHOTO
              </span>
              <span className="text-xs text-neutral-500 font-mono">PNG, JPG or WEBP up to 5MB</span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, "gallery")} />
            </label>

            <div>
              <h3 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4">
                Active Photos ({(data.gallery || []).length})
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {(data.gallery || []).map((url: string, i: number) => (
                  <div
                    key={i}
                    className="relative group aspect-square bg-neutral-900 rounded-xl overflow-hidden border border-white/10 hover:border-[#ff5722]/50 transition-all shadow-lg"
                  >
                    <img src={url} alt={`Gallery item ${i}`} className="w-full h-full object-cover" />
                    <button
                      onClick={() => {
                        if (confirm("Delete this photo from gallery?")) {
                          const g = data.gallery.filter((_: any, idx: number) => idx !== i);
                          setData({ ...data, gallery: g });
                        }
                      }}
                      className="absolute top-2 right-2 bg-red-600/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 shadow-md"
                      title="Delete Photo"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}