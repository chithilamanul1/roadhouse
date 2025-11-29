// --- YOUR KEYS ---
const BIN_ID = "692b254c43b1c97be9cd0b42"; 
const JSON_API_KEY = "$2a$10$2sXRZd4DhW33xy5UlJV8TuBFKYX2nuxQ5zKAOF/qbptARHuM9i25u";

// ⚠️ YOU NEED AN IMGBB API KEY FOR IMAGE UPLOADS
// 1. Go to https://api.imgbb.com/
// 2. Click "Get API Key"
// 3. Paste it here:
const IMGBB_KEY = "02190228b666292eff077f901638a0d0"; 

// --- DATA FETCHING ---
export const getMasterData = async () => {
  try {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: { "X-Master-Key": JSON_API_KEY },
      cache: 'no-store'
    });
    const json = await res.json();
    return json.record;
  } catch (error) {
    console.error("Database Error:", error);
    return null;
  }
};

// --- DATA SAVING ---
export const saveMasterData = async (newData: any) => {
  try {
    await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "X-Master-Key": JSON_API_KEY
      },
      body: JSON.stringify(newData)
    });
    return true;
  } catch (error) {
    console.error("Save Error:", error);
    return false;
  }
};

// --- IMAGE UPLOAD ---
export const uploadImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_KEY}`, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    return data.data.url; 
  } catch (error) {
    console.error("Upload Error:", error);
    return null;
  }
};
