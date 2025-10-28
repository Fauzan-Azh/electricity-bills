'use client';

import Link from 'next/link';

export default function ElectricityBillsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Title */}
        <h1 className="font-bold text-black text-center mb-8" style={{fontSize: '48pt'}}>
          Data Tagihan Listrik
        </h1>

        {/* Action Buttons */}
        <div className="flex justify-center items-center mb-4">
          {/* Left side buttons */}
          <div className="flex" style={{gap: '17px'}}>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200" style={{backgroundColor: '#172813', fontSize: '20px'}} onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#1a2f15'; }} onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#172813'; }}>
              Export Data
            </button>
            <Link
              href="/electricity-bills/import"
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{backgroundColor: '#172813', fontSize: '20px'}}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.backgroundColor = '#1a2f15'; }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.backgroundColor = '#172813'; }}
            >
              Import Data
            </Link>
          </div>

          {/* Spacer */}
          <div style={{width: '532px'}}></div>

          {/* Right side button */}
          <div>
            <Link
              href="/electricity-bills/input"
              className="inline-flex items-center space-x-2 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              style={{backgroundColor: '#5EA127', fontSize: '20px'}}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.backgroundColor = '#6bb52d'; }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.backgroundColor = '#5EA127'; }}
            >
              <span>Tambah Data</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex justify-center" style={{marginTop: '39px'}}>
          <div className="bg-white rounded-lg overflow-hidden" style={{
            width: 'calc(170px + 17px + 170px + 532px + 210px)',
            border: '1px solid #345915'
          }}>
            <table className="w-full" style={{borderCollapse: 'collapse'}}>
            {/* Table Header */}
            <thead style={{backgroundColor: '#93C06E'}}>
              <tr>
                <th className="px-6 py-4 text-center text-gray-900 border-b border-r" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  No.
                </th>
                <th className="px-6 py-4 text-center text-gray-900 border-b border-r" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  Nama Panel
                </th>
                <th className="px-6 py-4 text-center text-gray-900 border-b border-r" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  Bulan
                </th>
                <th className="px-6 py-4 text-center text-gray-900 border-b border-r" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  kWh
                </th>
                <th className="px-6 py-4 text-center text-gray-900 border-b border-r" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  Jumlah Tagihan
                </th>
                <th className="px-6 py-4 text-center text-gray-900 border-b" style={{fontSize: '20px', fontWeight: '600', borderColor: '#345915'}}>
                  Action
                </th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((row, index) => (
                <tr key={row} className="hover:bg-gray-50">
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 border-r" style={{borderColor: '#345915', borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 border-r" style={{borderColor: '#345915', borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 border-r" style={{borderColor: '#345915', borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 border-r" style={{borderColor: '#345915', borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900 border-r" style={{borderColor: '#345915', borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                  <td className="px-6 py-6 whitespace-nowrap text-gray-900" style={{borderBottom: index === 5 ? 'none' : '1px solid #345915', fontSize: '20px'}}>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}
