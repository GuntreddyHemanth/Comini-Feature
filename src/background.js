// Track focused and distracted websites
const focusedSites = ["reddit.com", "twitter.com", "youtube.com"];
const distractedSites  = ["stackoverflow.com", "notion.so", "docs.google.com"];

let dailyData = {
  focusedTime: 0,
  distractedTime: 0,
  lastUpdated: new Date().toDateString(),
};

// Listen for tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const url = new URL(tab.url).hostname;
    if (focusedSites.includes(url)) {
      dailyData.focusedTime += 1; // Increment by 1 minute (or any interval)
    } else if (distractedSites.includes(url)) {
      dailyData.distractedTime += 1; // Increment by 1 minute
    }
    saveDailyData();
  }
});

// Save daily data to storage
function saveDailyData() {
  chrome.storage.local.get(['timeData'], (result) => {
    const timeData = result.timeData || [];
    const today = new Date().toDateString();
    const existingEntry = timeData.find((entry) => entry.date === today);

    if (existingEntry) {
      existingEntry.focusedTime = dailyData.focusedTime;
      existingEntry.distractedTime = dailyData.distractedTime;
    } else {
      timeData.push({ date: today, ...dailyData });
    }

    chrome.storage.local.set({ timeData }, () => {
      console.log('Daily data saved:', timeData);
    });
  });
}

// Send weekly report
function sendWeeklyReport() {
  chrome.storage.local.get(['timeData', 'userEmail'], (result) => {
    const timeData = result.timeData || [];
    const userEmail = result.userEmail;

    if (!userEmail || timeData.length === 0) return;

    const totalFocusedTime = timeData.reduce((sum, entry) => sum + entry.focusedTime, 0);
    const totalDistractedTime = timeData.reduce((sum, entry) => sum + entry.distractedTime, 0);

    const emailContent = `
      <h1>Weekly Time Report</h1>
      <p>Focused Time: ${totalFocusedTime} minutes</p>
      <p>Distracted Time: ${totalDistractedTime} minutes</p>
      <div id="chart"></div>
    `;

    // Send email via API (e.g., SendGrid)
    sendEmail(userEmail, 'Weekly Time Report', emailContent);

    // Clear time data after sending the report
    chrome.storage.local.set({ timeData: [] });
  });
}

// Schedule weekly report
chrome.alarms.create('weeklyReport', { periodInMinutes: 7 * 24 * 60 }); // 7 days
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'weeklyReport') {
    sendWeeklyReport();
  }
});
