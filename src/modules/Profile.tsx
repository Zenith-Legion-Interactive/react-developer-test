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

const propertyKeysToShow: PropertyKey<Partial<IUser>>[] = [{ key: 'location', nestedKey: 'city' }, 'email', 'gender', 'dateOfBirth', 'registerDate', 'title'];


const onRoute = useCallback(() => {
	navigate('/');
},[navigate])


  return (
		<div>
			<input type='hidden' name='status' data-testid='getStatus' value={state} />
			<input type='hidden' name='profile' data-testid='getProfile' value={users.length ?? 0} />
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
