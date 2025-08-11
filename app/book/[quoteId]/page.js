export default function BookingPage({ params }) {
  const { quoteId } = params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-10">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-semibold text-gray-900">
            Book Your Appointment
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            J L Electrical Services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        
        {/* Quote Info Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900 mb-2">
            Your Quote Details
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Quote ID:</span>
              <span className="font-medium text-gray-900">#{quoteId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Duration:</span>
              <span className="font-medium text-gray-900">Loading...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Service:</span>
              <span className="font-medium text-gray-900">Loading...</span>
            </div>
          </div>
        </div>

        {/* Calendar Placeholder */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/30 shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Choose Your Date & Time
          </h3>
          <div className="bg-gray-100/50 rounded-xl p-8 text-center">
            <p className="text-gray-600">
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
          className="w-full bg-gray-300 text-gray-500 font-medium py-4 rounded-2xl cursor-not-allowed"
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