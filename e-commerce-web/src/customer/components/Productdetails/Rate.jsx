

    import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';

const starConfig = [
    { stars: 5, color: '#22C55E' },
    { stars: 4, color: '#60A5FA' },
    { stars: 3, color: '#FBBF24' },
    { stars: 2, color: '#F97316' },
    { stars: 1, color: '#EF4444' },
];

const Rate = ({ ratings = [] }) => {
    const total = ratings.length || 0;

    // ✅ Calculate real percentage per star
    const getpercent = (star) => {
        if (total === 0) return 0;
        const count = ratings.filter(r => Math.round(r.rating) === star).length;
        return Math.round((count / total) * 100);
    };

    const averagerating = total > 0
        ? (ratings.reduce((sum, r) => sum + r.rating, 0) / total).toFixed(1)
        : 0;

    return (
        <div className="w-full flex flex-col gap-4">
            {/* Overall score */}
            <div className="flex items-center gap-3 mb-2">
                <span className="text-5xl font-bold text-gray-800">{averagerating}</span>
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => (
                            <StarIcon
                                key={s}
                                sx={{
                                    fontSize: 20,
                                    color: s <= Math.round(averagerating) ? '#FBBF24' : '#D1D5DB'
                                }}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">{total} ratings</span>
                </div>
            </div>

            {/* Bar breakdown */}
            {starConfig.map((bar) => {
                const percent = getpercent(bar.stars);
                return (
                    <Box key={bar.stars} sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ minWidth: 60, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <StarIcon sx={{ color: bar.color, fontSize: 16 }} />
                            <Box component="span" sx={{ fontSize: 13 }}>{bar.stars}</Box>
                        </Box>
                        <LinearProgress
                            variant="determinate"
                            value={percent}
                            sx={{
                                flexGrow: 1,
                                height: 8,
                                borderRadius: 6,
                                bgcolor: 'grey.200',
                                '& .MuiLinearProgress-bar': { backgroundColor: bar.color },
                            }}
                        />
                        <Box sx={{ minWidth: 40, textAlign: 'right', fontSize: 13, color: 'text.secondary' }}>
                            {percent}%
                        </Box>
                    </Box>
                );
            })}
        </div>
    );
};

export default Rate;