// import TrackingDetails from "./TrackingDetails";
import { useState } from "react";
import TrackingDetails from "./TrackingDetails";
import TrackingForm from "./TrackingForm";
import { Data } from "./AdminTrackingForm";

export default function Tracking() {
  const [trackingDetails, setTrackingDetails] = useState<Data | null>(null);

  return (
    <div>
      <TrackingForm setTrackingDetails={setTrackingDetails} />
      {trackingDetails && <TrackingDetails data={trackingDetails} />}
    </div>
  )
}
