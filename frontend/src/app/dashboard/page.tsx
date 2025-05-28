"use client";
import { useQuery } from "@tanstack/react-query";
import { pendingRequests } from "@/lib/api/requestsApi";


export default function DashboardPage() {
    /**
     * DashboardPage component that fetches and displays pending requests.
     * It uses the `useQuery` hook from `@tanstack/react-query` to fetch data
     * from the `pendingRequests` API function.
     * 
     * @returns {JSX.Element} The rendered component containing a table of pending requests.
     * @throws {Error} If the fetch request fails or the response is not ok.
     * 
     */

    type pendingRequest = {
        id: number;
        guestPhone: string;
        requestText: string;
        createdAt: Date;
        status: string
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["pendingRequests"],
        queryFn: pendingRequests,
    });

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6 text-center">
        Pending Requests
      </h1>
      {isLoading ? (
        <p className="text-blue-700 text-center">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-center">Error loading requests.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
          <table className="min-w-full text-sm md:text-base">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="text-left px-4 py-3">Phone</th>
                <th className="text-left px-4 py-3">Text</th>
                <th className="text-left px-4 py-3">Created At</th>
              </tr>
            </thead>
            <tbody>
              {(data as pendingRequest[]).map((item: pendingRequest, index: number) => (
                <tr key={item.id ?? index} className="border-t hover:bg-blue-50">
                  <td className="px-4 py-3 text-blue-800">{item.guestPhone}</td>
                  <td className="px-4 py-3 text-blue-800">{item.requestText}</td>
                  <td className="px-4 py-3 text-blue-600">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}