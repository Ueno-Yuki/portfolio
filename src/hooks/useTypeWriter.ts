import { useState, useEffect, useCallback, useRef } from 'react';

interface UseTypeWriterProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export const useTypeWriter = ({ text, speed = 10, delay = 0, onComplete }: UseTypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isSkippedRef = useRef(false);

  // スキップ機能
  const skipAnimation = useCallback(() => {
    if (isTyping && text) {
      // タイマーをクリア
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      // 即座に全文表示
      setDisplayText(text);
      setIsTyping(false);
      isSkippedRef.current = true;
      onComplete?.(); // スキップ時にもコールバック実行
    }
  }, [isTyping, text, onComplete]);

  const startTyping = useCallback(() => {
    // 既存のタイマーをクリア
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    setDisplayText('');
    setIsTyping(true);
    isSkippedRef.current = false;
    
    let i = 0;
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (i < text.length && !isSkippedRef.current) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (!isSkippedRef.current) {
            setIsTyping(false);
            onComplete?.(); // タイピング完了時にコールバック実行
          }
        }
      }, speed);
    }, delay);
  }, [text, speed, delay, onComplete]);

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

  return { displayText, isTyping, skipAnimation };
};