import React, { useState } from 'react';
import styles from './TopicList.module.css';

const TopicList = ({ address }) => {
    const [showTopics, setShowTopics] = useState(false);
    const [topics, setTopics] = useState([]); // Zustand für die Themen
    const [loading, setLoading] = useState(false); // Zustand für das Laden
    const [error, setError] = useState(null); // Zustand für Fehler
    const handleCityClick = async () => {
        if (!showTopics) {
            setLoading(true);
            setError(null); // Fehler zurücksetzen

            try {
                const response = await fetch(`http://localhost:8080/api/topics?address=${encodeURIComponent(address)}`);
                const responseStatus = (await response).status
                console.log("respone is "+ responseStatus);
                if (!(responseStatus === 200)) {
                    throw new Error('Network response was not ok');
                }
                const data = (await response.json());
                setTopics(data);
                console.log(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        setShowTopics(!showTopics);
    };

    return (
        <div className={styles.city}>
            <h2 className={styles.cityTitle}>Ihr Abstimmungsgebiet ist: {address}</h2>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={handleCityClick}>
                    {showTopics ? "Themen ausblenden" : "Themen anzeigen"}
                </button>
            </div>
            {loading && <p>Loading...</p>} {/* Ladeanzeige */}
            {error && <p className={styles.error}>{error}</p>} {/* Fehleranzeige */}
            {showTopics && !loading && (
                <ul className={styles.cityList}>
                    {topics.map(topic => (
                        <li className={styles.cityItem} key={topic.id}>
                            <a href={`/voting/${topic.id}`}>{topic.topicDescription}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TopicList;