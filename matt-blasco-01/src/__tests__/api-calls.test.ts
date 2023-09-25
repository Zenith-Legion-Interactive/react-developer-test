import axios from 'axios';
import localforage from 'localforage';
import { getUsers } from '../api-calls';
import { APILink, appId } from '../store/configureStore';
import sortBy from 'sort-by'; 

const API_BASE_URL = APILink;
const API_HEADERS = { 
    'app-id': `${appId}`,
};

jest.mock('axios');
jest.mock('localforage');

describe('getUsers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch users and sort them by last name and first name', async () => {
    const users = await getUsers();
    const receivedData = users;

    /** Sort the receivedData using the same sorting criteria as the getUsers function */
    const sortedReceivedData = receivedData.sort(sortBy('lastName', 'firstName'));

    /** Mock axios.get to return the mock data */
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: { data: sortedReceivedData },
    });

    /** Mock localforage.getItem to return null initially (no cached data) */
    (localforage.getItem as jest.MockedFunction<typeof localforage.getItem>).mockResolvedValueOnce(null);

   

    /** Assert axios.get was called with the correct URL and headers */
    expect(axios.get).toHaveBeenCalledWith(`${API_BASE_URL}user`, {
      headers: API_HEADERS,
    });

    /** Assert localforage.getItem was called with 'users' */
    expect(localforage.getItem).toHaveBeenCalledWith('users');

    /**  Assert the returned users are sorted by last name and first name */
    expect(users).toEqual(sortedReceivedData);
  });
});