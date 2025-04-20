// 模拟排行榜数据
const leaderboardData = [
    { rank: 1, player: "Player1", time: "1:23.45", track: "赛道A" },
    { rank: 2, player: "Player2", time: "1:25.67", track: "赛道A" },
    { rank: 3, player: "Player3", time: "1:26.89", track: "赛道B" },
    { rank: 4, player: "Player4", time: "1:27.12", track: "赛道A" },
    { rank: 5, player: "Player5", time: "1:28.34", track: "赛道B" },
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