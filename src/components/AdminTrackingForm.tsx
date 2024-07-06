import React, { useEffect, useState } from 'react';
import s from '../pages/login/Login.module.css';

interface TrackingFormProps {
  toggleForm: (show: boolean, track:Data|null) => void;
  initialTrackingData: Data|null;
}

const AdminTrackingForm: React.FC<TrackingFormProps> = ({
  toggleForm,
  initialTrackingData,
}) => {
  const [trackingData, setTrackingData] = useState<Data>({
    _id: '',
    clientsDetails: [],
    packageDetails: [],
    shippingUpdate: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  useEffect(() => {
    if (initialTrackingData) {
      setTrackingData(initialTrackingData);
    }
  }, []);

  const handleInputChange = <K extends keyof Data>(
    category: K,
    index: number,
    field: keyof Data[K][number],
    value: string,
  ) => {
    const newData = { ...trackingData };
    (newData[category] as any)[index][field] = value;
    setTrackingData(newData);
  };




  const addItem = (category: keyof Data) => {
    const newData = { ...trackingData };

    if (category === 'clientsDetails') {
      newData.clientsDetails.push({
        name: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        date: '',
      });
    } else if (category === 'packageDetails') {
      newData.packageDetails.push({
        name: '',
        desc: '',
        length: '',
        quantity: '',
        weight: '',
        width: '',
      });
    } else if (category === 'shippingUpdate') {
      newData.shippingUpdate.push({
        message: '',
        location: '',
        status: '',
        time: '',
      });
    }
    setTrackingData(newData);
  };

  const removeItem = (category: keyof Data, index: number) => {
    const newData = { ...trackingData };
    (newData[category] as any).splice(index, 1);
    setTrackingData(newData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    console.log(trackingData)
    try {
      const res = await fetch(`${url}/trackings/${trackingData._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(trackingData),
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.message);
      }
      setLoading(false);
      setSuccess('Tracking Data Uploaded Successfully');
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative bg-white rounded-lg shadow dark:bg-gray-800 p-6"
    >
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
          Client Details
        </h3>
        {trackingData.clientsDetails.map((client, index) => (
          <div key={index} className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8 mb-6">
            <div>
              <label className="customInputLabel">Client's Name</label>
              <input
                type="text"
                value={client.name}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'name',
                    e.target.value,
                  )
                }
                placeholder="Name"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Email</label>
              <input
                type="email"
                value={client.email}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'email',
                    e.target.value,
                  )
                }
                placeholder="Email"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Phone</label>
              <input
                type="text"
                value={client.phone}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'phone',
                    e.target.value,
                  )
                }
                placeholder="Phone"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Country</label>
              <input
                type="text"
                value={client.country}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'country',
                    e.target.value,
                  )
                }
                placeholder="Country"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Address</label>
              <input
                type="text"
                value={client.address}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'address',
                    e.target.value,
                  )
                }
                placeholder="Address"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Date</label>
              <input
                type="date"
                value={client.date}
                onChange={(e) =>
                  handleInputChange(
                    'clientsDetails',
                    index,
                    'date',
                    e.target.value,
                  )
                }
                placeholder="Date"
                className="customInput"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => removeItem('clientsDetails', index)}
              className="w-20 text-rose-200 bg-[#920f2b] hover:bg-[#61071b] rounded-lg text-xs font-medium px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-[#7fff62] bg-[#1ddd001a] hover:bg-[#77ff0046] rounded-lg text-sm font-medium px-5 py-2.5"
          onClick={() => addItem('clientsDetails')}
        >
          Add Client
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
          Package Details
        </h3>
        {trackingData.packageDetails.map((pkg, index) => (
          <div key={index} className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8 mb-6">
            <div>
              <label className="customInputLabel">Name</label>
              <input
                type="text"
                value={pkg.name}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'name',
                    e.target.value,
                  )
                }
                placeholder="Name"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Description</label>
              <input
                type="text"
                value={pkg.desc}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'desc',
                    e.target.value,
                  )
                }
                placeholder="Description"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Length</label>
              <input
                type="text"
                value={pkg.length}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'length',
                    e.target.value,
                  )
                }
                placeholder="Length"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Quantity</label>
              <input
                type="text"
                value={pkg.quantity}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'quantity',
                    e.target.value,
                  )
                }
                placeholder="Quantity"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Weight</label>
              <input
                type="text"
                value={pkg.weight}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'weight',
                    e.target.value,
                  )
                }
                placeholder="Weight"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Width</label>
              <input
                type="text"
                value={pkg.width}
                onChange={(e) =>
                  handleInputChange(
                    'packageDetails',
                    index,
                    'width',
                    e.target.value,
                  )
                }
                placeholder="Width"
                className="customInput"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => removeItem('packageDetails', index)}
              className="w-20 text-rose-200 bg-[#920f2b] hover:bg-[#61071b] rounded-lg text-xs font-medium px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          className="text-[#7fff62] bg-[#1ddd001a] hover:bg-[#77ff0046] rounded-lg text-sm font-medium px-5 py-2.5"
          onClick={() => addItem('packageDetails')}
        >
          Add Package
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6">
          Shipping Update
        </h3>
        {trackingData.shippingUpdate.map((update, index) => (
          <div key={index} className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 mt-8 mb-6">
            <div>
              <label className="customInputLabel">Message</label>
              <input
                type="text"
                value={update.message}
                onChange={(e) =>
                  handleInputChange(
                    'shippingUpdate',
                    index,
                    'message',
                    e.target.value,
                  )
                }
                placeholder="Message"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Location</label>
              <input
                type="text"
                value={update.location}
                onChange={(e) =>
                  handleInputChange(
                    'shippingUpdate',
                    index,
                    'location',
                    e.target.value,
                  )
                }
                placeholder="Location"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Status</label>
              <input
                type="text"
                value={update.status}
                onChange={(e) =>
                  handleInputChange(
                    'shippingUpdate',
                    index,
                    'status',
                    e.target.value,
                  )
                }
                placeholder="Status"
                className="customInput"
                required
              />
            </div>

            <div>
              <label className="customInputLabel">Time</label>
              <input
                type="text"
                value={update.time}
                onChange={(e) =>
                  handleInputChange(
                    'shippingUpdate',
                    index,
                    'time',
                    e.target.value,
                  )
                }
                placeholder="Time"
                className="customInput"
                required
              />
            </div>

            <button
              type="button"
              onClick={() => removeItem('shippingUpdate', index)}
              className="w-20 text-rose-200 bg-[#920f2b] hover:bg-[#61071b] rounded-lg text-xs font-medium px-2 py-1"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => addItem('shippingUpdate')}
          className="text-[#7fff62] bg-[#1ddd001a] hover:bg-[#77ff0046] rounded-lg text-sm font-medium px-5 py-2.5"
        >
          Add Shipping
        </button>
      </div>

      <div className="flex gap-5">
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
        <button
          onClick={() => toggleForm(false, null)}
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Cancel
        </button>
      </div>
      {error && <p className={s.formError}>{error}</p>}
      {success && <p className={s.formSuccess}>{success}</p>}
    </form>
  );
};

export default AdminTrackingForm;

interface ClientDetails {
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  date: string;
}

interface PackageDetails {
  name: string;
  desc: string;
  length: string;
  quantity: string;
  weight: string;
  width: string;
}

interface ShippingUpdate {
  message: string;
  location: string;
  status: string;
  time: string;
}

export interface Data {
  _id: string;
  clientsDetails: ClientDetails[];
  packageDetails: PackageDetails[];
  shippingUpdate: ShippingUpdate[];
}
