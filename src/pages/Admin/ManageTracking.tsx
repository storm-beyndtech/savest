import AdminTrackingForm from '@/components/AdminTrackingForm';
import { useEffect, useState } from 'react';
import { ShipmentData } from '@/components/AdminTrackingForm';

export default function ManageTracking() {
  const [trackings, setTrackings] = useState<ShipmentData[]>([]);
  const [trackingData, setTrackingData] = useState<null | ShipmentData>(null);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const toggleForm = (show: boolean, track: ShipmentData | null) => {
    setToggle(show);
    setTrackingData(show ? track : null);
  };

  const fetchTrackingData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}/trackings`);
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);
      setTrackings(data);
    } catch (error: any) {
      setError(error?.message || 'Failed to fetch tracking data');
    } finally {
      setLoading(false);
      setToggle(false);
    }
  };

  useEffect(() => {
    fetchTrackingData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      {!toggle ? (
        <div className="relative overflow-x-auto rounded-[6px]">
          <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
            <button
              onClick={() => toggleForm(true, null)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create new tracking
            </button>
          </div>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 border-collapse">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Client's Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Phone</th>
                <th scope="col" className="px-6 py-3">Country</th>
                <th scope="col" className="px-6 py-3">Tracking ID</th>
                <th scope="col" className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {trackings.map((tracking, i) => (
                <tr className="bg-white dark:bg-gray-800 border-b" key={tracking._id || i}>
                  <td className="px-6 py-4">{tracking.clientDetails.name || 'N/A'}</td>
                  <td className="px-6 py-4">{tracking.clientDetails.email || 'N/A'}</td>
                  <td className="px-6 py-4">{tracking.clientDetails.phone || 'N/A'}</td>
                  <td className="px-6 py-4">{tracking.clientDetails.country || 'N/A'}</td>
                  <td className="px-6 py-4">{tracking._id || 'N/A'}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleForm(true, tracking)}
                      className="font-medium text-blue-600 dark:text-blue-500"
                      aria-label={`Edit tracking ${tracking._id}`}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <AdminTrackingForm
          initialTrackingData={trackingData}
          toggleForm={toggleForm}
          refreshData={fetchTrackingData} // Pass fetch function to refresh data on form submit
        />
      )}
    </>
  );
}
