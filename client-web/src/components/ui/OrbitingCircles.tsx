
"use client";

import { cn } from "@/lib/utils";

interface OrbitingItem {
  icon: string;
  name: string;
  radius: number;
  duration?: number;
  delay?: number; 
  reverse?: boolean;
}

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode; 
  reverse?: boolean; 
  duration?: number; 
  delay?: number; 
  radius?: number; 
  path?: boolean; 
  items: OrbitingItem[];
  mainIcon?: React.ElementType;
}

export function OrbitingCircles({
  className,
  children,
  reverse: globalReverse,
  duration: globalDuration = 20,
  delay: globalDelay = 0,
  radius: defaultRadius = 50, 
  path = true,
  items,
  mainIcon: MainIcon,
}: OrbitingCirclesProps) {
  const uniqueRadii = Array.from(new Set(items.map(item => item.radius || defaultRadius).sort((a, b) => a - b)));

  return (
    <div className={cn("relative flex h-full w-full items-center justify-center", className)}>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          {uniqueRadii.map((r, index) => (
            <circle
              key={`orbit-path-${index}`}
              className="stroke-muted-foreground/30 stroke-1" 
              cx="50%"
              cy="50%"
              r={r}
              fill="none"
              strokeDasharray="3 3" 
            />
          ))}
        </svg>
      )}

      {MainIcon && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <MainIcon className="h-10 w-10 text-foreground" />
        </div>
      )}

      {items.map((item, index) => {
        const itemRadius = item.radius || defaultRadius;
        const itemDuration = item.duration || globalDuration;
        const itemDelay = item.delay || globalDelay; 
        const itemReverse = item.reverse !== undefined ? item.reverse : globalReverse;
        
        return (
          <div
            key={item.name + index}
            style={
              {
                "--radius-orbit": `${itemRadius}px`,
                "--duration-orbit": `${itemDuration}s`,
                "--delay-orbit": `${itemDelay}s`, 
              } as React.CSSProperties
            }
            className={cn(
              "absolute left-1/2 top-1/2", 
              itemReverse ? "animate-orbit-counter-clockwise" : "animate-orbit-clockwise"
            )}
            title={item.name}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full"> 
              <img src={item.icon} alt={item.name} className="h-4 w-4 object-contain opacity-60 hover:opacity-100 transition-opacity" /> 
            </div>
          </div>
        );
      })}
      {children} 
    </div>
  );
}