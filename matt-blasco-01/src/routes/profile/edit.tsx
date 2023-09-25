import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
} from "react-router-dom";
import { updateUser } from "../../api-calls";
import { RequestParamsObject, UserUpdateInterface } from "../../types";
import PublicButton from '../../../src/public-components/button';



export async function action({ request, params }: RequestParamsObject) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateUser(params.userId, updates);
    return redirect(`/profile/${params.userId}`);
}

interface EditUserInterface {
  user?: UserUpdateInterface
}

export default function EditUser() {
  const { user } = useLoaderData() as EditUserInterface;
  const navigate = useNavigate();

  return (
    <Form method="post" id="user-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={user?.firstName}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={user?.lastName}
        />
      </p>
      <label>
        <span>Gender</span>
        <input
          type="text"
          name="gender"
          placeholder="male/female"
          defaultValue={user?.gender}
        />
      </label>
      <label>
        <span>Title</span>
        <input
          type="text"
          name="title"
          placeholder="mr/ms/mrs/etc"
          defaultValue={user?.title}
        />
      </label>
      <label>
        <span>Picture URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Picture URL"
          type="text"
          name="picture"
          defaultValue={user?.picture}
        />
      </label>
      <label>
        <span>Location, City:</span>
        <input
          placeholder="City"
          aria-label="City"
          type="text"
          name="city"
          defaultValue={user?.location?.city}
        />
      </label>
      <label>
        <span>Street:</span>
        <input
          placeholder="Street"
          aria-label="Street"
          type="text"
          name="street"
          defaultValue={user?.location?.street}
        />
      </label>
      <label>
        <span>Country:</span>
        <input
          placeholder="Country"
          aria-label="Country"
          type="text"
          name="country"
          defaultValue={user?.location?.country}
        />
      </label>
      <label>
        <span>State:</span>
        <input
          placeholder="State"
          aria-label="State"
          type="text"
          name="state"
          defaultValue={user?.location?.state}
        />
      </label>
      <label>
        <span>Timezone:</span>
        <input
          placeholder="Timezone"
          aria-label="Timezone"
          type="text"
          name="timezone"
          defaultValue={user?.location?.timezone}
        />
      </label>
      <label>
        <span>Phone:</span>
        <input
          placeholder="Phone"
          aria-label="Phone"
          type="text"
          name="phone"
          defaultValue={user?.phone}
        />
      </label>
      <p>
        <PublicButton type="submit" description="Save" inhibitDefaultClass/>
        <PublicButton type="button" description="Cancel" inhibitDefaultClass onClick={() => {navigate(-1);}}/>
      </p>
    </Form>
  );
}