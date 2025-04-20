// 模拟排行榜数据
const leaderboardData = [
    { rank: 1, player: "1:25.45", time: "Leisurely", track: "飞镰NEO" },
    { rank: 2, player: "无", time: "无", track: "无" },
    { rank: 3, player: "无", time: "无", track: "无" },
    { rank: 4, player: "无", time: "无", track: "无" },
    { rank: 5, player: "无", time: "无", track: "无" },
];

// 动态加载排行榜
function loadLeaderboard() {
    const tableBody = document.getElementById("leaderboardBody");
    tableBody.innerHTML = "";

    leaderboardData.forEach((entry) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.player}</td>
            <td>${entry.time}</td>
            <td>${entry.track}</td>
        `;
        tableBody.appendChild(row);
    });
}

// 页面加载时初始化
window.onload = loadLeaderboard;