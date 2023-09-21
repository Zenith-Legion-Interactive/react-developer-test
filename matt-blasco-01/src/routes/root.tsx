import { useEffect } from "react";
import {
    Outlet,
    NavLink,
    useLoaderData,
    useNavigation,
    useSubmit,
    Form,
    redirect
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";
import { ContactObjectInterface } from "./contact";
import { RequestObject } from "../types";


export async function loader({ request }: RequestObject) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || '';
  const contacts = await getContacts(q);
    return { contacts, q };
}

export async function action() {
    const contact = await createContact();
    return redirect(`/profile/${contact.id}/edit`);
}

export interface RootLoaderContactsInterface{
    contacts?: ContactObjectInterface[];
    q: string
}

export default function Root() {
    const { contacts, q } = useLoaderData() as RootLoaderContactsInterface; //typecast for now since it's still an ongoing feature to use generics https://github.com/remix-run/react-router/discussions/9854
    const navigation = useNavigation();
    const submit = useSubmit();

    useEffect(() => {
      const element = document.getElementById("q") as HTMLInputElement | null;
      if(element){
        element.value = q;
      }
    }, [q]);

    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
    
    return (
      <>
        <div id="sidebar">
          <h1>Display Contact List Prototype</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
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
            <Form method="post">
                <button type="submit">New</button>
            </Form>
          </div>
          <nav>
            {contacts?.length ? (
                <ul>
                {contacts?.map((contact) => (
                    <li key={contact.id}>
                      <NavLink 
                        to={`profile/${contact.id}`}
                        className={({ isActive, isPending }) =>
                        isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                        }
                      >
                        {contact.first || contact.last ? (
                        <>
                        {contact.first} {contact.last}
                        </>
                        ) : (
                        <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
                      </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No contacts</i>
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