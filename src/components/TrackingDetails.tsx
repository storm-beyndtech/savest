import React, { useState } from 'react';

// Define the interface for a single table row
interface ClientDetailsRow {
  name: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  date: string;
}

interface PackageDetailsRow {
  name: string;
  desc: string;
  length: string;
  quantity: string;
  weight: string;
  width: string;
}

interface ShippingUpdateRow {
  message: string;
  location: string;
  status: string;
  time: string;
}

// Define the interface for the data object
interface Data {
  clientsDetails: ClientDetailsRow[];
  packageDetails: PackageDetailsRow[];
  shippingUpdate: ShippingUpdateRow[];
}

// Define the interface for the tabs
interface Tab {
  name: string;
  key: keyof Data;
}

const tabs: Tab[] = [
  { name: 'Clients Details', key: 'clientsDetails' },
  { name: 'Package Details', key: 'packageDetails' },
  { name: 'Shipping Update', key: 'shippingUpdate' },
];

const data: Data = {
  clientsDetails: [
    {
      name: 'Stevie van',
      email: 'stevievan@gmail.com',
      phone: '$2999',
      country: 'Germany',
      address: 'Skarbinastr 75 12309 Berlin',
      date: '2015 jun 12',
    },
  ],
  packageDetails: [
    {
      name: 'Shipment 4',
      desc: 'Brown Box, Fragile and Digital',
      length: '22cm',
      quantity: '4',
      weight: '37kg',
      width: '22cm',
    },
    {
      name: 'Shipment 5',
      desc: 'green Box, Fragile and Digital',
      length: '22cm',
      quantity: '4',
      weight: '37kg',
      width: '22cm',
    },
  ],
  shippingUpdate: [
    {
      message: 'Shipment',
      location: 'Frankfrurt',
      status: 'Pending ',
      time: '11:00',
    },
    {
      message: 'Shipment',
      location: 'Frankfrurt',
      status: 'Pending ',
      time: '11:00',
    },
  ],
};

const TrackingDetails: React.FC = () => {
  const [activeTab, setActiveTab] = useState<keyof Data>(tabs[0].key);

  const getCellWidthClass = (text: string) => {
    return text.length > 7 ? 'min-w-[180px]' : text.length > 18 ? 'min-w-[250px]' : '';
  };

  const renderTableRows = (rows: any[]) => {
    return rows.map((row, index) => (
      <tr key={index} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
        {Object.values(row).map((value, i) => (
          <td key={i} className={`px-6 py-4 font-medium ${getCellWidthClass(String(value))}`}>
            {value as React.ReactNode}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <>
      <div className="w-full max-w-xl mb-10 mx-auto flex flex-1 justify-center gap-4 px-5">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-1.5 max-sm:py-2 text-sm max-sm:text-xs font-medium rounded-2xl !leading-5 ${
              activeTab === tab.key
                ? 'bg-[#0b4f68] text-gray-200'
                : 'bg-gray-900 text-gray-200'
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="relative overflow-x-auto w-full max-w-5xl mx-auto px-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 shadow-2xl !rounded-3xl border overflow-hidden mb-8">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              {Object.keys(data[activeTab][0]).map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header.charAt(0).toUpperCase() + header.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderTableRows(data[activeTab])}</tbody>
        </table>
      </div>
    </>
  );
};

export default TrackingDetails;
