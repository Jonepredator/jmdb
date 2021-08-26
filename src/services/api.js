import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYmYwMjM4MDQyZTgzMWU5N2FkMjQzYjljZjk5NGU3MCIsInN1YiI6IjYwMDE4NDk0ZGI5NTJkMDAzZGQzNmI3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D--81zchgJjWzQJVZXoAAwqKKGxNE5dEeQZnkuC7K1A';
export default axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   headers: {
      Authorization: `Bearer ${token}`
   }
});