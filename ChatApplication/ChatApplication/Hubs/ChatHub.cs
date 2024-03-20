using ChatApplication.Data;
using ChatApplication.Models;
using Microsoft.AspNetCore.SignalR;

namespace ChatApplication.Hubs
{
    public class ChatHub :Hub
    {

        private readonly SharedDB _sharedDB;

        public ChatHub(SharedDB sharedDB)=>_sharedDB = sharedDB;
        public async Task JoinChat(UserConnection connection)
        {
            await Clients.All.SendAsync("ReceiveMessage", "admin", $"{connection.Username} has Joined");

        }

        public async Task JoinSpecificCharRoom(UserConnection connection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, connection.ChatRoom);
            _sharedDB.connection[Context.ConnectionId] = connection;
            await Clients.Group(connection.ChatRoom).SendAsync("JoinSpecificCharRoom", "admin",$"{connection.Username} has joined {connection.ChatRoom}"); 

        }

        public async Task SendMessage(string msg)
        {
            if(_sharedDB.connection.TryGetValue(Context.ConnectionId,out UserConnection conn))
            {
                await Clients.Group(conn.ChatRoom)
                    .SendAsync("ReceiveSpecificMessage", conn.Username, msg);
            }
        }
    }
} 
