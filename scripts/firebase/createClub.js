import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-database.js";

const database = getDatabase();

// -- Write Data Functions --
// Init Club Data
function writeClubData(institution, clubName, icon, owner, topic, visibility, jProcess, description) {
  const db = getDatabase();
    set(ref(db, 'clubs/' + institution + '/' + clubName), {
        icon: icon,
        owner: owner,
        topic: topic,
        visibility: visibility,
        jProcess: jProcess,
        creationDate: new Date().toISOString(),
        description: description
    });
    console.log("Club Created: " + institution + " - " + clubName);
}

const myButton = document.getElementById("create-club-btn");

// Define what happens on click
myButton.addEventListener("click", function() {
  writeClubData('Waipahu High School', 'New Club', '../../public/bgs/waipahuHS-WBlding-wrnsStudio.jpg', 'Owner Name', 'Club Topic', 'Public', 'Instant', 'Club description');
});