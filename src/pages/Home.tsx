import React from "react";
import supabase from "../config/supabaseClient";
const Home: React.FC = () => {
  console.log(supabase);
  return <div>test</div>;
};

export default Home;
