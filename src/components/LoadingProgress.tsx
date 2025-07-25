import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';

interface LoadingProgressProps {
  isLoading: boolean;
  duration?: number;
}

export function LoadingProgress({ isLoading, duration = 2000 }: LoadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (100 / (duration / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isLoading, duration]);

  useEffect(() => {
    if (!isLoading) {
      setProgress(0);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Progress value={progress} className="h-1 rounded-none" />
    </motion.div>
  );
}