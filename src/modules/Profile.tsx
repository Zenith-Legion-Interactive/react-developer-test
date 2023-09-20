import { useNavigate, useParams } from 'react-router-dom'
import MemoizedTableRows, { PropertyKey } from '../common/components/Table';
import useDummyApiHandler from '../common/utils/hooks/useDummyApiHandler';
import MemoizedUserRender from '../common/components/Render';
import { IUser } from '../common/utils/hooks/type';
import IButton from '../common/components/IButton';
import { useCallback } from 'react';

const Profile = () => {

const params = useParams<{ userId: string }>();



  
const { state, users } = useDummyApiHandler(`user/${params.userId}`, false);
const navigate = useNavigate();

  
	const header = ['Name', 'Photo','Location','Email', 'Gender', 'Birtdate','Registered Date', 'Title'];
const propertyKeysToShow: PropertyKey[] = [
  { key: 'location', nestedKey: 'city' },
  'email' as unknown as PropertyKey,
  'gender' as unknown as PropertyKey,
  'dateOfBirth' as unknown as PropertyKey,
  'registerDate' as unknown as PropertyKey,
  'title' as unknown as PropertyKey,
];

const onRoute = useCallback(() => {
	navigate('/');
},[navigate])


  return (
		<div>
			<h1>Profile</h1>
			<div>
				<IButton variant='outlined' color='primary' label='Back' onClick={onRoute} />
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
