using ChatApplication.Models;
using System.Collections.Concurrent;

namespace ChatApplication.Data
{
    public class SharedDB
    {
        private static readonly ConcurrentDictionary<string ,UserConnection> _connections= new ConcurrentDictionary<string, UserConnection>();

        public ConcurrentDictionary<string, UserConnection> connection = _connections;
    }
}
