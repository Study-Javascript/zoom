import http from "http";
import WebSocket from "ws";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views",__dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/",(req,res) => res.render("home"));
app.get("/*", (req,res) => res.redirect("/"));

function handleConnection(socket){ 
    console.log(socket); 
}

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); 
const wss = new WebSocket.Server({ server });

// connection이 생겼을 때, socket으로 즉시 메세지를 보내기
wss.on("connection", (socket) =>{
//    console.log(socket); 
    // app.js와 동일하게 console 출력 
    console.log("Connected to Browser ✅");
    socket.send("hello!!!");        // socket으로 data보내기 (connection이 생겼는데 console에 뜨는 것이 아무것도 없음=> message는 보냈지만 frontend에선 아무것도 해주지 않았기 때문에)
});

server.listen(3000, handleListen);

wss.on("connection", handleConnection);

server.listen(3000, handleListen);