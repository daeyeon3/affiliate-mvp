
import React, { useState } from "react";
import { db } from "../services/firebase";
import { addDoc, collection } from "firebase/firestore";
import QRCode from "qrcode.react";

export default function CreatorPage() {
  const [campaign, setCampaign] = useState("");
  const [snsId, setSnsId] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [linkId, setLinkId] = useState("");

  const handleCreate = async () => {
    const docRef = await addDoc(collection(db, "campaigns"), {
      campaign, snsId, restaurant, visits: 0
    });
    setLinkId(docRef.id);
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <input placeholder="Campaign Name" onChange={(e) => setCampaign(e.target.value)} />
      <input placeholder="Social Media ID" onChange={(e) => setSnsId(e.target.value)} />
      <input placeholder="Restaurant" onChange={(e) => setRestaurant(e.target.value)} />
      <button onClick={handleCreate}>Generate Link</button>
      {linkId && <QRCode value={`https://yourdomain.com/visit/${linkId}`} />}
    </div>
  );
}
