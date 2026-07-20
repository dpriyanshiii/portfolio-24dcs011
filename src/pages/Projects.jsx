import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import ErrorMessage from '../components/ErrorMessage';

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

const fetchRepos = () => {
  setLoading(true);
  setError(null);
  fetch('https://api.github.com/users/dpriyanshiii/repos')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((data) => setRepos(data))
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
};

  useEffect(() => {
    fetchRepos();
  }, []);

  if (loading) return <Spinner />;
  if (error)
    return (
      <div>
        <ErrorMessage message={error} />
        <button onClick={fetchRepos}>🔄 Retry</button>
      </div>
    );

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Projects</h2>

      <input
        type="text"
        placeholder="Search repositories..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>{' '}
            ⭐ {repo.stargazers_count}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;