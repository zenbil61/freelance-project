
export default function FloatingLoginForm({
  title,
  description,
  image,
}) {
  // 4 satırı geçerse ... göster
  // 4 satır için yaklaşık 220 karakter sınırı (her satır ortalama 55 karakter)
  const maxChars = 220;
  const isTruncated = description && description.length > maxChars;
  const displayText = isTruncated ? description.slice(0, maxChars) + "..." : description;

  return (
    <div className="w-full h-full flex flex-col justify-center items-end">
      <div className="relative w-full h-full max-w-[500px] max-h-[420px] aspect-square mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-blue-200 to-sky-400 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative w-full h-full px-4 py-10 shadow-lg sm:rounded-3xl sm:p-10 overflow-hidden flex flex-col justify-center items-center aspect-square">
          {/* Haber resmi varsa, kartın arka planında göster */}
          {image && (
            <>
              <img
                src={image}
                alt="Haber görseli"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-300"
                style={{ borderRadius: '1.5rem' }}
              />
              {/* Koyu overlay */}
              <div className="absolute inset-0 bg-black/50 z-0 rounded-3xl" />
            </>
          )}
          <div className="w-full h-full flex flex-col justify-end items-center relative z-10 pb-6">
            <div className="w-full">
              <h1 className="text-2xl text-white font-semibold text-parimary mb-2">{title}</h1>
              <p className="text-slate-200 mb-4">{displayText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
