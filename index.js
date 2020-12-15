const robot = require("robotjs");


(async () => {
    // robot.setKeyboardDelay(1);
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
    for (let i = 0; i < 100; i++) {
        robot.typeStringDelayed("I love you babe", 1500);
        robot.keyTap("enter");
        // await new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve()
        //     }, 100);
        // })
    }
})()