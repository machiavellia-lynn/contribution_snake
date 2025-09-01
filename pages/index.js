import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Snake.module.css';

export default function Home() {
  const [snakePosition, setSnakePosition] = useState({ x: 0, y: 0 });
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch your GitHub contribution data on component mount
  useEffect(() => {
    async function fetchContributions() {
      try {
        // Replace with your GitHub username
        const username = 'Savirui';
        // Note: This is a simplified example. You'll need a proper API
        // to fetch GitHub contribution data or use a pre-generated SVG
        const response = await fetch(`/api/contributions?username=${username}`);
        const data = await response.json();
        setContributionData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contribution data:', error);
        setLoading(false);
      }
    }
    
    fetchContributions();
  }, []);

  function moveSnake(direction) {
    setSnakePosition(prev => {
      switch(direction) {
        case 'up':
          return { ...prev, y: prev.y - 10 };
        case 'down':
          return { ...prev, y: prev.y + 10 };
        case 'left':
          return { ...prev, x: prev.x - 10 };
        case 'right':
          return { ...prev, x: prev.x + 10 };
        default:
          return prev;
      }
    });
  }

  if (loading) {
    return <div className={styles.container}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Interactive GitHub Contribution Snake</title>
        <meta name="description" content="Control a snake eating my GitHub contributions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Interactive GitHub Contribution Snake</h1>
        
        <div className={styles.grid}>
          {/* Render the contribution grid and snake here */}
          <div className={styles.contributionChart}>
            {/* This is where you'd render the SVG of your contribution chart */}
            <div className={styles.snake} style={{ left: snakePosition.x, top: snakePosition.y }}>🐍</div>
          </div>
          
          <div className={styles.controls}>
            <button onClick={() => moveSnake('up')} className={styles.button}>⬆️</button>
            <div className={styles.horizontalControls}>
              <button onClick={() => moveSnake('left')} className={styles.button}>⬅️</button>
              <button onClick={() => moveSnake('right')} className={styles.button}>➡️</button>
            </div>
            <button onClick={() => moveSnake('down')} className={styles.button}>⬇️</button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/Savirui" target="_blank" rel="noopener noreferrer">
          View my GitHub profile
        </a>
      </footer>
    </div>
  );
}