'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ImportDataPage() {
  const [dragActive, setDragActive] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
      console.log('File dropped:', e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      console.log('File selected:', e.target.files[0]);
    }
  };

  const handleSelectFile = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleImportData = () => {
    if (selectedFile) {
      // Handle import logic here
      console.log('Importing file:', selectedFile);
      // You can add your import logic here
    } else {
      alert('Pilih file terlebih dahulu');
    }
  };

  const handleDownloadTemplate = () => {
    // Create a temporary link element to download the CSV template
    const link = document.createElement('a');
    link.href = '/file/template_import_electricity.csv';
    link.download = 'template_import_electricity.csv'; // Download with original filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success modal
    setShowDownloadModal(true);
  };

  const handleCloseDownloadModal = () => {
    setShowDownloadModal(false);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/electricity-bills" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </Link>
        </div>

        {/* Page Header */}
        <div style={{marginBottom: '49px'}}>
          {/* Title */}
          <h1 className="font-bold text-black text-center mb-8" style={{fontSize: '48px'}}>
            Pilih Data
          </h1>
          
          {/* Action Buttons - Sejajar dengan area drop file */}
          <div className="flex justify-center">
            <div style={{width: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <button
                onClick={handleDownloadTemplate}
                className="inline-flex items-center justify-center space-x-2 text-white rounded-lg font-medium transition-colors duration-200"
                style={{
                  backgroundColor: '#5EA127', 
                  fontSize: '20px',
                  width: '251px',
                  height: '45px'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#6bb52d'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#5EA127'; }}
              >
                <span>Unduh Template</span>
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
              
              <button
                onClick={handleSelectFile}
                className="inline-flex items-center justify-center space-x-2 text-white rounded-lg font-medium transition-colors duration-200"
                style={{
                  backgroundColor: '#5EA127', 
                  fontSize: '20px',
                  width: '251px',
                  height: '45px'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#6bb52d'; }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#5EA127'; }}
              >
                <span>Pilih File</span>
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* File Upload Zone */}
        <div className="flex justify-center">
          <div
            className={`relative border-2 border-dashed rounded-lg transition-colors duration-200 ${
              dragActive ? 'border-green-600' : ''
            }`}
            style={{
              width: '600px',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: dragActive ? '#EFF6E9' : '#EFF6E9',
              borderColor: '#5EA127'
            }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {/* Hidden file input */}
            <input
              id="file-input"
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            {/* Upload Icon */}
            <svg
              className="w-16 h-16 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{color: '#646F61'}}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            
            {/* Instruction Text */}
            <p 
              className="mb-2"
              style={{
                color: '#646F61',
                fontSize: '20px',
                fontWeight: '600'
              }}
            >
              {selectedFile ? selectedFile.name : 'Pilih file yang ingin anda inputkan'}
            </p>
            
            {/* File Type Specification */}
            <p 
              style={{
                color: '#646F61',
                fontSize: '20px',
                fontWeight: '600'
              }}
            >
              File harus .csv
            </p>
          </div>
        </div>

        {/* Import Data Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleImportData}
            className="inline-flex items-center justify-center text-white rounded-lg font-medium transition-colors duration-200"
            style={{
              backgroundColor: '#172813',
              fontSize: '20px',
              width: '600px',
              height: '45px'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#1a2f15'; }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => { e.currentTarget.style.backgroundColor = '#172813'; }}
          >
            <span>Import Data</span>
          </button>
        </div>
      </div>

      {/* Download Success Modal */}
      {showDownloadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background Blur Overlay */}
          <div 
            className="absolute inset-0 backdrop-blur-md bg-white/20"
            onClick={handleCloseDownloadModal}
          ></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-lg"
            style={{
              width: '408px',
              height: '226px',
              boxShadow: '0 35px 60px -12px rgba(94, 161, 39, 0.5), 0 0 0 1px rgba(94, 161, 39, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseDownloadModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: '#5EA127',
                  boxShadow: '0 15px 35px -5px rgba(94, 161, 39, 0.6), 0 0 0 1px rgba(94, 161, 39, 0.2)'
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center">
              <h3 className="text-lg font-medium text-gray-900">
                Template berhasil diunduh
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
