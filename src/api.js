// Call the real vector search API endpoint
export const fetchData = async (query) => {
  try {
    // Use GET with query param as backend expects
    const url = `http://192.168.162.228:8000/search?q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
};
