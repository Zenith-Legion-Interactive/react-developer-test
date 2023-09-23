import React from "react";
import Profile from "../Components/Profile";
import { useParams } from "react-router";

const PageTwo: React.FC = (): JSX.Element => {
    const params = useParams<{ id: string }>();
    return <Profile id={params.id as string} />;
};

export default PageTwo;
