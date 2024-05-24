//import { useState, useEffect } from 'react';
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  //const [repositories, setRepositories] = useState();
  //const [loading, setLoading] = useState(false);

  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolity: "cache-and-network",
  });


  /* const fetchRepositories = async () => {
    setLoading(true);

    // Replace the IP address part with your own IP address!
    const response = await fetch('http://192.168.0.105:5000/api/repositories');
    const json = await response.json();

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories }; */
  return (
    { repositories: data ? data.repositories : null, loading, error }
  );
};

export default useRepositories;