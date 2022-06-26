import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JokeDetails from "../components/JokeDetails";
import SideBar from "../components/SideBar";

import { Joke } from "../models/Joke";

import classes from "./JokeDetailsPage.module.css";

interface Props {}

const JokeDetailsPage: React.FC<Props> = () => {
  const { id } = useParams();
  const [joke, setJoke] = useState<Joke | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async (query: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://api.chucknorris.io/jokes/${query}`);
      setJoke(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke(id || "");
  }, [id]);

  return (
    <div className={`container ${classes["joke-content"]}`}>
      <JokeDetails joke={joke} loading={loading} fetchJoke={fetchJoke} />
      <SideBar />
    </div>
  );
};

export default JokeDetailsPage;
