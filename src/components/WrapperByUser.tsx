"use client"

import { useUser } from "@/lib/UserProvider";
import Projects from "./Projects";
import { Technology } from "./Technology";
import { Contact } from "./Contact";

export const ProjectsWrapper = () => {
  
    const { user } = useUser();
  
    return <Projects user={user} />;
  };

export const TechnologyWrapper = () => {
  
    const { user } = useUser();
  
    return <Technology user={user} />;
  };

export const ContactWrapper = () => {
  
    const { user } = useUser();
  
    return <Contact user={user} />;
  };