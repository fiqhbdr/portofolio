"use client";

import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "text-xl font-semibold text-gray-900 dark:text-white transition-colors",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-600 dark:text-gray-400 transition-colors",
        className
      )}
    >
      {children}
    </p>
  );
};

export const HoverCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-lg transition-all duration-500 hover:shadow-2xl",
        className
      )}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full transform transition-transform duration-500 group-hover:scale-[0.98]">
        {children}
      </div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full transform transition-transform duration-1000 group-hover:translate-x-full">
        <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>
    </div>
  );
};
