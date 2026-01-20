"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  /* Audio state removed as video has no sound */
  const handleReserve = () => {
    console.log("Reservation clicked");
  };

  return (
    <div className="bg-[#E2E8F0] text-slate-900 antialiased overflow-x-hidden min-h-screen w-full relative selection:bg-blue-500/20 font-sans">
      {/* HERO SECTION */}
      <section className="h-screen w-full relative overflow-hidden flex flex-col">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 select-none">
          {/* Front-facing Concept Car Video */}
          {/* Front-facing Concept Car Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-center opacity-90"
          >
            <source src="/hero-video.mp4?v=3" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


        </div>

        {/* Navigation Bar */}
        <header className="relative z-40 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center text-white">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <span className="text-lg md:text-xl tracking-[0.3em] uppercase font-michroma font-bold">
              Avatr
            </span>
          </motion.div>

          {/* Center Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: false }}
            transition={{ delay: 1, duration: 1.5 }}
            className="absolute left-1/2 -translate-x-1/2 hidden md:block"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
              Vision Xpectra
            </span>
          </motion.div>

          {/* Right Nav */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-6 md:gap-10 text-[11px] uppercase tracking-[0.2em] font-bold"
          >
            <a href="#" className="hover:opacity-100 opacity-70 transition-opacity">
              About
            </a>

            {/* Profile Icon */}
            <button className="hover:opacity-100 opacity-70 transition-opacity">
              {/* @ts-ignore */}
              <iconify-icon icon="lucide:user" className="text-lg"></iconify-icon>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-100 opacity-70 transition-opacity">
              <span>English</span>
              <div className="w-1 h-1 bg-current rounded-full ml-1"></div>
            </div>
          </motion.div>
        </header>

        {/* Main Content Area */}
        <main className="flex flex-col px-6 md:px-12 z-30 w-full h-full relative justify-center items-start pb-24 md:pb-32">
          {/* Headline Section */}
          <div className="max-w-6xl">
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="text-left text-lg md:text-xl lg:text-3xl leading-[1.2] tracking-wide font-mono text-white drop-shadow-2xl"
            >
              It&apos;s Time. <br />
              For the Rise <br />
              of Emotive Luxury.
            </motion.h1>
          </div>
        </main>

        {/* Bottom UI Elements */}
        <footer className="absolute bottom-10 md:bottom-0 left-0 w-full p-8 md:p-12 z-50 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-white">
          {/* Toggle Audio Button */}
          {/* Reserve CTA Button */}
          <motion.button
            onClick={handleReserve}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ pointerEvents: 'auto' }}
            className="group flex items-center gap-3 px-5 py-2 rounded-full border border-white/30 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 shadow-lg shadow-black/20"
          >
            <div className="w-5 h-5 flex items-center justify-center rounded-full bg-white text-slate-900 group-hover:scale-110 transition-transform">
              {/* @ts-ignore */}
              <iconify-icon icon="lucide:arrow-right" className="text-[10px] -rotate-45 group-hover:rotate-0 transition-transform duration-300"></iconify-icon>
            </div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-white">
              Reserve Your Spot
            </span>
          </motion.button>

          {/* Bottom Right Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity cursor-default"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium drop-shadow-md">Scroll to Discover</span>
          </motion.div>
        </footer>
        {/* Gradient Transition to Interior */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* NEW SECTION 2: INTERIOR REVEAL */}
      <section id="interior" className="min-h-screen py-24 md:py-0 w-full relative overflow-hidden bg-black flex items-center justify-center">
        {/* Background Image */}
        <img
          src="/interior-car.jpg"
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Top Fade Transition from Hero */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

        {/* Floating Content */}
        <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="space-y-8"
          >
            <span className="text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-medium border-l border-cyan-400 pl-3">Inside the Future</span>
            <h2 className="text-4xl md:text-5xl font-michroma text-white leading-tight">
              Immersive <br /> Intelligence.
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light tracking-wide">
              A sanctuary where digital precision meets organic comfort. The Vision Xpectra cockpit adapts to your bio-rhythms, creating a seamless bond between driver and machine.
            </p>
          </motion.div>

          {/* Feature Points on Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: false, margin: "-100px" }}
            className="flex flex-col gap-10 md:pl-20 mt-12 md:mt-0"
          >
            <div className="group cursor-pointer">
              <div className="h-[1px] w-12 bg-white/30 group-hover:bg-cyan-400 group-hover:w-24 transition-all duration-500 mb-2"></div>
              <h3 className="text-xl text-white font-michroma mb-1">Neural Link™</h3>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">Holographic Interface</span>
            </div>
            <div className="group cursor-pointer">
              <div className="h-[1px] w-12 bg-white/30 group-hover:bg-cyan-400 group-hover:w-24 transition-all duration-500 mb-2"></div>
              <h3 className="text-xl text-white font-michroma mb-1">Zero-G Seats</h3>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">Adaptive Comfort</span>
            </div>
            <div className="group cursor-pointer">
              <div className="h-[1px] w-12 bg-white/30 group-hover:bg-cyan-400 group-hover:w-24 transition-all duration-500 mb-2"></div>
              <h3 className="text-xl text-white font-michroma mb-1">Silence Core</h3>
              <span className="text-[10px] text-white/50 uppercase tracking-widest">Active Noise Cancellation</span>
            </div>
          </motion.div>
        </div>
        {/* Bottom Fade Transition to Performance */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* NEW SECTION 3: PERFORMANCE SPECS */}
      <section id="performance" className="min-h-screen w-full relative bg-black flex flex-col items-center justify-center py-16 md:py-24 px-6 md:px-12 overflow-hidden">

        {/* Dynamic Background Elements */}
        {/* Top Fade Transition from Interior */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/60 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none"></div>

        <div className="max-w-7xl w-full relative z-10 flex flex-col gap-16 md:gap-24">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-10 border-b border-white/10 pb-8 md:pb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-cyan-500"></div>
                <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-medium font-mono">System Metrics</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-michroma text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 leading-tight uppercase">
                Bionic <br /> Performance
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-2 text-cyan-400/80 font-mono text-[10px]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                LIVE TELEMETRY
              </div>
              <p className="text-white/60 text-sm leading-relaxed font-light">
                Engineered beyond biological limitations. A recursive fusion of solid-state efficiency and quantum-level processing power.
              </p>
            </div>
          </div>

          {/* Tech Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Metric 1: Acceleration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {/* @ts-ignore */}
                <iconify-icon icon="lucide:zap" className="text-cyan-400 text-2xl"></iconify-icon>
              </div>

              <div className="h-full flex flex-col justify-between gap-16">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono group-hover:text-cyan-400 transition-colors">Acceleration</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-michroma text-white group-hover:text-cyan-400 transition-colors duration-300">1.9</span>
                    <span className="text-lg font-mono text-white/50">s</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 mt-6 mb-4 group-hover:bg-cyan-500/30 transition-colors"></div>
                  <span className="text-xs text-white/40 uppercase tracking-widest">0-60 MPH</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors duration-500 rounded-br-lg"></div>
            </motion.div>

            {/* Metric 2: Top Speed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {/* @ts-ignore */}
                <iconify-icon icon="lucide:gauge" className="text-cyan-400 text-2xl"></iconify-icon>
              </div>

              <div className="h-full flex flex-col justify-between gap-16">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono group-hover:text-cyan-400 transition-colors">Velocity</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-michroma text-white group-hover:text-cyan-400 transition-colors duration-300">260</span>
                    <span className="text-lg font-mono text-white/50">mph</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 mt-6 mb-4 group-hover:bg-cyan-500/30 transition-colors"></div>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Top Speed</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors duration-500 rounded-br-lg"></div>
            </motion.div>

            {/* Metric 3: Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {/* @ts-ignore */}
                <iconify-icon icon="lucide:map-pin" className="text-cyan-400 text-2xl"></iconify-icon>
              </div>

              <div className="h-full flex flex-col justify-between gap-16">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono group-hover:text-cyan-400 transition-colors">Endurance</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-michroma text-white group-hover:text-cyan-400 transition-colors duration-300">800</span>
                    <span className="text-lg font-mono text-white/50">+</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 mt-6 mb-4 group-hover:bg-cyan-500/30 transition-colors"></div>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Miles Range</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors duration-500 rounded-br-lg"></div>
            </motion.div>

            {/* Metric 4: AI Compute */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                {/* @ts-ignore */}
                <iconify-icon icon="lucide:cpu" className="text-cyan-400 text-2xl"></iconify-icon>
              </div>

              <div className="h-full flex flex-col justify-between gap-16">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-mono group-hover:text-cyan-400 transition-colors">Neural Net</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-michroma text-white group-hover:text-cyan-400 transition-colors duration-300">1000</span>
                    <span className="text-lg font-mono text-white/50">TOPS</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 mt-6 mb-4 group-hover:bg-cyan-500/30 transition-colors"></div>
                  <span className="text-xs text-white/40 uppercase tracking-widest">Compute Power</span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/10 group-hover:border-cyan-500 transition-colors duration-500 rounded-br-lg"></div>
            </motion.div>

          </div>
        </div>
        {/* Bottom Fade Transition to Neural */}
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      </section>

      {/* NEW SECTION 4: NEURAL ARCHITECTURE */}
      <section id="neural" className="min-h-screen w-full relative bg-black flex items-center justify-center py-16 md:py-24 px-6 md:px-12 overflow-hidden">

        {/* Dynamic Background Elements */}
        {/* Top Fade Transition from Performance */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)] opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black"></div>

        <div className="max-w-7xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full animate-ping absolute opacity-75"></span>
                  <span className="w-3 h-3 bg-cyan-500 rounded-full relative block"></span>
                </div>
                <span className="text-cyan-500 text-xs uppercase tracking-[0.4em] font-mono font-bold">Artificial Intelligence</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-michroma text-white leading-[0.9] uppercase mb-8 tracking-tighter">
                Sentient <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">Core</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base leading-relaxed font-light max-w-md border-l-2 border-cyan-500/50 pl-6">
                The Hyper-Mind™ processor doesn't just drive; it perceives. Fusing data from 32 distinct sensors to create a living, breathing holographic map of reality in real-time.
              </p>
            </div>

            {/* Enhanced Terminal UI */}
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-6 font-mono text-xs text-cyan-500/80 mt-2 shadow-lg shadow-cyan-900/10 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between border-b border-white/5 pb-2 mb-2">
                  <span className="text-white/30">SYS.DIAGNOSTICS</span>
                  <span className="text-emerald-500 animate-pulse">● LIVE</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white/40">01</span>
                  <span>LIDAR_CLUSTER_ARRAY</span>
                  <div className="flex-grow h-[1px] bg-white/5 mx-2"></div>
                  <span className="text-emerald-400">[ONLINE]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white/40">02</span>
                  <span>PREDICTIVE_PATHING_V9</span>
                  <div className="flex-grow h-[1px] bg-white/5 mx-2"></div>
                  <span className="text-cyan-400">[ACTIVE]</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white/40">03</span>
                  <span>BIOMETRIC_FEEDBACK_LOOP</span>
                  <div className="flex-grow h-[1px] bg-white/5 mx-2"></div>
                  <span className="text-purple-400">[SYNCED]</span>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-fit mt-6 px-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-cyan-400 hover:text-black transition-all duration-300 clip-path-slant relative overflow-hidden group"
            >
              <span className="relative z-10">Initialize System</span>
              <div className="absolute inset-0 bg-cyan-300 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </motion.button>
          </motion.div>


          {/* Right: Visual Abstract Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-square flex items-center justify-center"
          >
            {/* Rotating Rings */}
            <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-12 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-24 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>

            {/* Central Core */}
            <div className="w-32 h-32 bg-cyan-500/10 backdrop-blur-md rounded-full border border-cyan-400/50 flex items-center justify-center relative shadow-[0_0_50px_rgba(34,211,238,0.2)]">
              <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_white]"></div>
              {/* Scanning Line */}
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-1/2 animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>

            {/* Floating Data Points */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-20 bg-black/80 border border-white/20 p-2 rounded backdrop-blur-sm"
            >
              <div className="w-20 h-1 bg-white/10 rounded overflow-hidden">
                <div className="w-[70%] h-full bg-cyan-400"></div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section >

      {/* FOOTER SECTION */}
      < footer className="w-full bg-black text-white pt-16 md:pt-24 pb-8 md:pb-12 px-6 md:px-12 border-t border-white/10 relative overflow-hidden" >

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12 md:gap-20">

          {/* Top Row: Newsletter & Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Newsletter */}
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-michroma uppercase">Join the Vision.</h3>
              <p className="text-white/50 text-sm max-w-sm">Receive exclusive updates on the Xpectra manufacturing process and release dates.</p>
              <div className="flex gap-0 border-b border-white/30 pb-2 max-w-sm group focus-within:border-cyan-400 transition-colors">
                <input type="email" placeholder="ENTER EMAIL ADDRESS" className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-white/20 font-mono tracking-wider" />
                <button className="text-white/70 hover:text-cyan-400 text-xs uppercase tracking-widest font-bold transition-colors">Submit</button>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-xs tracking-widest uppercase font-bold text-white/60">
              <div className="flex flex-col gap-4">
                <span className="text-white font-michroma mb-2">Models</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">Vision X</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Vision S</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Roadster</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-michroma mb-2">Company</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">About Us</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Investors</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-michroma mb-2">Legal</span>
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              </div>
            </div>
          </div>

          {/* Bottom Row: Branding & Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="w-full">
              <h1 className="text-[12vw] leading-[0.8] font-black font-michroma text-white/10 select-none tracking-tighter">
                AVATR
              </h1>
            </div>
            <div className="flex flex-col items-end gap-2 text-[10px] text-white/30 uppercase tracking-widest whitespace-nowrap">
              <span>© 2026 Avatr Motors Inc.</span>
              <span>Designed for the Future.</span>
            </div>
          </div>
        </div>
      </footer >

      {/* Aura Background Script (Keeping it if needed, though the image covers it) */}
      < Script id="unicorn-studio" strategy="afterInteractive" >
        {`
          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        `}
      </Script >
    </div >
  );
}
