import styles from "@/styles/Skills/StarRating.module.css";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export default function StarRating({ rating, maxStars = 5 }: StarRatingProps) {
  return (
    <div className={styles.starRating}>
      {Array.from({ length: maxStars }, (_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}