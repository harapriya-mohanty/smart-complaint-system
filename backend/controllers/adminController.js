const User = require("../models/User");
const Complaint = require("../models/Complaint");

// @desc    Get dashboard analytics
// @route   GET /api/admin/analytics
const getAnalytics = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pending = await Complaint.countDocuments({ status: "pending" });
    const inProgress = await Complaint.countDocuments({ status: "in-progress" });
    const awaitingVerification = await Complaint.countDocuments({ status: "awaiting-verification" });
    const completed = await Complaint.countDocuments({ status: "completed" });
    const assigned = await Complaint.countDocuments({ status: "assigned" });
    const rejected = await Complaint.countDocuments({ status: "rejected" });
    const totalWorkers = await User.countDocuments({ role: "worker" });
    const totalResidents = await User.countDocuments({ role: "resident" });

    res.json({
      totalComplaints,
      pending,
      inProgress,
      awaitingVerification,
      completed,
      assigned,
      rejected,
      totalWorkers,
      totalResidents,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all workers
// @route   GET /api/admin/workers
const getAllWorkers = async (req, res) => {
  try {
    const workers = await User.find({ role: "worker" }).select("-password");
    res.json(workers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all residents
// @route   GET /api/admin/residents
const getAllResidents = async (req, res) => {
  try {
    const residents = await User.find({ role: "resident" }).select("-password");
    res.json(residents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a user
// @route   DELETE /api/admin/users/:id
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.deleteOne();
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAnalytics, getAllWorkers, getAllResidents, deleteUser };
