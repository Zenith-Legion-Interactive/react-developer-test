import React, { useEffect, useState } from "react";
import { UserProps } from "../types";
import { getUser } from "../API/Users";
import _ from "lodash";

const Profile: React.FC<{ id: string }> = ({ id }): JSX.Element => {
    const [user, setUser] = useState<UserProps>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const abort = new AbortController();
        setIsLoading(true);

        getUser(id)
            .then(({ data }) => {
                console.log(data);

                setUser(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.response.data.error);
                setIsLoading(false);
            });

        return () => abort.abort();
    }, [id]);

    return (
        <React.Fragment>
            {!isLoading ? (
                <div className="border border-1 space-y-6 rounded-lg p-8 w-2/5 mx-auto">
                    {error && <div className="border border-red-500 max-w-sm mx-auto p-2 rounded-2xl text-red-500">Error: {error}</div>}
                    {!_.isEmpty(user) ? (
                        <div>
                            <div className="text-2xl font-bold">Profile</div>
                            <div className="flex justify-between">
                                <div>Name:</div>
                                <div>
                                    {user.firstName} {user.lastName}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>Email:</div>
                                <div>{user.email}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Name:</div>
                                <div>
                                    {user.firstName} {user.lastName}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>Gender:</div>
                                <div>{user.gender}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Phone:</div>
                                <div>{user.phone}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Date of Birth:</div>
                                <div>{user.dateOfBirth}</div>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between">
                                <div>Street:</div>
                                <div>{user.location.street}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>City:</div>
                                <div>{user.location.city}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>State:</div>
                                <div>{user.location.state}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Country:</div>
                                <div>{user.location.country}</div>
                            </div>
                            <div className="flex justify-between">
                                <div>Timezone:</div>
                                <div>{user.location.timezone}</div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-lg">Unable to user profile</div>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </React.Fragment>
    );
};

export default Profile;
