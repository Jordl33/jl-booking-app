export default function BookingPage({ params }) {
  const { quoteId } = params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white/20 backdrop-blur-2xl border-b border-white/40 sticky top-0 z-10 shadow-lg shadow-blue-100/20">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-slate-800">
            Book Your Appointment
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            J L Electrical Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        
        {/* Quote Info Card */}
        <div className="bg-white/30 backdrop-blur-3xl rounded-3xl p-6 mb-6 border border-white/50 shadow-2xl shadow-blue-200/30 relative overflow-hidden">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-medium text-slate-800 mb-3">
              Your Quote Details
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-600">Quote ID:</span>
                <span className="font-medium text-slate-800 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">#{quoteId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Estimated Duration:</span>
                <span className="font-medium text-slate-800">Loading...</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Service:</span>
                <span className="font-medium text-slate-800">Loading...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Placeholder */}
        <div className="bg-white/25 backdrop-blur-3xl rounded-3xl p-6 mb-6 border border-white/50 shadow-2xl shadow-blue-200/30 relative overflow-hidden">
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-50/20 rounded-3xl"></div>
          <div className="relative z-10">
            <h3 className="text-lg font-medium text-slate-800 mb-4">
              Choose Your Date & Time
            </h3>
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/40 shadow-inner">
              <p className="text-slate-700 text-lg">
                📅 Calendar component will go here
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Step 2: Add 30-day calendar view
              </p>
            </div>
          </div>
        </div>

        {/* Confirm Button (disabled for now) */}
        <button 
          disabled
          className="w-full bg-white/20 backdrop-blur-xl text-slate-500 font-medium py-4 rounded-3xl cursor-not-allowed border border-white/40 transition-all duration-300 shadow-lg shadow-blue-100/20 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent rounded-3xl"></div>
          <span className="relative z-10">Select a Time Slot First</span>
        </button>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-slate-500">
          <p>Secure booking powered by J L Electrical Services</p>
        </div>
      </div>
    </div>
  );
}