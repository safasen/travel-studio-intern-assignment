export async function pendingRequests() {
    /**
     * 
     * Fetches pending requests from the API.
     * @returns {Promise<Array>} A promise that resolves to an array of pending requests.   
     * @throws {Error} If the fetch request fails or the response is not ok.
     * 
     */
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/requests`,)
    if (!res.ok) {
        throw new Error("Failed to fetch pending requests");
    }

    return res.json();
}