import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { UserObjectInterface } from "./routes/profile/user";
import axios from 'axios';
import { APILink, appId } from "./store/configureStore";
import { UserFullViewInterface, UserPreviewInterface } from "./types";

const IndexedDB = localforage;
const API_BASE_URL = APILink;
const API_HEADERS = {
  'app-id': `${appId}`,
};


export async function getUsers(query?: string) {
  // await fakeNetwork(`getUsers:${query}`);
  if(!query){
    try {
      const response = await axios.get(`${API_BASE_URL}user`, {
        headers: API_HEADERS,
      });
      IndexedDB.setItem("users", response.data.data);
      localStorage.setItem("1", "loaded")
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
  let users: UserPreviewInterface[] = await IndexedDB.getItem("users") ?? [];
  if (query) {
    users = matchSorter(users, query, { keys: ["firstName", "lastName"] });
  }
  return users.sort(sortBy("lastName", "FirstName"));


}

export async function createUser() {
  await fakeNetwork();
  let id = Math.random().toString(36).substring(2, 9);
  let user = { id, createdAt: Date.now() };
  let users: UserObjectInterface[] = await getUsers();
  users.unshift(user);
  await set(users);
  return user;
}

export async function getUser(id: string) {
  // await fakeNetwork(`user:${id}`);
  try {
    const response = await axios.get(`${API_BASE_URL}user/${id}`, {
      headers: API_HEADERS,
    });
    // IndexedDB.setItem(`${id}`, response.data);
    return response.data as UserFullViewInterface;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export async function updateUser(id: string | number, updates: any) {
  let received: UserFullViewInterface | string = '';
  try {
    const response = await axios.put(`${API_BASE_URL}user/${id}`, updates, {
      headers: API_HEADERS,
    });
    // IndexedDB.setItem(`${id}`, response.data);
    received = response.data as UserFullViewInterface ?? '';
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

  // await fakeNetwork();
  let users: UserObjectInterface[] = await IndexedDB.getItem("users") ?? [];
  let user = users.find(user => user.id === id);
  if (!user) throw new Error("No user found for" + id);
  Object.assign(user, received);
  await set(users);
  return user;
}

export async function deleteUser(id: string | number) {
  try {
    const response = await axios.delete(`${API_BASE_URL}user/${id}`, {
      headers: API_HEADERS,
    });
    console.log(response.data, "Succesful.");
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }

  let users: UserObjectInterface[] = await IndexedDB.getItem("users") ?? [];
  let index = users.findIndex(user => user.id === id);
  if (index > -1) {
    users.splice(index, 1);
    await set(users);
    return true;
  }
  return false;
}

function set(users: UserObjectInterface[]) {
  return IndexedDB.setItem("users", users);
}



// Only For Testing~~ 
let fakeCache: {[key:string]:boolean} = {};

export async function fakeNetwork(key?: string) {
  if (!key) {
    fakeCache = {};
    key = '';
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}

