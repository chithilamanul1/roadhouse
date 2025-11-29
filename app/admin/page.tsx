"use client";

import { useState, useEffect } from "react";
import { getMasterData, saveMasterData, uploadImage } from "@/lib/storage";
import { Save, Lock, RefreshCw, Upload, Trash, Plus, Image as ImageIcon, Utensils, Camera } from "lucide-react";

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState("");
  const [activeTab, setActiveTab] = useState("MENU");
  const [data, setData] = useState<any>({ menu: [], gallery: [] });
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // AUTH
  const checkAuth = () => { if (pass === "roadhouse2025") setAuth(true); };

  // LOAD
  useEffect(() => {
    if (auth) {
      setLoading(true);
      getMasterData().then((cloudData) => {
        if (cloudData) {
            // Ensure arrays exist
            if (!cloudData.menu) cloudData.menu = [];
            if (!cloudData.gallery) cloudData.gallery = [];
            setData(cloudData);
        }
        setLoading(false);
      });
    }
  }, [auth]);

  // SAVE
  const handleSave = async () => {
    setLoading(true);
    await saveMasterData(data);
    setLoading(false);
    alert("WEBSITE UPDATED SUCCESSFULLY");
  };

  // UPLOAD
  const handleImageUpload = async (e: any, target: 'menu' | 'gallery', index?: number) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const url = await uploadImage(file);
    setUploading(false);

    if (url) {
      const newData = { ...data };
      if (target === 'gallery') {
        newData.gallery.push(url);
      } else if (target === 'menu' && index !== undefined) {
        newData.menu[index].image = url;
      }
      setData(newData);
    } else {
      alert("Upload Failed. Check ImgBB Key.");
    }
  };

  if (!auth) return (
    <div className="h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
      <Lock className="text-[#ff5722] mb-4" size={48} />
      <input type="password" placeholder="ACCESS CODE" className="bg-neutral-900 border border-white/20 p-4 text-center tracking-widest mb-4 w-full max-w-xs rounded focus:border-[#ff5722] outline-none" onChange={(e) => setPass(e.target.value)} />
      <button onClick={checkAuth} className="bg-[#ff5722] text-black font-bold px-8 py-3 w-full max-w-xs rounded">UNLOCK</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans pb-32">
      
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10 p-4 flex justify-between items-center">
        <h1 className="text-lg font-[family-name:var(--font-blackops)] text-[#ff5722]">ADMIN PANEL</h1>
        <button onClick={handleSave} className="px-6 py-2 bg-[#ff5722] text-black font-bold rounded flex items-center gap-2 text-sm">
            <Save size={16} /> {loading ? "SAVING..." : "PUBLISH CHANGES"}
        </button>
      </div>

      {/* TABS */}
      <div className="flex border-b border-white/10 bg-neutral-900/50">
        <button onClick={() => setActiveTab("MENU")} className={`flex-1 p-4 flex justify-center gap-2 text-xs font-bold tracking-widest ${activeTab === "MENU" ? "text-[#ff5722] border-b-2 border-[#ff5722]" : "text-neutral-500"}`}>
            <Utensils size={16} /> MENU MANAGER
        </button>
        <button onClick={() => setActiveTab("GALLERY")} className={`flex-1 p-4 flex justify-center gap-2 text-xs font-bold tracking-widest ${activeTab === "GALLERY" ? "text-[#ff5722] border-b-2 border-[#ff5722]" : "text-neutral-500"}`}>
            <Camera size={16} /> GALLERY MANAGER
        </button>
      </div>

      <div className="p-6 max-w-5xl mx-auto space-y-8">

        {/* --- MENU EDITOR --- */}
        {activeTab === "MENU" && (
            <div className="space-y-6">
                <button 
                    onClick={() => setData({ ...data, menu: [{ name: "New Dish", price: "0", description: "", category: "mains", image: "" }, ...data.menu] })}
                    className="w-full py-4 border-2 border-dashed border-white/20 text-neutral-400 hover:border-[#ff5722] hover:text-[#ff5722] flex items-center justify-center gap-2 rounded"
                >
                    <Plus size={20} /> ADD NEW ITEM
                </button>

                {data.menu.map((item: any, i: number) => (
                    <div key={i} className="bg-neutral-900 border border-white/10 p-4 rounded flex flex-col md:flex-row gap-4">
                        {/* Image */}
                        <div className="w-24 h-24 bg-black rounded relative group shrink-0 border border-white/10 overflow-hidden">
                            <img src={item.image || "https://via.placeholder.com/150"} className="w-full h-full object-cover" />
                            <label className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                                {uploading ? <RefreshCw className="animate-spin text-white"/> : <Upload className="text-white" size={20} />}
                                <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'menu', i)} />
                            </label>
                        </div>
                        {/* Inputs */}
                        <div className="flex-1 space-y-2">
                            <div className="flex gap-2">
                                <input value={item.name} onChange={(e) => { const m = [...data.menu]; m[i].name = e.target.value; setData({...data, menu: m}); }} className="flex-1 bg-black p-2 rounded border border-white/20" placeholder="Item Name" />
                                <input value={item.price} onChange={(e) => { const m = [...data.menu]; m[i].price = e.target.value; setData({...data, menu: m}); }} className="w-24 bg-black p-2 rounded border border-white/20 text-[#ff5722]" placeholder="Price" />
                            </div>
                            <input value={item.description} onChange={(e) => { const m = [...data.menu]; m[i].description = e.target.value; setData({...data, menu: m}); }} className="w-full bg-black p-2 rounded border border-white/20 text-sm text-neutral-400" placeholder="Description" />
                            <div className="flex justify-between">
                                <select value={item.category} onChange={(e) => { const m = [...data.menu]; m[i].category = e.target.value; setData({...data, menu: m}); }} className="bg-black p-2 rounded border border-white/20 text-xs">
                                    <option value="starters">Starters</option>
                                    <option value="subs_burgers">Subs & Burgers</option>
                                    <option value="mains">BBQ & Grill</option>
                                    <option value="rice_kottu">Rice & Kottu</option>
                                    <option value="portions">Meat Portions</option>
                                    <option value="drinks">Juice Bar</option>
                                    <option value="dessert">Desserts</option>
                                </select>
                                <button onClick={() => { if(confirm("Delete item?")) { const m = data.menu.filter((_:any, idx:number) => idx !== i); setData({...data, menu: m}); }}} className="text-red-500 text-xs flex items-center gap-1"><Trash size={14} /> DELETE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* --- GALLERY EDITOR --- */}
        {activeTab === "GALLERY" && (
            <div>
                <label className="w-full py-8 border-2 border-dashed border-white/20 text-neutral-400 hover:border-[#ff5722] hover:text-[#ff5722] flex flex-col items-center justify-center gap-2 rounded cursor-pointer mb-8">
                    {uploading ? <RefreshCw className="animate-spin" /> : <Upload size={32} />}
                    <span className="font-bold tracking-widest">UPLOAD NEW PHOTO</span>
                    <input type="file" className="hidden" onChange={(e) => handleImageUpload(e, 'gallery')} />
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.gallery.map((url: string, i: number) => (
                        <div key={i} className="relative group aspect-square bg-neutral-900 rounded overflow-hidden border border-white/10">
                            <img src={url} className="w-full h-full object-cover" />
                            <button onClick={() => { const g = data.gallery.filter((_:any, idx:number) => idx !== i); setData({...data, gallery: g}); }} className="absolute top-2 right-2 bg-red-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash size={16} /></button>
                        </div>
                    ))}
                </div>
            </div>
        )}

      </div>
    </div>
  );
}
