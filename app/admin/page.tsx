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

  useEffect(() => {
    if (auth) {
      setLoading(true);
      getMasterData().then((cloudData) => {
        if (cloudData && cloudData.menu && cloudData.menu.length > 0) {
          setData(cloudData);
        } else {
          // If cloud data is empty, initialize with rich menu defaults
          setData({
            menu: MENU_ITEMS,
            gallery: cloudData?.gallery || [],
          });
        }
        setLoading(false);
      });
    }
  }, [auth]);

  const handleSave = async () => {
    setLoading(true);
    const success = await saveMasterData(data);
    setLoading(false);
    if (success) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } else {
      alert("Failed to save changes to cloud. Please check connection.");
    }
  };

  const loadDefaults = () => {
    if (confirm("Reset current menu items to official RoadHouse default menu? You will still need to click 'PUBLISH CHANGES' to save.")) {
      setData({ ...data, menu: MENU_ITEMS });
    }
  };

  const handleImageUpload = async (e: any, target: 'menu' | 'gallery', index?: number) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const url = await uploadImage(file);
    setUploading(false);

    if (url) {
      const newData = { ...data };
      if (target === 'gallery') {
        if (!newData.gallery) newData.gallery = [];
        newData.gallery.unshift(url);
      } else if (target === 'menu' && index !== undefined) {
        newData.menu[index].image = url;
      }
      setData(newData);
    } else {
      alert("Image upload failed. Ensure image file is under 5MB.");
    }
  };

  // QR Code URL computation
  const qrTargetUrl = `${siteUrl}/menu?table=${encodeURIComponent(selectedTable)}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=${encodeURIComponent(qrTargetUrl)}&margin=15&color=050811&bgcolor=FFFFFF`;

  const handlePrintQR = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html>
        <head>
          <title>RoadHouse Table QR - Table ${selectedTable}</title>
          <style>
            body { font-family: sans-serif; text-align: center; padding: 40px; background: #fff; color: #111; }
            .card { border: 3px solid #00D2FF; padding: 30px; border-radius: 20px; max-width: 380px; margin: 0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            h1 { font-size: 28px; margin: 0 0 5px; color: #0070F3; letter-spacing: 2px; }
            h2 { font-size: 14px; margin: 0 0 20px; color: #555; text-transform: uppercase; letter-spacing: 3px; }
            .qr-img { width: 240px; height: 240px; border-radius: 12px; margin-bottom: 20px; }
            .badge { background: #00D2FF; color: #000; font-weight: bold; font-size: 22px; padding: 8px 24px; border-radius: 50px; display: inline-block; margin-bottom: 12px; }
            p { font-size: 13px; color: #666; margin: 4px 0; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>ROADHOUSE</h1>
            <h2>CAFÉ &amp; RESTRO</h2>
            <img class="qr-img" src="${qrImageUrl}" alt="Table ${selectedTable} QR" />
            <div>
              <span class="badge">TABLE ${selectedTable}</span>
            </div>
            <p><strong>Scan with your smartphone camera</strong></p>
            <p>Browse live menu &amp; send order directly to our kitchen</p>
          </div>
          <script>
            window.onload = function() { window.print(); };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  // Login Screen
  if (!auth) {
    return (
      <div className="min-h-screen bg-[#050811] flex flex-col items-center justify-center p-6 text-white">
        <div className="w-full max-w-sm bg-[#0C172E] border border-[#00D2FF]/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,210,255,0.15)] text-center">
          <div className="w-16 h-16 rounded-full bg-[#00D2FF]/10 border border-[#00D2FF] flex items-center justify-center mx-auto mb-6 text-[#00D2FF]">
            <Lock size={28} />
          </div>
          
          <h1 className="text-2xl font-[family-name:var(--font-blackops)] text-white tracking-wider mb-2">
            ROADHOUSE <span className="text-[#00D2FF]">ADMIN</span>
          </h1>
          <p className="text-xs text-neutral-400 mb-6 font-mono">
            Enter administrative password to manage menu, gallery and table QR codes.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full bg-[#050811] border border-white/20 p-3.5 text-center tracking-widest text-white rounded-lg outline-none focus:border-[#00D2FF] transition-colors"
              autoFocus
            />

            {errorMsg && (
              <p className="text-xs text-red-400 font-mono flex items-center justify-center gap-1">
                <AlertCircle size={14} /> {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-[#00D2FF] text-black font-black py-3.5 rounded-lg uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all font-mono text-sm"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filteredMenuItems = (data.menu || []).filter((item: any) => {
    const matchesCat = menuFilter === "all" || item.category === menuFilter;
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0] font-sans pb-32 pt-28">
      
      {/* TOP CONTROL BAR */}
      <div className="sticky top-24 z-40 bg-[#070D1C]/95 backdrop-blur-md border-b border-[#00D2FF]/20 px-6 py-4 shadow-xl">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
            <h1 className="text-xl font-[family-name:var(--font-blackops)] text-white tracking-wider">
              ROADHOUSE <span className="text-[#00D2FF]">MANAGEMENT</span>
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {saveSuccess && (
              <span className="text-xs text-emerald-400 font-mono font-bold flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/30">
                <CheckCircle2 size={16} /> Saved to live site!
              </span>
            )}

            <button
              onClick={handleSave}
              disabled={loading}
              className="px-6 py-2.5 bg-[#00D2FF] text-black font-black rounded-lg flex items-center gap-2 text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw size={14} className="animate-spin" /> Publishing...
                </>
              ) : (
                <>
                  <Save size={14} /> Publish Changes
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="p-2.5 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="Sign Out"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 max-w-6xl mx-auto space-y-8">

        {/* OVERVIEW STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-[#0A1224] border border-[#00D2FF]/20 p-5 rounded-xl">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Total Dishes</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-[#00D2FF] mt-1">
              {(data.menu || []).length} Items
            </p>
          </div>

          <div className="bg-[#0A1224] border border-[#00D2FF]/20 p-5 rounded-xl">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Categories</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-white mt-1">
              {MENU_CATEGORIES.length} Sections
            </p>
          </div>

          <div className="bg-[#0A1224] border border-[#00D2FF]/20 p-5 rounded-xl">
            <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Gallery Photos</p>
            <p className="text-3xl font-[family-name:var(--font-bebas)] text-[#38BDF8] mt-1">
              {(data.gallery || []).length} Photos
            </p>
          </div>

          <div className="bg-[#0A1224] border border-emerald-500/20 p-5 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Website Status</p>
              <p className="text-xl font-bold text-emerald-400 mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> ONLINE
              </p>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#00D2FF] hover:underline flex items-center gap-1"
            >
              View Site <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* SECTION NAVIGATION TABS */}
        <div className="flex border-b border-white/10 bg-[#0A1224] rounded-t-xl overflow-hidden p-1">
          <button
            onClick={() => setActiveTab("MENU")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest rounded-lg transition-all ${
              activeTab === "MENU"
                ? "bg-[#00D2FF] text-black shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Utensils size={16} /> MENU MANAGER
          </button>

          <button
            onClick={() => setActiveTab("QR")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest rounded-lg transition-all ${
              activeTab === "QR"
                ? "bg-[#00D2FF] text-black shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <QrCode size={16} /> TABLE QR GENERATOR
          </button>

          <button
            onClick={() => setActiveTab("GALLERY")}
            className={`flex-1 py-3 px-4 flex items-center justify-center gap-2 text-xs font-bold tracking-widest rounded-lg transition-all ${
              activeTab === "GALLERY"
                ? "bg-[#00D2FF] text-black shadow-md"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Camera size={16} /> PHOTO GALLERY
          </button>
        </div>

        {/* ================= TAB 1: MENU MANAGER ================= */}
        {activeTab === "MENU" && (
          <div className="space-y-6">
            
            {/* Action Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={() =>
                    setData({
                      ...data,
                      menu: [
                        {
                          id: `dish_${Date.now()}`,
                          name: "New Dish",
                          price: "1000",
                          description: "Freshly made with special ingredients.",
                          category: "mains",
                          image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800",
                        },
                        ...data.menu,
                      ],
                    })
                  }
                  className="flex-1 md:flex-none px-6 py-3 bg-[#00D2FF]/10 border border-[#00D2FF] text-[#00D2FF] hover:bg-[#00D2FF] hover:text-black font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Plus size={16} /> Add New Dish
                </button>

                <button
                  onClick={loadDefaults}
                  className="px-4 py-3 border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors"
                  title="Reset to default menu"
                >
                  <RotateCcw size={14} /> Restore Defaults
                </button>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dish name..."
                  className="w-full bg-[#0A1224] border border-white/10 text-white pl-10 pr-4 py-2.5 rounded-lg text-xs outline-none focus:border-[#00D2FF]"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
              <button
                onClick={() => setMenuFilter("all")}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  menuFilter === "all"
                    ? "bg-[#00D2FF] text-black"
                    : "bg-[#0A1224] text-neutral-400 border border-white/10 hover:text-white"
                }`}
              >
                All ({(data.menu || []).length})
              </button>
              {MENU_CATEGORIES.map((cat) => {
                const count = (data.menu || []).filter((i: any) => i.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setMenuFilter(cat.id)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                      menuFilter === cat.id
                        ? "bg-[#00D2FF] text-black"
                        : "bg-[#0A1224] text-neutral-400 border border-white/10 hover:text-white"
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Menu Items List */}
            <div className="space-y-4">
              {filteredMenuItems.map((item: any, i: number) => {
                const realIndex = data.menu.findIndex((m: any) => m === item);
                return (
                  <div
                    key={item.id || i}
                    className="bg-[#0A1224] border border-white/10 p-5 rounded-xl flex flex-col md:flex-row gap-5 items-start hover:border-[#00D2FF]/40 transition-colors shadow-md"
                  >
                    {/* Image Preview & Upload Button */}
                    <div className="w-24 h-24 bg-black rounded-lg relative group shrink-0 border border-white/10 overflow-hidden">
                      <img
                        src={item.image || "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <label className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity text-[10px] text-white font-mono">
                        {uploading ? (
                          <RefreshCw className="animate-spin text-[#00D2FF]" size={18} />
                        ) : (
                          <>
                            <Upload size={18} className="text-[#00D2FF] mb-1" />
                            <span>CHANGE</span>
                          </>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(e, "menu", realIndex)}
                        />
                      </label>
                    </div>

                    {/* Inputs */}
                    <div className="flex-1 w-full space-y-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">Dish Name</label>
                          <input
                            value={item.name}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].name = e.target.value;
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050811] p-2.5 rounded-lg border border-white/20 text-white font-bold text-sm outline-none focus:border-[#00D2FF]"
                            placeholder="Dish name"
                          />
                        </div>

                        <div className="w-full sm:w-36">
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">Price (LKR)</label>
                          <input
                            value={item.price}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].price = e.target.value;
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050811] p-2.5 rounded-lg border border-white/20 text-[#00D2FF] font-mono font-bold text-sm outline-none focus:border-[#00D2FF]"
                            placeholder="Price"
                          />
                        </div>

                        <div className="w-full sm:w-44">
                          <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">Category</label>
                          <select
                            value={item.category}
                            onChange={(e) => {
                              const m = [...data.menu];
                              m[realIndex].category = e.target.value;
                              setData({ ...data, menu: m });
                            }}
                            className="w-full bg-[#050811] p-2.5 rounded-lg border border-white/20 text-xs text-white outline-none focus:border-[#00D2FF]"
                          >
                            {MENU_CATEGORIES.map((c) => (
                              <option key={c.id} value={c.id}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-mono text-neutral-400 uppercase mb-1">Description / Ingredients</label>
                        <input
                          value={item.description || ""}
                          onChange={(e) => {
                            const m = [...data.menu];
                            m[realIndex].description = e.target.value;
                            setData({ ...data, menu: m });
                          }}
                          className="w-full bg-[#050811] p-2 rounded-lg border border-white/10 text-xs text-neutral-300 outline-none focus:border-[#00D2FF]"
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
                          className="text-red-400 hover:text-red-300 text-xs flex items-center gap-1 font-mono transition-colors"
                        >
                          <Trash size={14} /> Remove Dish
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
          <div className="bg-[#0A1224] border border-[#00D2FF]/30 p-8 rounded-2xl shadow-xl space-y-8">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-[family-name:var(--font-blackops)] text-white">
                  TABLE QR CODE <span className="text-[#00D2FF]">ORDERING</span>
                </h2>
                <p className="text-sm text-neutral-400 mt-1 max-w-xl">
                  Print QR code tent cards and place them on your dining tables. When customers scan with their phones, it opens the digital menu pre-set to their exact table so they can order food instantly!
                </p>
              </div>

              <button
                onClick={handlePrintQR}
                className="px-6 py-3 bg-[#00D2FF] text-black font-black text-xs uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-white shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
              >
                <Printer size={16} /> Print Table Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-[#00D2FF] mb-2 font-bold">
                    1. Choose Table Number
                  </label>
                  <select
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                    className="w-full bg-[#050811] border border-white/20 text-white font-bold p-3.5 rounded-lg text-base outline-none focus:border-[#00D2FF]"
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
                  <div className="p-3 bg-[#050811] border border-white/10 rounded-lg text-xs font-mono text-[#38BDF8] break-all">
                    {qrTargetUrl}
                  </div>
                </div>

                <div className="p-4 bg-[#050811] border border-[#00D2FF]/20 rounded-xl space-y-2 text-xs text-neutral-300">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#00D2FF]" /> How it works:
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
                <div className="bg-white text-black p-8 rounded-2xl shadow-2xl text-center max-w-xs w-full border-4 border-[#00D2FF]">
                  <h3 className="font-[family-name:var(--font-blackops)] text-2xl tracking-wider text-[#0070F3] mb-0.5">
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
                    <span className="bg-[#00D2FF] text-black font-black font-mono text-lg px-4 py-1 rounded-full uppercase tracking-wider inline-block">
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
            <label className="w-full py-10 border-2 border-dashed border-[#00D2FF]/40 bg-[#0A1224] text-neutral-300 hover:border-[#00D2FF] hover:text-white flex flex-col items-center justify-center gap-2 rounded-2xl cursor-pointer transition-all shadow-md">
              {uploading ? (
                <RefreshCw className="animate-spin text-[#00D2FF]" size={36} />
              ) : (
                <Upload size={36} className="text-[#00D2FF]" />
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
                    className="relative group aspect-square bg-[#0A1224] rounded-xl overflow-hidden border border-white/10 hover:border-[#00D2FF]/50 transition-all shadow-lg"
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
