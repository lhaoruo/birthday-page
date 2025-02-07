// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 创建气球
    function createBalloons() {
        const balloons = document.querySelector('.balloons');
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
            balloons.appendChild(balloon);
        }
    }

    // 惊喜按钮功能
    document.querySelector('.surprise-btn').addEventListener('click', () => {
        const effects = document.querySelector('.effects');
        const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9a9e'];
        
        for (let i = 0; i < 50; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark';
            spark.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            spark.style.left = `${50 + Math.random() * 10 - 5}%`;
            spark.style.top = `${50 + Math.random() * 10 - 5}%`;
            spark.style.animation = `spark ${0.5 + Math.random() * 1}s ease-out`;
            effects.appendChild(spark);
            
            setTimeout(() => spark.remove(), 1000);
        }
    });

    // 初始化
    createBalloons();
});