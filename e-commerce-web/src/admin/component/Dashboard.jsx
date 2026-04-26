import React, { useState, useEffect } from 'react'
import Achivement from './Achivement'
import Monthlyoverview from './Monthlyoverview'
import Producttable from './Producttable'

const Dashboard = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const dateStr = now.toLocaleDateString('en-IN', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  const timeStr = now.toLocaleTimeString('en-IN', {
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  })

  return (
    <div style={{ padding: "32px", backgroundColor: "#f4f6fb", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>

        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
            <div style={{
              width: "8px", height: "8px", borderRadius: "50%",
              backgroundColor: "#22c55e", boxShadow: "0 0 0 3px #bbf7d0"
            }} />
            <h2 style={{ margin: 0, fontWeight: 800, fontSize: "24px", color: "#0f172a", letterSpacing: "-0.5px" }}>
              Dashboard
            </h2>
          </div>

          {/* Live date + time */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginLeft: "18px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "13px", color: "#94a3b8" }}>{dateStr}</span>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              fontSize: "12px", fontWeight: 700,
              background: "#0f172a", color: "#f8fafc",
              padding: "3px 10px", borderRadius: "8px",
              fontVariantNumeric: "tabular-nums", letterSpacing: "0.5px",
              fontFamily: "monospace",
            }}>
              <span style={{
                width: "6px", height: "6px", borderRadius: "50%",
                backgroundColor: "#22c55e", display: "inline-block",
                animation: "none",
              }} />
              {timeStr}
            </span>
          </div>
        </div>

        {/* Quick stat pills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {[
            { label: "Active Users", value: "1.2k", color: "#3b82f6" },
            { label: "Pending Orders", value: "34", color: "#f59e0b" },
            { label: "Low Stock", value: "7", color: "#ef4444" },
          ].map((pill) => (
            <div key={pill.label} style={{
              display: "flex", alignItems: "center", gap: "6px",
              background: "#fff", border: "1px solid #e2e8f0",
              borderRadius: "20px", padding: "5px 14px", fontSize: "12px",
              fontWeight: 500, color: "#374151", boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: pill.color, display: "inline-block" }} />
              {pill.label}: <strong style={{ color: pill.color, marginLeft: 3 }}>{pill.value}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Top row */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap", alignItems: "stretch" }}>
        <div style={{ flex: "1 1 260px", minWidth: 0 }}>
          <Achivement />
        </div>
        <div style={{ flex: "2 1 380px", minWidth: 0 }}>
          <Monthlyoverview />
        </div>
      </div>

      {/* Product table */}
      <div>
        <Producttable />
      </div>

    </div>
  )
}

export default Dashboard
// import React from 'react'
// import Achivement from './Achivement'
// import Monthlyoverview from './Monthlyoverview'
// import Producttable from './Producttable'

// const Dashboard = () => {
//   const today = new Date().toLocaleDateString('en-IN', {
//     weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
//   })

//   return (
//     <div style={{ padding: "32px", backgroundColor: "#f4f6fb", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>

//       {/* Header row */}
//       <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "28px", flexWrap: "wrap", gap: "12px" }}>
//         <div>
//           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
//             <div style={{
//               width: "8px", height: "8px", borderRadius: "50%",
//               backgroundColor: "#22c55e", boxShadow: "0 0 0 3px #bbf7d0"
//             }} />
//             <h2 style={{ margin: 0, fontWeight: 800, fontSize: "24px", color: "#0f172a", letterSpacing: "-0.5px" }}>
//               Dashboard
//             </h2>
//           </div>
//           <p style={{ margin: "0 0 0 18px", fontSize: "13px", color: "#94a3b8" }}>
//             {today}
//           </p>
//         </div>

//         {/* Quick stats pills */}
//         <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//           {[
//             { label: "Active Users", value: "1.2k", color: "#3b82f6" },
//             { label: "Pending Orders", value: "34", color: "#f59e0b" },
//             { label: "Low Stock", value: "7", color: "#ef4444" },
//           ].map((pill) => (
//             <div key={pill.label} style={{
//               display: "flex", alignItems: "center", gap: "6px",
//               background: "#fff", border: "1px solid #e2e8f0",
//               borderRadius: "20px", padding: "5px 14px", fontSize: "12px",
//               fontWeight: 500, color: "#374151", boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
//             }}>
//               <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: pill.color, display: "inline-block" }} />
//               {pill.label}: <strong style={{ color: pill.color, marginLeft: 3 }}>{pill.value}</strong>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Top row: Achievement + Monthly Overview */}
//       <div style={{ display: "flex", gap: "20px", marginBottom: "20px", flexWrap: "wrap", alignItems: "stretch" }}>
//         <div style={{ flex: "1 1 260px", minWidth: 0 }}>
//           <Achivement />
//         </div>
//         <div style={{ flex: "2 1 380px", minWidth: 0 }}>
//           <Monthlyoverview />
//         </div>
//       </div>

//       {/* Product table */}
//       <div>
//         <Producttable />
//       </div>

//     </div>
//   )
// }

// export default Dashboard