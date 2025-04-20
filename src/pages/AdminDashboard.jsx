
import React, { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function AdminDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const snapshot = await getDocs(collection(db, "campaigns"));
      setData(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetch();
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <table>
        <thead><tr><th>SNS ID</th><th>Campaign</th><th>Visits</th></tr></thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.snsId}</td>
              <td>{item.campaign}</td>
              <td>{item.visits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
