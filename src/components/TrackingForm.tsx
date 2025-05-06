import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import s from '../pages/register/Register.module.css';
import { ShipmentData } from './AdminTrackingForm';

interface TrackingFormProps {
  setTrackingDetails: (details: ShipmentData) => void;
}

export default function TrackingForm({
  setTrackingDetails,
}: TrackingFormProps) {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState<string | null>('');
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const handleChange = (e: any) => {
    setTrackingId(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${url}/trackings/${trackingId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        setTrackingDetails(data);
      } else {
        throw new Error(data.message);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto my-20 p-4 rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 border-gray-700">
      <form className="space-y-6" action="#" onSubmit={handleSubmit}>
        <h1 className="w-fit text-xl pb-4 font-normal text-white capitalize mx-auto">
          Enter Your Tracking ID
        </h1>
        <input
          onChange={handleChange}
          value={trackingId}
          type="text"
          className=" border text-sm rounded-xl focus:ring-[#00F0FF] focus:border-[#00F0FF] block w-full p-4 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="ID"
          required
        />

        <div className="flex gap-5">
          <button
            type="submit"
            className="w-full text-gray-800 focus:ring-4 focus:outline-none font-medium rounded-xl text-base py-3 px-5 max-sm:py-4 text-center bg-[#00F0FF] hover:bg-[#a7f9ff] focus:ring-[#00F0FF]"
          >
            {loading ? <ImSpinner8 className="spin mx-auto" /> : 'Submit'}
          </button>
        </div>
      </form>
      {error && <p className={s.formError}>{error}</p>}
    </div>
  );
}
