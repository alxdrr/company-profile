import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      ERROR 404 NOT FOUND !
      <Link to="/">
        <button>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
