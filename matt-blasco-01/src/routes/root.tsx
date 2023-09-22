import { useEffect } from "react";
import {
    Outlet,
    NavLink,
    Link,
    useLoaderData,
    useNavigation,
    useSubmit,
    Form,
    redirect
} from "react-router-dom";
import { getUsers, createUser } from "../api-calls";
import { UserObjectInterface } from "./profile/user";
import { RequestObject } from "../types";
import PublicButton from "../public-components/button";


export async function loader({ request }: RequestObject) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || '';
  const users = await getUsers(q);
    return { users, q };
}

export async function action() {
    const user = await createUser();
    return redirect(`/profile/${user.id}/edit`);
}

export interface RootLoaderUsersInterface{
    users?: UserObjectInterface[];
    q: string
}

export default function Root() {
    const { users, q } = useLoaderData() as RootLoaderUsersInterface; //typecast for now since it's still an ongoing feature to use generics https://github.com/remix-run/react-router/discussions/9854
    const navigation = useNavigation();
    const submit = useSubmit();

    useEffect(() => {
      const element = document.getElementById("q") as HTMLInputElement | null;
      if(element){
        element.value = q;
      }
    }, [q]);



    useEffect(()=> {
      const users = localStorage.getItem("1");
      if(!users){
        setTimeout(()=> {
          window.location.reload();
        }, 500)
      }
    }, [])

    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    
    return (
      <>
        <div id="sidebar">
          <h1>Display User List Prototype</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search users"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  // submit(event.currentTarget.form);
                  const isFirstSearch = q === null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
            {/* <Form method="post">
            </Form> */}
            <Link
              to={`/`}
            >
              
              <PublicButton type="submit" description="Counter" inhibitDefaultClass/>
            </Link>
            
          </div>
          <nav>
            {users?.length ? (
                <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                      <NavLink 
                        to={`profile/${user.id}`}
                        className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                        }
                      >
                        {user.firstName || user.lastName ? (
                        <>
                        {user.firstName} {user.lastName}
                        </>
                        ) : (
                        <i>No Name</i>
                        )}{" "}
                        {user.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No users</i>
                </p>
            )}
          </nav>
        </div>
        <div 
          id="detail"
          className={
            navigation.state === "loading" ? "loading" : ""
          }
        >
            <Outlet />
        </div>
      </>
    );
  }