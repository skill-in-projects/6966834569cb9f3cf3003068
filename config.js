// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi6966834569cb9f3cf3003068-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
