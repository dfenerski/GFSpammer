const robot = require("robotjs");


(async () => {
    robot.setKeyboardDelay(50);
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 5000)
    })
    const iPosX = 1668;
    const iPosY = 1056;
    robot.moveMouse(iPosX, iPosY);
    robot.mouseClick();
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
    for (let i = 0; i < 1000; i++) {
        robot.typeString("I love you Vani");
        robot.keyTap("enter");
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 75);
        })
    }
})()