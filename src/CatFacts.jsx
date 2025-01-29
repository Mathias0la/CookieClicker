import { useState, useEffect } from "react";

export default function CatFacts() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://catfact.ninja/facts?limit=100");
        if (!response.ok) {
          throw new Error(`HTTP error. Status ${response.status}`);
        }
        const result = await response.json();
        const shuffled = result.data.sort(() => 0.5 - Math.random());
        setData(shuffled.slice(0, 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Cat Facts</h1>
      <div className="catfacts">
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {data && (
          <div className="cat-card">
            {data.map((fact) => (
              <div key={fact.id} className="cat">
                <p>{fact.fact}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
