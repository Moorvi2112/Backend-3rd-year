const express = require('express');
const router = express.Router();
const { otpGenerator, otpVerify } = require('@moorvigarg/otp-handler'); // ✅ Correct import

// Generate OTP
router.get("/generate", async (req, res) => {
    try {
        const otp = otpGenerator(6);
        res.status(200).json({ otp });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Verify OTP
router.post("/verify", (req, res) => {
    try {
        const { otp } = req.body;

        const isMatched = otpVerify(otp); // ✅ Correct function usage

        if (isMatched) {
            return res.status(200).json({ message: "OTP verified" });
        }

        // ❌ Don't pass object to Error()
        throw new Error("OTP not matched");

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
