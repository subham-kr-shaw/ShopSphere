import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallusers } from '../../state/user/Action';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
    Card, Typography, Pagination, Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';

const PAGE_SIZE = 8;

const avatarcolors = [
    "#1976d2", "#7c3aed", "#db2777", "#059669",
    "#d97706", "#dc2626", "#0891b2", "#65a30d"
];

const getInitials = (firstname, lastname) => {
    const f = firstname?.[0] || "";
    const l = lastname?.[0] || "";
    return (f + l).toUpperCase() || "";
};

// A user is "new" if joined within last 7 days
const isnewuser = (createdAt) => {
    if (!createdAt) return false;
    const diff = (new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
};

const formatjoined = (createdAt) => {
    if (!createdAt) return "—";
    return new Date(createdAt).toLocaleDateString('en-IN', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
};

const Customertable = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector(store => store.user);
    const [page, setpage] = useState(1);

    useEffect(() => {
        dispatch(getallusers());
    }, []);

    const totalPages = Math.ceil((users?.length || 0) / PAGE_SIZE);
    const paginated = users?.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE) || [];
    const newcount = users?.filter(u => isnewuser(u.createdAt)).length || 0;

    return (
        <div style={{ padding: "20px" }}>
            <Card sx={{
                borderRadius: 4,
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid #e2e8f0",
                overflow: "hidden"
            }}>

                {/* ── Header ── */}
                <div style={{
                    padding: "20px 24px 0",
                    display: "flex", alignItems: "flex-start",
                    justifyContent: "space-between", flexWrap: "wrap", gap: "12px"
                }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                            <PeopleAltIcon sx={{ color: "#1976d2", fontSize: 22 }} />
                            <Typography variant="h6" fontWeight={700} color="#0f172a">
                                All Customers
                            </Typography>
                        </div>

                        {/* Pills */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            <div style={{
                                display: "flex", alignItems: "center", gap: "5px",
                                background: "#eff6ff", border: "1px solid #bfdbfe",
                                borderRadius: "20px", padding: "3px 12px",
                                fontSize: "12px", fontWeight: 600, color: "#1d4ed8"
                            }}>
                                <PeopleAltIcon sx={{ fontSize: 13 }} />
                                Total: {users?.length || 0} users
                            </div>

                            {newcount > 0 && (
                                <div style={{
                                    display: "flex", alignItems: "center", gap: "5px",
                                    background: "#fefce8", border: "1px solid #fde68a",
                                    borderRadius: "20px", padding: "3px 12px",
                                    fontSize: "12px", fontWeight: 600, color: "#92400e"
                                }}>
                                    ✨ {newcount} new this week
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "#f1f5f9", margin: "16px 0 0" }} />

                {/* ── Table ── */}
                <TableContainer component={Paper} elevation={0}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: "#f8fafc" }}>
                                {["User", "Email", "Badge", "Joined"].map(col => (
                                    <TableCell key={col} sx={{
                                        fontWeight: 700, fontSize: 12,
                                        color: "#64748b", textTransform: "uppercase",
                                        letterSpacing: "0.05em"
                                    }}>
                                        {col}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
                                            <Typography color="text.secondary">Loading customers...</Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>

                            ) : error ? (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
                                            <Typography color="error">Error: {error}</Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>

                            ) : paginated.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={4}>
                                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 0", gap: "12px" }}>
                                            <InboxIcon sx={{ fontSize: 56, color: "#cbd5e1" }} />
                                            <Typography color="text.secondary">No customers found</Typography>
                                        </div>
                                    </TableCell>
                                </TableRow>

                            ) : paginated.map((user, idx) => {
                                const globalIdx = (page - 1) * PAGE_SIZE + idx;
                                const avatarbg = avatarcolors[globalIdx % avatarcolors.length];
                                const initials = getInitials(user.firstname, user.lastname);
                                const isnew = isnewuser(user.createdAt);

                                return (
                                    <TableRow
                                        key={user._id}
                                        sx={{
                                            "&:hover": { backgroundColor: "#f8fafc" },
                                            transition: "background 0.15s",
                                        }}
                                    >
                                        {/* User */}
                                        <TableCell>
                                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                                <div style={{
                                                    width: "40px", height: "40px", borderRadius: "12px",
                                                    background: avatarbg, display: "flex",
                                                    alignItems: "center", justifyContent: "center",
                                                    fontWeight: 700, fontSize: "14px", color: "#fff", flexShrink: 0,
                                                }}>
                                                    {initials || <AccountCircleIcon sx={{ fontSize: 22, color: "#fff" }} />}
                                                </div>
                                                <div>
                                                    <Typography variant="body2" fontWeight={600} color="#0f172a">
                                                        {user.firstname} {user.lastname}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        #{String(globalIdx + 1).padStart(4, "0")}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </TableCell>

                                        {/* Email */}
                                        <TableCell>
                                            <Typography variant="body2" color="#334155">
                                                {user.email}
                                            </Typography>
                                        </TableCell>

                                        {/* Badge — New or Member */}
                                        <TableCell>
                                            <div style={{
                                                display: "inline-flex", alignItems: "center", gap: "5px",
                                                background: isnew ? "#fefce8" : "#f1f5f9",
                                                border: `1px solid ${isnew ? "#fde68a" : "#e2e8f0"}`,
                                                borderRadius: "20px", padding: "3px 10px",
                                                fontSize: "11px", fontWeight: 700,
                                                color: isnew ? "#92400e" : "#64748b",
                                            }}>
                                                {isnew ? "✨ New" : "👤 Member"}
                                            </div>
                                        </TableCell>

                                        {/* Joined */}
                                        <TableCell>
                                            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                                <CalendarMonthIcon sx={{ fontSize: 14, color: "#94a3b8" }} />
                                                <Typography variant="body2" color="#64748b">
                                                    {formatjoined(user.createdAt)}
                                                </Typography>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* ── Pagination ── */}
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    padding: "16px", gap: "4px", borderTop: "1px solid #f1f5f9"
                }}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={(e, val) => setpage(val)}
                        color="primary"
                        showFirstButton
                        showLastButton
                        size="small"
                    />
                    <Typography variant="caption" color="text.secondary">
                        Showing {Math.min((page - 1) * PAGE_SIZE + 1, users?.length || 0)}–{Math.min(page * PAGE_SIZE, users?.length || 0)} of {users?.length || 0} customers
                    </Typography>
                </div>

            </Card>
        </div>
    );
};

export default Customertable;