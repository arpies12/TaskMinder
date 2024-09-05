// Task Manager Functionality
document.getElementById('add-task-btn')?.addEventListener('click', function () {
    const taskInput = document.getElementById('task-input').value;
    if (taskInput) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('div');
        taskItem.innerText = taskInput;
        taskList.appendChild(taskItem);
        document.getElementById('task-input').value = '';
    }
});

// Reminder Functionality
document.getElementById('set-reminder-btn')?.addEventListener('click', function () {
    const reminderTime = document.getElementById('reminder-time').value;
    const reminderText = document.getElementById('reminder-text').value;
    if (reminderTime && reminderText) {
        const reminderList = document.getElementById('reminder-list');
        const reminderItem = document.createElement('div');
        reminderItem.innerText = `Reminder: ${reminderText} at ${reminderTime}`;
        reminderList.appendChild(reminderItem);
    }
});

// Journal Functionality
document.getElementById('save-journal-btn')?.addEventListener('click', function () {
    const journalEntry = document.getElementById('journal-entry').value;
    if (journalEntry) {
        const journalEntries = document.getElementById('journal-entries');
        const journalItem = document.createElement('div');
        journalItem.innerText = journalEntry;
        journalEntries.appendChild(journalItem);
        document.getElementById('journal-entry').value = '';
    }
});
