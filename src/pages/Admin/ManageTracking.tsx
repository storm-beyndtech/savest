import AdminTrackingForm from '@/components/AdminTrackingForm';
import { useEffect, useState } from 'react';
import { Data } from '@/components/AdminTrackingForm';

export default function ManageTracking() {
  const [trackings, setTrackings] = useState([]);
  const [trackingData, setTrackingData] = useState<null | Data>(null);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const toggleForm = (show: boolean, track: any) => {
    setToggle(show);
    if (!show) setTrackingData(null);
    else setTrackingData(track);
  };

  const fetchTrackingData = async () => {
    try {
      const res = await fetch(`${url}/trackings`);
      const data = await res.json();

      if (res.ok) setTrackings(data);
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrackingData();
  }, [toggle]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Client's Name
                </th>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Email
                </th>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Phone
                </th>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Country
                </th>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Tracking ID
                </th>
                <th scope="col" className="min-w-35 text-nowrap px-6 py-3 rounded-s-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {trackings.map((tracking: any, i) => (
                <tr className="bg-white dark:bg-gray-800" key={i}>
                  <td className="px-6 py-4">
                    {tracking.clientsDetails[0]?.name || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    {tracking.clientsDetails[0]?.email || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    {tracking.clientsDetails[0]?.phone || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    {tracking.clientsDetails[0]?.country || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    {tracking.clientsDetails[0]?._id || 'N/A'}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => toggleForm(true, tracking)}
                      className="font-medium text-blue-600 dark:text-blue-500"
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
        />
      )}
    </>
  );
}
