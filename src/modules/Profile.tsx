import { useParams } from 'react-router-dom'
import MemoizedTableRows, { PropertyKey } from '../common/components/Table';
import useDummyApiHandler from '../common/utils/hooks/useDummyApiHandler';
import MemoizedUserRender from '../common/components/Render';
import { IUser } from '../common/utils/hooks/type';

const Profile = () => {

const params = useParams<{ userId: string }>();



  
const { state, users } = useDummyApiHandler(`user/${params.userId}`, false);

  
	const header = ['Name', 'Photo','Location','Email', 'Gender', 'Birtdate','Registered Date', 'Title'];
const propertyKeysToShow: PropertyKey[] = [
  { key: 'location', nestedKey: 'city' },
  'email' as unknown as PropertyKey,
  'gender' as unknown as PropertyKey,
  'dateOfBirth' as unknown as PropertyKey,
  'registerDate' as unknown as PropertyKey,
  'title' as unknown as PropertyKey,
];



  return (
		<div>
			<h1>Profile</h1>
			<div>
				<a href='/' style={{ textAlign: 'left' }}>
					Back
				</a>
			</div>
			<MemoizedUserRender state={state} data={users}>
				<div className='wrapper h-resize'>
					<MemoizedTableRows data={[users as unknown as IUser]} head={header} clsx='user-tag' isProfile={true} propertyKeys={propertyKeysToShow} />
				</div>
			</MemoizedUserRender>
		</div>
	);
}

export default Profile
