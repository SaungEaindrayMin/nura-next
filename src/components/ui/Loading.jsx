import React from 'react';
import { cn } from '../../utils/cn';

export function LoadingSpinner({ size = 'md', className, ...props }) {
    const sizeClasses = {
        sm: 'h-4 w-4 border-2',
        md: 'h-8 w-8 border-4',
        lg: 'h-12 w-12 border-4',
    };

    return (
        <div
            className={cn(
                "animate-spin rounded-full border-primary/30 border-t-primary",
                sizeClasses[size],
                className
            )}
            role="status"
            aria-label="Loading"
            {...props}
        >
            <span className="sr-only">Loading...</span>
        </div>
    );
}

export function Skeleton({ className, ...props }) {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-secondary-dark/50",
                className
            )}
            {...props}
        />
    );
}

export function LoadingOverlay({ message = "Loading..." }) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
            <LoadingSpinner size="lg" className="mb-4" />
            <p className="text-text-muted text-sm font-medium animate-pulse">{message}</p>
        </div>
    );
}
