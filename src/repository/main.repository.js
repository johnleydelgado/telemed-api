const isFieldDataExist = (data, fields) => {
  const keys = Object.keys(data);
  return fields.every((k) => keys.includes(k));
};

const startConnecting = (socket, io) => {
  const users = [];
  socket.on('join-server', (username) => {
    const user = {
      username,
      id: socket.id,
    };
    users.push(user);
  });

  socket.emit('me', socket.id);

  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId);
    console.log('asd', roomId, userId);
    socket.broadcast.to(roomId).emit('user-connected', userId);

    socket.on('disconnect', () => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId);
    });
  });
};

export { isFieldDataExist, startConnecting };
