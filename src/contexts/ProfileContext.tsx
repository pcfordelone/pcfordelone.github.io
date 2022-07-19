import { ApolloError } from "@apollo/client";
import { createContext } from "react";
import { Profile, useListProfileWithProjectsQuery } from "../graphql/generated";

interface IProfileContext {
  isLoading: boolean;
  profile: Profile | undefined;
  error: ApolloError | undefined;
}

interface IProfileProviderProps {
  children: React.ReactNode;
}

export const ProfileContext = createContext<IProfileContext>({
  isLoading: true,
  profile: undefined,
  error: undefined,
});

export const ProfileProvider: React.FC<IProfileProviderProps> = ({
  children,
}) => {
  const { loading, error, data } = useListProfileWithProjectsQuery({
    variables: {
      id: "cl4urdvh6uicg0dkdc51du7ld",
    },
  });

  return (
    <ProfileContext.Provider
      value={{ profile: data?.profile as Profile, isLoading: loading, error }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
