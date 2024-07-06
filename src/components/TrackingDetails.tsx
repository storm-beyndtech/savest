import React, { useState } from 'react';
import { ClientDetails, Data, PackageDetails, ShippingUpdate } from "./AdminTrackingForm";

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

interface TrackingDetailsProps {
  data: Data;
}

const TrackingDetails: React.FC<TrackingDetailsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<keyof Data>(tabs[0].key);

  const getCellWidthClass = (text: string) => {
    return text.length > 7 ? 'min-w-[180px]' : text.length > 18 ? 'min-w-[250px]' : '';
  };


  

  const renderTableRows = (rows: any) => {
    if (!Array.isArray(rows)) {
      return null;
    }
  
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