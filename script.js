
// Storing reminder info in an array
let reminders=[];
function createReminder(name,delayInSeconds)
{
    const timeoutId=setTimeout( ()=>
        {
            console.log(`⏰ Reminder: Hello ${name}, this is your reminder!`);


            reminders=reminders.filter(r=> r.name!==name);

        },delayInSeconds*1000);

        reminders.push({name,timeoutId});
        console.log(`✅ Reminder set for ${name} in ${delayInSeconds} seconds`);
}

// Cancel Reminder Based on Name
function cancelReminder(name)
{
    const reminder=reminders.find(r=> r.name===name);
    if(reminder)
    {
        clearTimeout(reminder.timeoutId);
        reminders=reminders.filter(r=> r.name!==name);
        console.log(`❌ Reminder for ${name} cancelled.`);
    } else {
        console.log(`⚠️ No active reminder found for ${name}`);
    }
}

function showActiveReminders()
{
    if(reminders.length===0)
    {
        console.log("No active reminders.");
    }
    else
    {
        console.log("⏳ Active Reminders:");
        reminders.map(r => console.log(" - " + r.name));
    }
}


(function () {
    console.log("🚀 Reminder App Started!");

    createReminder("Ayush", 5);
    createReminder("Neha", 10);

    setTimeout(() => showActiveReminders(), 2000);

    setTimeout(() => cancelReminder("Ayush"), 3000);
})();
