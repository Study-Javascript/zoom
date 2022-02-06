// frontend에서도 socket을 만들고 + 3개의 event에 대해 listen하기
const socket = new WebSocket(`ws://${window.location.host}`);

// 1. 메세지 받기 (message가 무엇이냐면 바로 event)
// connection이 open되면 console.log의 내용을 볼 수 있다.
socket.addEventListener("open", () => {
    console.log("Connected to Server ✅");
});

// 2. socket에 message 이벤트 추가하기
// message를 받을 때 마다 내용을 출력하는 message이다.
socket.addEventListener("message", (message) => {
    console.log("Just got this : ", message, " from the Server");
});

// 3. close 이벤트 추가하기
// server가 offline될 때 어떻게 되는지 보자.
socket.addEventListener("close", () => {
    console.log("Connected from Server ❌");
});

// 4. 어떤 순서로 작동하는지 보기