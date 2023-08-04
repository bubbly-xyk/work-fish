let timerId = null;

function computeTime() {
    // 如果已经有一个计时器正在运行，我们需要先清除它
    if (timerId) {
        clearInterval(timerId);
    }

    const name = document.getElementById('name').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    const start = new Date();
    start.setHours(startTime.split(":")[0]);
    start.setMinutes(startTime.split(":")[1]);
    start.setSeconds(0);

    const end = new Date();
    end.setHours(endTime.split(":")[0]);
    end.setMinutes(endTime.split(":")[1]);
    end.setSeconds(0);

    // 计算时间的函数
    function calculate() {
        const now = new Date();

        if (now > end) {
            const diff = Math.abs(end - start);
            const hours = Math.floor((diff % 86400000) / 3600000);
            const minutes = Math.floor((diff % 3600000) / 60000);
            const seconds = Math.floor((diff % 60000) / 1000);
            document.getElementById('displayArea').innerText = `恭喜您，${name}，完成了一天的工作，工作时间${hours}时${minutes}分${seconds}秒，祝您下班愉快！`;
            clearInterval(timerId); // 清除计时器
            return;
        }

        const workedDiff = Math.abs(now - start);
        const leftDiff = Math.abs(end - now);

        const workedHours = Math.floor((workedDiff % 86400000) / 3600000);
        const workedMinutes = Math.floor((workedDiff % 3600000) / 60000);
        const workedSeconds = Math.floor((workedDiff % 60000) / 1000);

        const leftHours = Math.floor((leftDiff % 86400000) / 3600000);
        const leftMinutes = Math.floor((leftDiff % 3600000) / 60000);
        const leftSeconds = Math.floor((leftDiff % 60000) / 1000);

        document.getElementById('displayArea').innerText = `尊敬的${name}，您已经工作了${workedHours}时${workedMinutes}分${workedSeconds}秒了，距离下班还有${leftHours}时${leftMinutes}分${leftSeconds}秒！`;
    }

    // 每秒执行一次计算函数
    timerId = setInterval(calculate, 1000);
}


