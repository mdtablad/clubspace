
import { getDatabase, ref, onValue, child, get} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const db = getDatabase();

// -- Current Club Data --
// --[[TEMP 
var institution = "Waipahu High School";
var clubName = "ExampleClub";
// ]]--
var clubData;

const dbRef = ref(getDatabase());
get(child(dbRef, `clubs/${institution}/${clubName}`)).then((snapshot) => {
  if (snapshot.exists()) {
    clubData = snapshot.val();
  } else {
    console.log("No data available for: " + institution + " - " + clubName);
  }
}).catch((error) => {
  console.error(error);
});

// -- Read Data Listeners --
// Read Announcements Data
const announcementsRef = ref(db, 'announcements/' + institution + '/' + clubName);
onValue(announcementsRef, (snapshot) => {
  const data = snapshot.val();
  //updateAnnouncements(postElement, data);
});
