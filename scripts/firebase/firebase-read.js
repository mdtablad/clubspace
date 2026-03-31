
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();

// Read Announcements Data
const announcementsRef = ref(db, 'announcements/' + institution + '/' + clubName);
onValue(announcementsRef, (snapshot) => {
  const data = snapshot.val();
  updateAnnouncements(postElement, data);
});