import React from "react";
import { MapPin } from "lucide-react";

interface MapProps {
  address: string;
  className?: string;
}

const Map: React.FC<MapProps> = ({ address, className = "" }) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`${className} relative`}>
      <iframe
        title="Google Maps"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={mapUrl}
        style={{ border: 0 }}
        aria-label={`Google Map showing ${address}`}
      ></iframe>
      
      {/* Fallback for cases where iframe might not load */}
      <div className="absolute inset-0 bg-gray-200 flex items-center justify-center opacity-0">
        <div className="text-center">
          <MapPin className="text-primary text-4xl mb-3 mx-auto" />
          <p className="text-neutral font-medium">Google Maps Integration</p>
          <p className="text-neutral/70 text-sm">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
