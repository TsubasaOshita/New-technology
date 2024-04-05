'use strict';

const line = require('@line/bot-sdk');

const config = {
    channelSecret: '815ba8d87092c699fba6ebb5907af8e8',
    channelAccessToken: 'ZU/A1MM/9zmwVdXiZAf7rhZhNUZMg+dPMVp1RhSVssoU2d3+JFoHReepjlhMjaQwaVfnseB7FTtJKUdAzL9G28x11WywTJs5o1VihDyDToUGKnZTQSGrzujv9BwUSvkgSPpr9gXs2ZAHLJPGHPxqMwdB04t89/1O/w1cDnyilFU='
};
const client = new line.Client(config);


const main = async () => {

    const messages = [{
        type: 'text',
        text: 'いっせい送信です！\n Hello FJB!!!\n 100 \t 1000 \t 10'+ 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    }];

    try {
        const res = await client.broadcast(messages);
        console.log(res);        
    } catch (error) {
        console.log(`エラー: ${error.statusMessage}`);
        console.log(error.originalError.response.data);
    }
}

main();