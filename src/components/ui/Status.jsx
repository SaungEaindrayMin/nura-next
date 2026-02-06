import React from 'react';
import { AlertCircle, CheckCircle, PackageOpen } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Generic Status State Component
 * Used for Error, Empty, and Success states
 */
export function StatusState({
    icon: Icon,
    title,
    description,
    action,
    type = 'default',
    className
}) {
    const colors = {
        default: 'text-text-muted',
        error: 'text-red-500',
        success: 'text-accent-green',
        warning: 'text-accent-yellow',
    };

    return (
        <div className={cn(
            "flex flex-col items-center justify-center py-12 px-4 text-center animate-fade-in",
            className
        )}>
            {Icon && (
                <div className={cn("mb-4 p-3 rounded-full bg-secondary/50", colors[type])}>
                    <Icon className="w-8 h-8" />
                </div>
            )}
            <h3 className="text-lg font-grotesk font-semibold text-text mb-2">
                {title}
            </h3>
            {description && (
                <p className="text-text-muted max-w-sm mb-6 text-sm">
                    {description}
                </p>
            )}
            {action && (
                <div className="mt-2">
                    {action}
                </div>
            )}
        </div>
    );
}

/**
 * Error State Wrapper
 */
export function ErrorState({
    title = "Something went wrong",
    message = "We couldn't load this content.",
    onRetry,
    className
}) {
    return (
        <StatusState
            type="error"
            icon={AlertCircle}
            title={title}
            description={message}
            className={className}
            action={onRetry ? (
                <button
                    onClick={onRetry}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark transition-colors"
                >
                    Try Again
                </button>
            ) : null}
        />
    );
}

/**
 * Empty State Wrapper
 */
export function EmptyState({
    title = "No items found",
    message = "There's nothing here yet.",
    className,
    action
}) {
    return (
        <StatusState
            type="default"
            icon={PackageOpen}
            title={title}
            description={message}
            className={className}
            action={action}
        />
    );
}
