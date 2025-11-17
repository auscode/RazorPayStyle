import { megaMenuData } from "../data/menuData";

export default function MegaMenu() {
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-4
        w-[900px] bg-white shadow-2xl rounded-xl p-6
        hidden group-hover:flex gap-6 z-50"
    >
      {megaMenuData.map((col, i) => (
        <div key={i} className="flex-1 flex flex-col gap-3">
          <h3 className="text-xs font-semibold text-gray-500 uppercase">
            {col.title}
          </h3>

          {col.items.map((item, j) => {
            const Icon = item.icon;
            return (
              <div
                key={j}
                className="border rounded-lg p-3 hover:shadow cursor-pointer flex gap-3 items-start"
              >
                <Icon className="text-blue-600 text-xl" />
                <div>
                  <div className="font-semibold text-gray-800">
                    {item.label}
                  </div>
                  <p className="text-xs text-gray-500">Description…</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
