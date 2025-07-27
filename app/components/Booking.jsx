"use client";
import { TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { setHours, setMinutes } from "date-fns";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "../hooks/use-toast";
import RangeSlider from "./ui/Range";
import Bookingcontent from "./Bookingcontent"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    houseSize: [1000, 5000],
    selectedDate: null,
    selectedTime: null,

  });
  
  // Additional state for the confirm popup fields
  const [selectedOption, setSelectedOption] = useState("Standard Package");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const [errors, setErrors] = useState({});

  const minTime = setHours(setMinutes(new Date(), 0), 7);
  const maxTime = setHours(setMinutes(new Date(), 0), 20);
  const minSelectableDate = new Date();
  minSelectableDate.setDate(minSelectableDate.getDate() + 2);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      const phoneError = validatePhoneNumber(value);
      setErrors({ ...errors, phoneNumber: phoneError });
    }
  };

  const handleSliderChange = (event, newValue) => {
    setFormData((prevData) => ({ ...prevData, houseSize: newValue }));
  };

  const validatePhoneNumber = (phone) => {
    const phoneTrimmed = phone.replace(/\D/g, "");
    return phoneTrimmed.length < 7
      ? "Phone number must be at least 7 digits long."
      : "";
  };

  const handleTimeChange = (newTime) => {
    if (newTime && formData.selectedDate) {
      const updatedTime = new Date(formData.selectedDate);
      updatedTime.setHours(newTime.getHours(), 0);
      setFormData({ ...formData, selectedTime: updatedTime });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let newErrors = {};

    const phoneError = validatePhoneNumber(formData.phoneNumber);
    if (phoneError) {
      isValid = false;
      newErrors.phoneNumber = phoneError;
    }

    if (!formData.fullName.trim()) {
      isValid = false;
      newErrors.fullName = "Full name is required.";
    }
    if (!formData.address.trim()) {
      isValid = false;
      newErrors.address = "Address is required.";
    }
    if (!formData.selectedDate) {
      isValid = false;
      newErrors.date = "Please select a date.";
    }
    if (!formData.selectedTime) {
      isValid = false;
      newErrors.time = "Please select a time.";
    }

    setErrors(newErrors);

    if (isValid) {
      setIsSubmitting(true);
      
      // Prepare form data for sending
      const date = formData.selectedDate
        ? formData.selectedDate.toLocaleDateString()
        : "Not specified";

      const time = formData.selectedTime
        ? formData.selectedTime.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "Not specified";

      const emailFormData = {
        selectedOption: selectedOption,
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        email: formData.email,
        houseSize: `${formData.houseSize[0]} sq.ft - ${formData.houseSize[1]} sq.ft`,
        date: date,
        time: time,
      };

      // Send form data using EmailJS
      emailjs
        .send(
          "service_mjhdtrx",
          "template_1zgl396",
          emailFormData,
          "XyTsXZK_7GkXjeOck"
        )
        .then((response) => {
          console.log("Form submitted successfully:", response);
          toast({
            title: "Thank you!",
            description: `${emailFormData.fullName}, Your appointment has been scheduled for ${emailFormData.date} at ${emailFormData.time}. We will be in touch with you shortly.`,
          });
          // Reset form data after submission
          setFormData({
            fullName: "",
            phoneNumber: "",
            address: "",
            email: "",
            houseSize: [1000, 5000],
            selectedDate: null,
            selectedTime: new Date().setHours(8, 0),
          });
          setSelectedOption("Standard Package");
        })
        .catch((err) => {
          toast({
            title: "Error",
            description: "There was an issue submitting your form. Please try again.",
          });
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <div
      ref={sectionRef}
      id="booknow"
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariant}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariant}>
            <Bookingcontent className="space-y-2" />
          </motion.div>

          {/* Right Form */}
          <motion.div
            variants={itemVariant}
            className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Get Your Quote
              </h3>
              <p className="text-gray-600">Fill out the form below</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your phone number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>

              {/* Address & Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email{" "}
                    <span className="text-gray-400 text-xs">(optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Day of Service
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={formData.selectedDate}
                      onChange={(newValue) =>
                        setFormData({ ...formData, selectedDate: newValue })
                      }
                      minDate={minSelectableDate}
                      renderInput={(props) => (
                        <TextField
                          {...props}
                          fullWidth
                          placeholder="Select Date"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": { borderColor: "#e5e7eb" },
                              "&:hover fieldset": { borderColor: "#f97316" },
                              "&.Mui-focused fieldset": {
                                borderColor: "#f97316",
                              },
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time of Service
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      value={formData.selectedTime}
                      onChange={handleTimeChange}
                      minTime={minTime}
                      maxTime={maxTime}
                      views={["hours"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          placeholder="Select Time"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": { borderColor: "#e5e7eb" },
                              "&:hover fieldset": { borderColor: "#f97316" },
                              "&.Mui-focused fieldset": {
                                borderColor: "#f97316",
                              },
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              </div>

              {/* House Size Slider */}
              <RangeSlider
                value={formData.houseSize}
                handleChange={handleSliderChange}
              />

              {/* Package Selection */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Select Package
                </label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Standard Package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Standard Package">Standard Package (without supplies - $35/hr)</SelectItem>
                    <SelectItem value="Premium Package">Premium Package (with supplies - $40/hr)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -1 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? "Submitting..." : "Get My Free Quote"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;