export default function MegaMenu() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-4 
                    w-[900px] bg-white shadow-2xl rounded-xl p-6
                    hidden group-hover:flex gap-6 z-50"
    >
      {/* Column 1 */}
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase">
          Accept Payments Online
        </h3>

        {[
          "Payment Aggregator",
          "Payment Gateway",
          "Payment Links",
          "Payment Pages",
          "QR Codes",
          "UPI Payments",
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 hover:shadow cursor-pointer"
          >
            <div className="font-semibold text-gray-800">{item}</div>
            <p className="text-xs text-gray-500">Lorem text here…</p>
          </div>
        ))}
      </div>

      {/* Column 2 */}
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase">
          All-In-One Payments
        </h3>

        {[
          "Magic Checkout",
          "Subscriptions",
          "Instant Settlement",
          "Optimizer",
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 hover:shadow cursor-pointer"
          >
            <div className="font-semibold text-gray-800">{item}</div>
            <p className="text-xs text-gray-500">Description text…</p>
          </div>
        ))}
      </div>

      {/* Column 3 */}
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-xs font-semibold text-gray-500 uppercase">
          International Payments
        </h3>

        {[
          "Omnichannel Payments",
          "International Payments",
          "International Bank Transfers",
          "Accept Payments from India",
        ].map((item, i) => (
          <div
            key={i}
            className="border rounded-lg p-3 hover:shadow cursor-pointer"
          >
            <div className="font-semibold text-gray-800">{item}</div>
            <p className="text-xs text-gray-500">Description…</p>
          </div>
        ))}
      </div>
    </div>
  );
}
