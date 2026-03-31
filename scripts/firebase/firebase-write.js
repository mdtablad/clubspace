
import { getDatabase, ref, set } from "firebase/database";

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
}

// New Announcement 
function writeNewAnnouncement(institution, clubName, announcement, author) {
    const db = getDatabase();
    const newAnnouncementKey = push(child(ref(db), 'announcements/' + institution + '/' + clubName)).key;

    const announcementData = {
        institution: institution,
        clubName: clubName,
        announcement: announcement,
        author: author
    };
    set(ref(db, 'announcements/' + institution + '/' + clubName + '/' + newAnnouncementKey), announcementData);
}

// New Event
function writeNewEvent(institution, clubName, eventName, eventDate) {
    const db = getDatabase();
    const newEventKey = push(child(ref(db), 'events/' + institution + '/' + clubName)).key;

    const eventData = {
        institution: institution,
        clubName: clubName,
        eventName: eventName,
        eventDate: eventDate
    };
    set(ref(db, 'events/' + institution + '/' + clubName + '/' + newEventKey), eventData);
}

// New Task
function writeNewTask(institution, clubName, taskName, dueDate) {
    const db = getDatabase();
    const newTaskKey = push(child(ref(db), 'tasks/' + institution + '/' + clubName)).key;

    const taskData = {
        institution: institution,
        clubName: clubName,
        taskName: taskName,
        dueDate: dueDate
    };
    set(ref(db, 'tasks/' + institution + '/' + clubName + '/' + newTaskKey), taskData);
}

// Update Members
function updateClubMembers(institution, clubName, member, role, status) {
    const db = getDatabase();

    if (status === 'add') {
        set(ref(db, 'clubs/' + institution + '/' + clubName + '/members/' + role + '/' + member), true);
    } else if (status === 'remove') {
        set(ref(db, 'clubs/' + institution + '/' + clubName + '/members/' + role + '/' + member), null);
    }
}