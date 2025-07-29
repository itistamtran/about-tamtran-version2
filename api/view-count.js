import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: "https://tamtran-portfolio-default-rtdb.firebaseio.com",
  });
}

const db = admin.database();

export default async function handler(req, res) {
  const ref = db.ref("viewCount");

  if (req.method === "POST") {
    await ref.transaction((current) => (current || 0) + 1);
  }
  const snapshot = await ref.once("value");
  res.status(200).json({ views: snapshot.val() });
}
