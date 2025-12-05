export default function Home() {
  const photons = [
    {
      id: 1,
      content: "2024年，第一次看到端到端大模型在车上运行，我知道游戏规则要变了。",
      author: "感知算法工程师 @ 华为",
      type: "moment",
      likes: 42,
      time: "2024-03-15"
    },
    {
      id: 2,
      content: "预言：2027年之前，L4会在特定场景落地，但通用L4仍需10年。",
      author: "系统架构师 @ 蔚来",
      type: "prophecy",
      likes: 28,
      time: "2024-03-14"
    },
    {
      id: 3,
      content: "今天又在这个路口接管的记录被清空了，感知和规控继续扯皮。",
      author: "测试工程师 @ 小鹏",
      type: "culture",
      likes: 36,
      time: "2024-03-13"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      {/* 头部 */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ✨ 光锥计划
        </h1>
        <p className="text-gray-400 text-lg">自动驾驶行业口述史 · 记录每个真实声音</p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:opacity-90 transition">
          发射我的光子
        </button>
      </header>

      {/* 光子展示区 */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">🌟</span> 最新光子流
        </h2>
        
        <div className="space-y-6">
          {photons.map((photon) => (
            <div 
              key={photon.id} 
              className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    photon.type === 'moment' ? 'bg-blue-500/20 text-blue-300' :
                    photon.type === 'prophecy' ? 'bg-purple-500/20 text-purple-300' :
                    'bg-green-500/20 text-green-300'
                  }`}>
                    {photon.type === 'moment' ? '那个瞬间' : 
                     photon.type === 'prophecy' ? '预言胶囊' : '行业黑话'}
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">{photon.time}</span>
                </div>
                <button className="text-gray-400 hover:text-red-400 transition">
                  ❤️ {photon.likes}
                </button>
              </div>
              
              <p className="text-lg mb-4">{photon.content}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{photon.author}</span>
                <div className="flex space-x-4">
                  <button className="hover:text-blue-400">💬 评论</button>
                  <button className="hover:text-green-400">🔗 分享</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 统计信息 */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400">3</div>
              <div className="text-gray-400">当前光子数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">106</div>
              <div className="text-gray-400">总共鸣数</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">7</div>
              <div className="text-gray-400">在线同行</div>
            </div>
          </div>
        </div>
      </div>

      {/* 底部信息 */}
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>光锥计划 · 为行业记录真实声音 · 始于2024年</p>
        <p className="mt-2">每个光子，都是历史的见证</p>
      </footer>
    </div>
  );
}
