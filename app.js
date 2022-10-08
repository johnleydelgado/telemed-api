import express from 'express';
import server from 'http';
import { Server } from 'socket.io';
import routes from './src/routes/index.js';
import config from './src/config/config.js';
import { startConnecting } from './src/repository/main.repository.js';

const { Application } = express;

class App {
  app = Application;

  apiPrefix = '/telemed';

  port = config.port;

  messages = [];

  newServer = server.createServer(this.app);

  constructor(appInit) {
    this.app = express();
    this.port = appInit.port;
    this.setup();
    this.middlewares(appInit.middleWares);
    this.initRoutes();
  }

  setup() {
    const io = new Server(this.newServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      startConnecting(socket, io);
    });

    // io.on('connection', (socket) => {
    //   socket.on('join server', (username) => {
    //     const user = {
    //       username,
    //       id: socket.id,
    //     };
    //     this.users.push(user);
    //   });

    //     socket.on('join room', (roomname, cb) => {
    //       socket.join(roomname);
    //       cb(this.messages);
    //       io.in('room1').emit('users', this.users);
    //     });

    //     socket.emit('me', socket.id);

    //     socket.on('sendMessage', ({
    //       content, to, sender, chatName,
    //     }) => {
    //       const payload = { content, chatName, sender };
    //       io.in('room1').emit('new message', payload);
    //       this.messages.push({ sender, content });
    //       // cb(this.messages);
    //     });

    //     socket.on('disconnect', () => {
    //       this.users = _.filter(this.users, (a) => a.id !== socket.id);
    //     });
    //   });

    //   io.on('connection', (socket) => {
    //     socket.join('room1');
    //     socket.emit('me', socket.id);
    //     socket.on('disconnect', () => {
    //       socket.broadcast.emit('callEnded');
    //     });

    //     socket.on('callUser', ({
    //       userToCall, signalData, from, name,
    //     }) => {
    //       io.to('room1').emit('callUser', { signal: signalData, from, name });
    //     });

    //     socket.on('answerCall', (data) => {
    //       io.to('room1').emit('callAccepted', data.signal);
    //     });

  //     socket.on('start', (data) => {
  //       io.to('room1').emit('startUserCall', data.signal);
  //     });
  //   });
  }

  middlewares(middleWares) {
    // eslint-disable-next-line array-callback-return
    middleWares.map((middleWare) => {
      this.app.use(middleWare);
    });
  }

  initRoutes() {
    this.app.use(this.apiPrefix, routes);
  }

  listen() {
    this.newServer.listen(this.port, () => {
      // eslint-disable-next-line
      console.log(`App listening on the port ${this.port}`)
    });
  }
}

export default App;
