
import React from "react";
import { useParams } from "react-router-dom";
import QRCode from "qrcode.react";

export default function QRDisplayPage() {
  const { code } = useParams();
  return (
    <div>
      <h2>Show this QR for a free reward!</h2>
      <QRCode value={`scan:${code}`} size={256} />
    </div>
  );
}
