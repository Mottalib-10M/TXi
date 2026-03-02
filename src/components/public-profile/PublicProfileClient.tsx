"use client";

import { useState } from "react";
import { FareEstimator } from "./FareEstimator";
import { ProfileBookingForm } from "./ProfileBookingForm";

interface PublicProfileClientProps {
  driverId: string;
  driverName: string;
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
}

export function PublicProfileClient({
  driverId,
  driverName,
  baseFare,
  pricePerKm,
  pricePerMinute,
  minimumFare,
}: PublicProfileClientProps) {
  const [locations, setLocations] = useState({
    originAddress: "",
    originLat: undefined as number | undefined,
    originLng: undefined as number | undefined,
    destinationAddress: "",
    destinationLat: undefined as number | undefined,
    destinationLng: undefined as number | undefined,
  });

  return (
    <FareEstimator
      baseFare={baseFare}
      pricePerKm={pricePerKm}
      pricePerMinute={pricePerMinute}
      minimumFare={minimumFare}
      onLocationsChange={setLocations}
    >
      <ProfileBookingForm
        driverId={driverId}
        driverName={driverName}
        departureAddress={locations.originAddress}
        departureLat={locations.originLat}
        departureLng={locations.originLng}
        destinationAddress={locations.destinationAddress}
        destinationLat={locations.destinationLat}
        destinationLng={locations.destinationLng}
      />
    </FareEstimator>
  );
}
