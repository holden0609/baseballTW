// src/app/players/[id]/page.tsx
import React from 'react';

// This is a placeholder for a dynamic page.
// In a real app, you would fetch data based on the `params.id`.
const PlayerDetailPage = ({ params }: { params: { id: string } }) => {
  
  // Sample data for a single player profile
  const player = {
    id: params.id,
    name: '林安可',
    team: '統一7-ELEVEn獅',
    position: '外野手',
    number: '77',
    imageUrl: 'https://images.unsplash.com/photo-1599589253401-4933a365f57a?q=80&w=1887&auto=format&fit=crop',
    bio: '林安可，綽號「釣蝦」，是臺灣的職業棒球選手，目前效力於中華職棒的統一7-ELEVEn獅隊。他以其出色的打擊能力和強勁的臂力而聞名，是球隊不可或缺的核心打者之一。',
    stats: [
      { year: '2023', team: '統一獅', avg: '.305', hr: '22', rbi: '85' },
      { year: '2022', team: '統一獅', avg: '.280', hr: '15', rbi: '60' },
      { year: '2021', team: '統一獅', avg: '.315', hr: '25', rbi: '90' },
    ]
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          
          {/* Player Banner */}
          <div className="relative h-56 bg-gradient-to-r from-gray-800 to-gray-600">
            <div className="absolute inset-0">
              <img src={player.imageUrl} alt={player.name} className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="relative flex items-center h-full p-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                <img src={player.imageUrl} alt={player.name} className="w-full h-full object-cover" />
              </div>
              <div className="ml-6">
                <h1 className="text-4xl font-bold text-white">{player.name}</h1>
                <p className="text-xl text-gray-200">{player.team} | #{player.number} | {player.position}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Bio Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">球員簡介</h2>
              <p className="text-gray-600 leading-relaxed">{player.bio}</p>
            </div>

            {/* Stats Section */}
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">生涯數據</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">年度</th>
                      <th className="py-3 px-4 text-left">球隊</th>
                      <th className="py-3 px-4 text-left">打擊率 (AVG)</th>
                      <th className="py-3 px-4 text-left">全壘打 (HR)</th>
                      <th className="py-3 px-4 text-left">打點 (RBI)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    {player.stats.map(stat => (
                      <tr key={stat.year} className="border-b hover:bg-gray-100">
                        <td className="py-3 px-4">{stat.year}</td>
                        <td className="py-3 px-4">{stat.team}</td>
                        <td className="py-3 px-4">{stat.avg}</td>
                        <td className="py-3 px-4">{stat.hr}</td>
                        <td className="py-3 px-4">{stat.rbi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetailPage;
