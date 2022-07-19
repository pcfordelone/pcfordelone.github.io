import { Cover } from "../components/Cover";
import { Experience } from "../components/Experience";
import { Profile } from "../components/Profile/index";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education/index";
import { useListProfileWithProjectsQuery } from "../graphql/generated";
import { Contact } from "../components/Contact";
import { useRef } from "react";
import { ProfileInfo } from "../components/ProfileInfo";

import { Loading } from "../components/Loading";
import { useProfile } from "../contexts/useProfile";

export const ProfilePage: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  function handleScrollToProfile() {
    profileRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const { profile, isLoading, error } = useProfile();

  if (isLoading) return <Loading />;
  if (error) return <p>Error...</p>;

  return (
    <>
      <Cover scrollToProfile={handleScrollToProfile} profileData={profile} />
      <ProfileInfo />
      <Profile ref={profileRef} profile={profile} />
      <Skills />
      <Projects profile={profile} />
      <Experience />
      <Education />
      <Contact />
    </>
  );
};
