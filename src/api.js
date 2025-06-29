// Call the real vector search API endpoint
export const fetchData = async (query) => {
  try {
    const response = await fetch('https://192.168.162.228:8000/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
