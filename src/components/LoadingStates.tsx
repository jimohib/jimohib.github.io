// src/components/LoadingStates.tsx
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { RefreshCw, AlertTriangle, Wifi } from 'lucide-react';

// Project Card Skeleton Loader
export const ProjectCardSkeleton: React.FC = () => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    {/* Header */}
    <div className="flex items-center gap-2 mb-3">
      <Skeleton className="w-3 h-3 rounded-full" />
      <Skeleton className="w-20 h-4" />
      <Skeleton className="w-16 h-5 rounded-full ml-auto" />
    </div>
    
    {/* Title */}
    <Skeleton className="w-3/4 h-6 mb-3" />
    
    {/* Description */}
    <div className="space-y-2 mb-4">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-2/3 h-4" />
    </div>
    
    {/* Tags */}
    <div className="flex gap-2 mb-4">
      <Skeleton className="w-16 h-5 rounded-full" />
      <Skeleton className="w-20 h-5 rounded-full" />
      <Skeleton className="w-18 h-5 rounded-full" />
    </div>
    
    {/* Stats */}
    <div className="flex gap-4 mb-4">
      <Skeleton className="w-12 h-4" />
      <Skeleton className="w-12 h-4" />
    </div>
    
    {/* Buttons */}
    <div className="flex gap-2">
      <Skeleton className="flex-1 h-8 rounded-md" />
      <Skeleton className="flex-1 h-8 rounded-md" />
    </div>
  </div>
);

// Publication Card Skeleton
export const PublicationSkeleton: React.FC = () => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <div className="flex items-center gap-2 mb-3">
      <Skeleton className="w-5 h-5 rounded" />
      <Skeleton className="w-16 h-5 rounded-full" />
    </div>
    <Skeleton className="w-5/6 h-6 mb-2" />
    <Skeleton className="w-3/4 h-4 mb-2" />
    <Skeleton className="w-1/2 h-4 mb-4" />
    
    <div className="space-y-2 mb-4">
      <Skeleton className="w-full h-4" />
      <Skeleton className="w-4/5 h-4" />
      <Skeleton className="w-3/5 h-4" />
    </div>
    
    <div className="flex gap-2 mb-4">
      <Skeleton className="w-20 h-5 rounded-full" />
      <Skeleton className="w-16 h-5 rounded-full" />
    </div>
    
    <Skeleton className="w-full h-8 rounded-md" />
  </div>
);

// General Error State Component
export const ErrorState: React.FC<{ 
  message?: string; 
  retry?: () => void;
  type?: 'network' | 'general' | 'notfound';
}> = ({ 
  message = "Something went wrong", 
  retry,
  type = 'general'
}) => {
  const getIcon = () => {
    switch (type) {
      case 'network':
        return <Wifi className="h-12 w-12 text-red-500" />;
      case 'notfound':
        return <span className="text-6xl">🔍</span>;
      default:
        return <AlertTriangle className="h-12 w-12 text-red-500" />;
    }
  };

  const getTitle = () => {
    switch (type) {
      case 'network':
        return 'Connection Error';
      case 'notfound':
        return 'Nothing Found';
      default:
        return 'Oops!';
    }
  };

  return (
    <div className="text-center py-12 px-4">
      <div className="mb-4 flex justify-center">
        {getIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{getTitle()}</h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">{message}</p>
      {retry && (
        <Button onClick={retry} variant="outline" className="hover:bg-gray-50">
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
};

// Loading Spinner Component
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-4'
  };

  return (
    <div className="flex items-center justify-center p-8">
      <div className={`animate-spin rounded-full border-theme-primary border-t-transparent ${sizeClasses[size]}`}></div>
    </div>
  );
};

// Page Loading Component
export const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-theme-primary mx-auto mb-4"></div>
      <p className="text-gray-600 text-lg">Loading portfolio...</p>
    </div>
  </div>
);

// Section Loading Component
export const SectionLoader: React.FC<{ title?: string }> = ({ title = "Loading..." }) => (
  <div className="py-20 text-center">
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
      <div className="h-1 bg-gray-200 rounded w-20 mx-auto mb-8"></div>
      <div className="space-y-4 max-w-2xl mx-auto">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </div>
    </div>
  </div>
);