import React, { useEffect, useState } from "react";
import { getUsers } from "../API/Users";
import { UserProps } from "../types";
import { Link, Outlet } from "react-router-dom";
import _ from "lodash";

const UserList: React.FC = (): JSX.Element => {
    const [users, setUsers] = useState<Array<UserProps>>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const abort = new AbortController();
        setIsLoading(true);

        getUsers({ signal: abort.signal })
            .then(({ data }) => {
                setUsers(data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                if (error.response) {
                    setError(error.response.data.error);
                    setIsLoading(false);
                }
            });

        return () => abort.abort();
    }, []);

    return (
        <React.Fragment>
            <div className="border border-1 space-y-6 rounded-lg p-8 w-2/5 mx-auto">
                {error && (
                    <div data-testid="has-error" className="border border-red-500 max-w-sm mx-auto p-2 rounded-2xl text-red-500">
                        Error: {error}
                    </div>
                )}
                <div data-testid="user-lists-title" className="text-2xl mt-6 font-bold">
                    User Lists
                </div>
                <ul className="p-2">
                    {!isLoading ? (
                        <div data-testid="user-lists-data">
                            {users.map((user: UserProps, index) => (
                                <li key={index}>
                                    <Link to={`/users/${user.id}`} className="normal-case hover:underline hover:text-blue-500">
                                        {user.title}.&nbsp;{user.firstName} {user.lastName}
                                    </Link>
                                </li>
                            ))}
                            {_.isEqual(users.length, 0) && (
                                <div data-testid="unable-to-load" className="text-lg">
                                    Unable to load users
                                </div>
                            )}
                        </div>
                    ) : (
                        <li data-testid="loading">Loading...</li>
                    )}
                </ul>
            </div>
            <Outlet />
        </React.Fragment>
    );
};

export default UserList;
