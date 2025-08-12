import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypeWriter = ({ text, speed = 10, delay = 0 }: UseTypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTyping = useCallback(() => {
    // 既存のタイマーをクリア
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    setDisplayText('');
    setIsTyping(true);
    
    let i = 0;
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsTyping(false);
        }
      }, speed);
    }, delay);
  }, [text, speed, delay]);

  useEffect(() => {
    if (text) {
      startTyping();
    }
    
    // クリーンアップ
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startTyping, text]);

  return { displayText, isTyping };
};