import React, { useState } from 'react';

export default function SBIAlert() {
  const [showPage, setShowPage] = useState(false);

  if (!showPage) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Transaction Alert</h2>
          <p className="text-gray-600 mb-6">Click the link below to view your transaction details</p>
          <button
            onClick={() => setShowPage(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            View Transaction Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SBI Header */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xl">SBI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">State Bank of India</h1>
              <p className="text-blue-200 text-sm">Internet Banking</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-800 border-b border-blue-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex gap-6 text-white text-sm py-3">
            <span className="cursor-pointer hover:text-blue-200">Home</span>
            <span className="cursor-pointer hover:text-blue-200">Accounts</span>
            <span className="font-semibold border-b-2 border-white pb-3">Transactions</span>
            <span className="cursor-pointer hover:text-blue-200">Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Account Info Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="border-l-4 border-blue-900 pl-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Transaction Alert</h2>
            <p className="text-gray-500 text-sm">Account Statement</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-gray-500 text-sm mb-1">Account Holder Name</p>
              <p className="text-gray-800 font-semibold text-lg">RAJESH KUMAR SHARMA</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm mb-1">Account Number</p>
              <p className="text-gray-800 font-semibold text-lg">30123456789</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">!</span>
                </div>
                <div className="flex-1">
                  <p className="text-red-900 font-semibold text-lg mb-2">Amount Debited</p>
                  <p className="text-red-700 text-3xl font-bold">₹ 3,000.00</p>
                  <p className="text-gray-600 text-sm mt-3">Transaction Date: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                  <p className="text-gray-600 text-sm">Transaction Time: {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Transaction Type</span>
              <span className="text-gray-800 font-semibold">Debit</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Transaction ID</span>
              <span className="text-gray-800 font-semibold">TXN{Math.floor(Math.random() * 1000000000)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Mode</span>
              <span className="text-gray-800 font-semibold">Online Transfer</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-600">Available Balance</span>
              <span className="text-gray-800 font-semibold">₹ 47,250.00</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Note:</span> This is an automated alert from State Bank of India. 
            For any queries, please contact our customer care or visit the nearest branch.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-blue-200">© State Bank of India. All rights reserved.</p>
          <p className="text-xs text-blue-300 mt-2">For security reasons, please do not share your banking details with anyone.</p>
        </div>
      </div>
    </div>
  );
}