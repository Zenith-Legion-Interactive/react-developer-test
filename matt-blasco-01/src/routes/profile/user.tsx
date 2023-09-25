import {
  useLoaderData,
  Form,
  useFetcher,
} from "react-router-dom";
import { getUser, updateUser  } from "../../api-calls";
import { ParamsObject, RequestParamsObject, UserFullViewInterface } from "../../types";
import PublicButton from '../../public-components/button'



export interface UserLoaderInterface {
    params?: {
        userId?: string, //declared on main.tsx dynamic url param
    }
}
export interface UserObjectInterface {
  id?: string | number;
  firstName?: string;
  lastName?: string;
  picture?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
  createdAt?: number;
} 

interface LoaderUser{
  user?: UserFullViewInterface;
}

export async function action({ request, params }: RequestParamsObject) {
  let formData = await request.formData();
  return updateUser(params.userId, {
    favorite: formData.get("favorite") === "true",
  });
}

export async function loader({ params }: ParamsObject) {
  const user = await getUser(params.userId);
  if (!user) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { user };
}


export default function User() {
  
  const { user } = useLoaderData() as LoaderUser;
  const DateTypeConversion = (key: string = ''): string => {
    const locDate = new Date(key)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      // hour: 'numeric',
      // minute: 'numeric',
    }).format(locDate);
  }

  return (
    <div id="user">
      <div>
        <img
          key={user?.picture}
          src={user?.picture || undefined}
        />
      </div>

      <div>
        <h1>
          {user?.firstName || user?.lastName ? (
            <>
              {user?.title?.charAt(0).toUpperCase()}{user?.title?.substring(1, 5)} {user?.firstName} {user?.lastName}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite user={user} />
        </h1>
        <section>
        <h4>Information:</h4>
        <p>Birthday: <i>{`${DateTypeConversion(user?.dateOfBirth)}`}</i></p>
        <p>Gender: <i>{user?.gender}</i></p>
        <p>Phone: <i>{user?.phone}</i></p>
        <p>Registered Since: <i>{`${DateTypeConversion(user?.registerDate)}`}</i></p>
        <p>Location:</p>
        <p>City: <i>{user?.location?.city}</i></p>
        <p>Country: <i>{user?.location?.country}</i></p>
        <p>State: <i>{user?.location?.state}</i></p>
        <p>Street: <i>{user?.location?.street}</i></p>
        <p>Timezone: <i>{user?.location?.timezone}</i></p>
        </section>
        
        {user?.email && (
          <p>
            <a
              target="_blank"
              href={`https://gmail.com/`}
            >
              {user?.email}
            </a>
          </p>
        )}

        <div>
          <Form action="edit">
            <PublicButton type="submit" description="Edit" inhibitDefaultClass/>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <PublicButton type="submit" description="Delete" inhibitDefaultClass/>
          </Form>
        </div>
      </div>
    </div>
  );
}

export interface FavoriteProps {
    user?: UserObjectInterface;
}

function Favorite({user}: FavoriteProps) {
  const fetcher = useFetcher();
  let favorite = user?.favorite;

  if (fetcher.formData) {
    favorite = fetcher.formData.get("favorite") === "true";
  }
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}