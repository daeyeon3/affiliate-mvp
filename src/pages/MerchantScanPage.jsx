
import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { db } from "../services/firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

export default function MerchantScanPage() {
  const [result, setResult] = useState(null);

  const handleScan = async (data) => {
    if (data && data.startsWith("scan:")) {
      const id = data.replace("scan:", "");
      const docRef = doc(db, "campaigns", id);
      await updateDoc(docRef, { visits: increment(1) });
      setResult(`Campaign ${id} +1 visit`);
    }
  };

  return (
    <div>
      <h2>Scan QR Code</h2>
      <QrReader delay={300} onScan={handleScan} style={{ width: "100%" }} />
      {result && <p>{result}</p>}
    </div>
  );
}
