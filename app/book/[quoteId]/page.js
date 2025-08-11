export default function BookingPage({ params }) {
  const { quoteId } = params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header */}
      <div className="bg-gray-800/40 backdrop-blur-xl border-b border-gray-700/30 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-white">
            Book Your Appointment
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            J L Electrical Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        
        {/* Quote Info Card */}
        <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-6 mb-6 border border-gray-700/20 shadow-2xl">
          <h2 className="text-lg font-medium text-white mb-2">
            Your Quote Details
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Quote ID:</span>
              <span className="font-medium text-gray-100 bg-gray-700/40 px-3 py-1 rounded-full">#{quoteId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Estimated Duration:</span>
              <span className="font-medium text-gray-100">Loading...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Service:</span>
              <span className="font-medium text-gray-100">Loading...</span>
            </div>
          </div>
        </div>

        {/* Calendar Placeholder */}
        <div className="bg-gray-800/30 backdrop-blur-xl rounded-3xl p-6 mb-6 border border-gray-700/20 shadow-2xl">
          <h3 className="text-lg font-medium text-white mb-4">
            Choose Your Date & Time
          </h3>
          <div className="bg-gray-700/20 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-600/20">
            <p className="text-gray-300 text-lg">
              📅 Calendar component will go here
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Step 2: Add 30-day calendar view
            </p>
          </div>
        </div>

        {/* Confirm Button (disabled for now) */}
        <button 
          disabled
          className="w-full bg-gray-700/40 backdrop-blur-sm text-gray-400 font-medium py-4 rounded-3xl cursor-not-allowed border border-gray-600/20 transition-all duration-200"
        >
          Select a Time Slot First
        </button>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <p>Secure booking powered by J L Electrical Services</p>
        </div>
      </div>
    </div>
  );
}