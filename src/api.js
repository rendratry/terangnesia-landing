// api.js
export async function fetchProducts(limit, offset) {
    try {
        const url = `https://terangnesia-api-y2vek.ondigitalocean.app/terangnesia/api/v1/products/?limit=${limit}&offset=${offset}`;
        const headers = new Headers();
        headers.set('X-Api-Key', '12345678');

        const response = await fetch(url, {method: 'GET', headers});
        if (!response.ok) {
            throw new Error('Gagal mengambil data dari API');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        throw error; // Melempar kembali error untuk penanganan lebih lanjut
    }
}
