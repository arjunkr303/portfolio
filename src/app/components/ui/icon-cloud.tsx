"use client";

import React, { useEffect, useRef, useState } from "react";

export interface IconCloudProps {
  images?: string[];
  iconSlugs?: string[];
}

interface SphereIcon {
  x: number;
  y: number;
  z: number;
  imgUrl: string;
  slug: string;
  imgLoaded: boolean;
  imgElement?: HTMLImageElement;
}

export function IconCloud({ images, iconSlugs }: IconCloudProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate list of image URLs from images prop or iconSlugs prop
  const iconUrls = React.useMemo(() => {
    if (images && images.length > 0) return images;
    if (iconSlugs && iconSlugs.length > 0) {
      return iconSlugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);
    }
    return [];
  }, [images, iconSlugs]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || iconUrls.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = containerRef.current?.clientWidth || 400);
    let height = (canvas.height = containerRef.current?.clientHeight || 400);

    const radius = Math.min(width, height) * 0.38;
    const numIcons = iconUrls.length;

    // Fibonacci Sphere Distribution
    const icons: SphereIcon[] = iconUrls.map((url, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numIcons);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      // Extract slug name for fallback / alt text
      const parts = url.split("/");
      const slug = parts[parts.length - 1] || `icon-${i}`;

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = url;

      const iconObj: SphereIcon = {
        x,
        y,
        z,
        imgUrl: url,
        slug,
        imgLoaded: false,
        imgElement: img,
      };

      img.onload = () => {
        iconObj.imgLoaded = true;
      };

      return iconObj;
    });

    // Mouse tracking for 3D sphere rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0.002;
    let targetRotationY = 0.002;
    let currentRotationX = 0.002;
    let currentRotationY = 0.002;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      mouseX = (e.clientX - cx) / (rect.width / 2);
      mouseY = (e.clientY - cy) / (rect.height / 2);

      targetRotationY = mouseX * 0.015;
      targetRotationX = -mouseY * 0.015;
    };

    const handleMouseLeave = () => {
      targetRotationX = 0.002;
      targetRotationY = 0.002;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      width = canvas.width = containerRef.current.clientWidth;
      height = canvas.height = containerRef.current.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation dampening
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      const sinX = Math.sin(currentRotationX);
      const cosX = Math.cos(currentRotationX);
      const sinY = Math.sin(currentRotationY);
      const cosY = Math.cos(currentRotationY);

      // Rotate and sort icons by z-depth
      icons.forEach((icon) => {
        // Rotate around Y axis
        const x1 = icon.x * cosY + icon.z * sinY;
        const z1 = -icon.x * sinY + icon.z * cosY;

        // Rotate around X axis
        const y1 = icon.y * cosX - z1 * sinX;
        const z2 = icon.y * sinX + z1 * cosX;

        icon.x = x1;
        icon.y = y1;
        icon.z = z2;
      });

      // Sort icons so back icons render behind front icons
      const sortedIcons = [...icons].sort((a, b) => a.z - b.z);

      const centerX = width / 2;
      const centerY = height / 2;

      sortedIcons.forEach((icon) => {
        // 3D Perspective Scaling
        const scale = (icon.z + radius * 1.5) / (radius * 2.5);
        const iconSize = Math.max(16, Math.min(36, 28 * scale));
        const alpha = Math.max(0.2, Math.min(1, (icon.z + radius) / (radius * 2)));

        const screenX = centerX + icon.x - iconSize / 2;
        const screenY = centerY + icon.y - iconSize / 2;

        ctx.save();
        ctx.globalAlpha = alpha;

        if (icon.imgLoaded && icon.imgElement) {
          ctx.drawImage(icon.imgElement, screenX, screenY, iconSize, iconSize);
        } else {
          // Fallback circle while image loads
          ctx.fillStyle = "#00C9A7";
          ctx.beginPath();
          ctx.arc(centerX + icon.x, centerY + icon.y, iconSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [iconUrls]);

  return (
    <div
      ref={containerRef}
      className="relative flex size-full items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px]"
    >
      <canvas ref={canvasRef} className="block w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
