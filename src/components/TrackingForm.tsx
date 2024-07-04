import { useState } from 'react';
import { ImSpinner8 } from 'react-icons/im';
import s from '../pages/register/Register.module.css';

export default function TrackingForm() {
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
      const res = await fetch(`${url}/track`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingId }),
      });

      const data = await res.json();

      if (res.ok) {
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
          className=" border text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
          placeholder="ID"
          required
        />

        <div className="flex gap-5">
          <button
            type="submit"
            className="w-full text-gray-800 focus:ring-4 focus:outline-none font-medium rounded-xl text-base py-3 px-5 max-sm:py-4 text-center bg-[#00F0FF] hover:bg-blue-700 focus:ring-blue-800"
          >
            {loading ? <ImSpinner8 className='spin'/> : 'Submit'}
          </button>
        </div>
      </form>
      {error && <p className={s.formError}>{error}</p>}
    </div>
  );
}
